import { ArrowRight, Zap } from "lucide-react";
import { CompanyMark } from "./Brand.jsx";
import { useCarousel, useReducedMotion } from "../hooks/useMotion.js";
import { liveAlertDemo } from "../content/site.js";

/**
 * A notification card that slides into the hero, holds, leaves, and is
 * replaced by the next one. It exists to show what Promptly does before
 * anyone reads a word of copy.
 *
 * The card is decorative and duplicated by the surrounding copy, so it
 * is hidden from assistive tech rather than announced on a loop.
 * Under reduced motion it renders once and stays put.
 */
export default function LiveAlertDemo({ className = "" }) {
  const reduced = useReducedMotion();
  const { index, phase } = useCarousel(liveAlertDemo.length, {
    visibleMs: 4200,
    gapMs: 520,
  });

  const alert = liveAlertDemo[index];

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div
        key={index}
        className={`w-[262px] rounded-2xl border border-line bg-white/95 p-3 shadow-[0_2px_4px_rgba(11,13,23,0.03),0_18px_40px_-16px_rgba(30,32,68,0.3)] backdrop-blur-xl ${
          reduced ? "" : phase === "in" ? "alert-enter" : "alert-exit"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="relative grid h-4 w-4 place-items-center">
            <Zap className="h-3.5 w-3.5 fill-brand-violet text-brand-violet" />
          </span>
          <span className="text-[0.66rem] font-black uppercase tracking-[0.1em] text-brand-ink">
            New opportunity
          </span>
          <span className="relative ml-auto h-1.5 w-1.5 rounded-full bg-emerald-500 text-emerald-500">
            {!reduced && <span className="ping-dot" />}
          </span>
        </div>

        <div className="mt-2.5 flex items-center gap-2.5">
          <CompanyMark company={alert.company} mark={alert.mark} size={34} />
          <span className="min-w-0">
            <span className="block truncate text-[0.82rem] font-black leading-tight text-ink">
              {alert.company}
            </span>
            <span className="block truncate text-[0.72rem] font-medium leading-tight text-muted">
              {alert.role}
            </span>
          </span>
        </div>

        <div className="mt-2.5 flex items-center justify-between border-t border-line pt-2.5">
          <span className="text-[0.68rem] font-bold text-emerald-600">Just opened</span>
          <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-brand-ink">
            View opportunity
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
