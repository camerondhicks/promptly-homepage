import { useState } from "react";
import { Info } from "lucide-react";
import { Pill } from "./Brand.jsx";
import { recruitingCycles } from "../content/site.js";

const { months, industries, pill, headline, body, disclaimer } = recruitingCycles;

/**
 * Turns a start/end month pair into one or two bar segments, so a
 * cycle that wraps past December (e.g. Oct → Feb) draws correctly
 * instead of inverting.
 */
function segments(start, end) {
  const width = (count) => (count / months.length) * 100;
  if (start <= end) {
    return [{ left: width(start), width: width(end - start + 1) }];
  }
  return [
    { left: width(start), width: width(months.length - start) },
    { left: 0, width: width(end + 1) },
  ];
}

export default function RecruitingCycles() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section
      id="recruiting-cycles"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24"
      aria-label="Recruiting cycles"
    >
      <div
        className="bg-glow bg-glow-purple left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="reveal mx-auto max-w-[44rem] text-center">
          <Pill>{pill}</Pill>
          <h2 className="mt-5 text-[clamp(1.85rem,4.8vw,2.85rem)] font-black leading-[1.08] tracking-[-0.038em] text-ink">
            <span className="block">{headline[0]}</span>
            <span className="gradient-text block">{headline[1]}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[36rem] text-[1rem] font-medium leading-[1.65] text-body">
            {body}
          </p>
        </div>

        <div className="card reveal mt-10 overflow-hidden p-5 sm:p-7">
          {/* Month scale */}
          <div
            className="grid gap-1 pl-[13px] pr-[13px] sm:pl-[153px]"
            style={{ gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))` }}
            aria-hidden="true"
          >
            {months.map((month) => (
              <span
                key={month}
                className="text-center text-[0.62rem] font-bold uppercase tracking-wide text-muted/80"
              >
                <span className="hidden sm:inline">{month}</span>
                <span className="sm:hidden">{month.charAt(0)}</span>
              </span>
            ))}
          </div>

          {/* Rows */}
          <ul className="mt-3 space-y-2">
            {industries.map((industry, index) => {
              const isActive = index === active;
              return (
                <li key={industry.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    aria-describedby="cycle-detail"
                    className={`flex w-full flex-col gap-2 rounded-xl border p-3 text-left transition-colors duration-200 sm:flex-row sm:items-center sm:gap-0 ${
                      isActive ? "border-brand-violet/30 bg-tint" : "border-transparent hover:bg-tint/70"
                    }`}
                  >
                    <span className="shrink-0 text-[0.875rem] font-bold text-ink sm:w-[140px]">
                      {industry.name}
                    </span>

                    <span className="relative block h-7 w-full shrink-0 rounded-lg bg-tint-2 ring-1 ring-line sm:w-auto sm:flex-1">
                      {segments(industry.start, industry.end).map((segment, segmentIndex) => (
                        <span
                          key={segmentIndex}
                          className={`absolute inset-y-[3px] rounded-md bg-gradient-to-r from-brand-blue to-brand-purple transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-45"
                          }`}
                          style={{ left: `${segment.left}%`, width: `${segment.width}%` }}
                        />
                      ))}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <div
            id="cycle-detail"
            aria-live="polite"
            className="mt-4 rounded-xl border border-line bg-tint px-4 py-3.5"
          >
            <p className="text-[0.8rem] font-black uppercase tracking-[0.1em] text-brand-ink">
              {current.name} · typically busiest {current.peak}
            </p>
            <p className="mt-1.5 text-[0.9rem] font-medium leading-[1.6] text-body">
              {current.note}
            </p>
          </div>

          <p className="mt-4 flex items-start gap-2 text-[0.78rem] font-medium leading-[1.55] text-muted">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
