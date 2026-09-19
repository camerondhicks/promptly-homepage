import { useCallback, useEffect, useRef, useState } from "react";

/**
 * True when the visitor has asked their OS to reduce motion.
 * Every animated component checks this and degrades to a static
 * end-state rather than simply running faster.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Reveals every `.reveal` descendant of the document once it scrolls
 * into view. One observer for the whole page rather than one per
 * component, and each element is unobserved after firing.
 */
export function useRevealObserver() {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const show = (el) => el.classList.add("is-visible");
    const items = () => Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items().forEach(show);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    items().forEach((el) => observer.observe(el));

    // Sections that mount later (filtered lists, expanded panels)
    // still need picking up.
    const mutation = new MutationObserver(() => {
      items().forEach((el) => observer.observe(el));
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}

/**
 * Fires once when the returned ref enters the viewport.
 * Used to kick off the metric count-up and timeline progress.
 */
export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.3, ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, inView];
}

/**
 * Counts from 0 to `target` with an ease-out curve, once `active`
 * turns true. Reduced motion jumps straight to the final number.
 */
export function useCountUp(target, active, duration = 1500) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!active) return undefined;

    if (reduced) {
      setValue(target);
      return undefined;
    }

    const start = performance.now();

    const tick = (now) => {
      const elapsed = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast off the mark, settles gently.
      const eased = elapsed === 1 ? 1 : 1 - Math.pow(2, -10 * elapsed);
      setValue(Math.round(target * eased));
      if (elapsed < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, active, duration, reduced]);

  return value;
}

/**
 * Tiny cursor-follow parallax for the hero mockups.
 * Movement is capped at `max` px and skipped entirely on touch
 * devices and under reduced motion. Values are written straight
 * to the DOM via a ref so React never re-renders on mouse move.
 */
export function usePointerParallax(max = 6) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return undefined;

    // Pointer parallax is meaningless without a real pointer.
    if (!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches) {
      return undefined;
    }

    const onMove = (event) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        node.style.setProperty("--px", `${(x * max).toFixed(2)}px`);
        node.style.setProperty("--py", `${(y * max).toFixed(2)}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [max, reduced]);

  return ref;
}

/** True once the page has been scrolled past `offset` px. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

/**
 * Types `text` out one character at a time after `delay` ms.
 * Returns the visible substring plus a `done` flag so the caller
 * can decide what to do with the caret.
 */
export function useTypewriter(text, { delay = 450, speed = 55 } = {}) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(() => (reduced ? text.length : 0));

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return undefined;
    }

    setCount(0);
    let index = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setCount(index);
        if (index >= text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed, reduced]);

  return { typed: text.slice(0, count), done: count >= text.length };
}

/**
 * Cycles an index through `length` items on an interval, pausing
 * while the tab is hidden. Returns the index and a `phase` of
 * "in" or "out" so the caller can animate the handover.
 */
export function useCarousel(length, { visibleMs = 4200, gapMs = 520, enabled = true } = {}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");

  const advance = useCallback(() => {
    setPhase("out");
    setTimeout(() => {
      setIndex((current) => (current + 1) % length);
      setPhase("in");
    }, gapMs);
  }, [length, gapMs]);

  useEffect(() => {
    if (!enabled || reduced || length < 2) return undefined;

    let timer = setInterval(advance, visibleMs + gapMs);

    const onVisibility = () => {
      clearInterval(timer);
      if (!document.hidden) timer = setInterval(advance, visibleMs + gapMs);
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [advance, visibleMs, gapMs, enabled, reduced, length]);

  return { index, phase };
}
