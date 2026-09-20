import { useEffect, useRef, useState } from "react";
import { Bell, Radar, Send, SlidersHorizontal } from "lucide-react";
import { Pill } from "./Brand.jsx";
import { useReducedMotion } from "../hooks/useMotion.js";
import { howItWorks } from "../content/site.js";

const icons = {
  sliders: SlidersHorizontal,
  radar: Radar,
  bell: Bell,
  send: Send,
};

/**
 * Tracks how far the timeline has travelled through the viewport and
 * returns progress from 0 to 1. Reduced motion skips straight to 1 so
 * the finished state is visible without any scroll-driven animation.
 */
function useScrollProgress(reduced) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(reduced ? 1 : 0);
  const frame = useRef(0);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Starts filling as the block reaches the lower third of the
      // screen, completes as its end passes the middle.
      const start = viewport * 0.82;
      const end = -rect.height + viewport * 0.55;
      const span = start - end || 1;
      const value = (start - rect.top) / span;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame.current);
    };
  }, [reduced]);

  return [ref, progress];
}

export default function HowItWorks() {
  const reduced = useReducedMotion();
  const [ref, progress] = useScrollProgress(reduced);
  const { steps } = howItWorks;

  return (
    <section id="how-it-works" className="px-5 py-16 sm:px-8 sm:py-20" aria-label="How it works">
      <div className="mx-auto max-w-[1240px]">
        {/* No overflow-hidden here: it would become the scroll container
            for the sticky intro column and break the pinning. */}
        <div className="rounded-[28px] border border-line bg-tint px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Intro */}
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <Pill>{howItWorks.pill}</Pill>
              <h2 className="mt-5 text-[clamp(2rem,5vw,2.85rem)] font-black leading-[1.04] tracking-[-0.038em] text-ink">
                {howItWorks.headline.map((line, index) => (
                  <span
                    key={line}
                    className={`block ${index === howItWorks.gradientFrom ? "gradient-text" : ""}`}
                  >
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-5 max-w-[30rem] text-[1rem] font-medium leading-[1.65] text-body">
                {howItWorks.body}
              </p>
            </div>

            {/* Timeline */}
            <ol ref={ref} className="relative pl-14">
              <div
                className="timeline-rail left-[21px]"
                style={{ "--progress": progress }}
                aria-hidden="true"
              >
                <span className="timeline-fill" />
              </div>

              {steps.map((step, index) => {
                const Icon = icons[step.icon] ?? Bell;
                // A step lights up once the rail has reached it.
                const threshold = (index + 0.45) / steps.length;
                const active = progress >= threshold;

                return (
                  <li key={step.title} className="relative pb-10 last:pb-0">
                    <span
                      className={`absolute -left-14 top-0 grid h-11 w-11 place-items-center rounded-xl border transition-all duration-500 ${
                        active
                          ? "border-transparent bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-[0_8px_20px_-8px_rgba(76,58,224,0.6)]"
                          : "border-line bg-white text-line-strong"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>

                    <p
                      className={`text-[0.68rem] font-black uppercase tracking-[0.14em] transition-colors duration-500 ${
                        active ? "text-brand-ink" : "text-muted"
                      }`}
                    >
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1.5 text-[1.15rem] font-black tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[30rem] text-[0.925rem] font-medium leading-[1.65] text-body">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
