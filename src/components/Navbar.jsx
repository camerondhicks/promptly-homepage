import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Brand.jsx";
import { useScrolled } from "../hooks/useMotion.js";
import { links, navLinks } from "../content/site.js";

export default function Navbar() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Close the mobile menu on Escape, on resize past the breakpoint,
  // and whenever focus or a click lands outside it.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    const onPointerDown = (event) => {
      if (panelRef.current?.contains(event.target)) return;
      if (toggleRef.current?.contains(event.target)) return;
      setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-white/80 shadow-[0_1px_20px_-12px_rgba(11,13,23,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#top" className="rounded-lg" aria-label="Promptly — back to top">
          <Logo markClass="h-7 w-7 sm:h-8 sm:w-8" textClass="text-[1.2rem] sm:text-[1.35rem]" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 min-[900px]:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-[0.9rem] font-semibold text-body transition-colors duration-200 hover:bg-tint hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={links.app}
            className="btn-gradient hidden items-center gap-1.5 rounded-xl px-4 py-2.5 text-[0.875rem] font-bold min-[560px]:inline-flex"
          >
            Get Promptly
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-ink transition-colors hover:bg-tint min-[900px]:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-white/95 backdrop-blur-xl min-[900px]:hidden"
      >
        <ul className="mx-auto flex max-w-[1240px] flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-tint"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={links.app}
              onClick={() => setOpen(false)}
              className="btn-gradient flex items-center justify-center gap-1.5 rounded-xl px-4 py-3.5 text-[0.95rem] font-bold"
            >
              Get Promptly
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
