import { useState } from "react";
import { Bookmark, Search } from "lucide-react";
import { CompanyMark, PreviewBadge, Pill } from "./Brand.jsx";
import { useReducedMotion } from "../hooks/useMotion.js";
import { interactiveFeed } from "../content/site.js";

const { filters, listings, pill, headline, body } = interactiveFeed;

export default function InteractiveFeed() {
  const [active, setActive] = useState(filters[0]);
  const reduced = useReducedMotion();
  const rows = listings[active] ?? [];

  // Left/right arrows move between chips, as expected of a tablist.
  const onKeyDown = (event) => {
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!offset) return;
    event.preventDefault();
    const next = (filters.indexOf(active) + offset + filters.length) % filters.length;
    setActive(filters[next]);
    document.getElementById(`feed-tab-${next}`)?.focus();
  };

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20" aria-label="Interactive product demo">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="reveal">
            <Pill>{pill}</Pill>
            <h2 className="mt-5 text-[clamp(1.85rem,4.8vw,2.85rem)] font-black leading-[1.05] tracking-[-0.038em] text-ink">
              <span className="block">{headline[0]}</span>
              <span className="gradient-text block">{headline[1]}</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-[1rem] font-medium leading-[1.65] text-body">
              {body}
            </p>
          </div>

          <div className="card reveal relative overflow-hidden p-4 sm:p-5">
            <PreviewBadge className="absolute right-4 top-4 z-10" />

            {/* Search affordance — visual only */}
            <div
              className="flex items-center gap-2 rounded-xl border border-line bg-tint px-3 py-2.5 pr-32"
              aria-hidden="true"
            >
              <Search className="h-4 w-4 shrink-0 text-muted" />
              <span className="truncate text-[0.82rem] font-medium text-muted">
                Search companies, roles, or keywords
              </span>
            </div>

            {/* Filters */}
            <div
              role="tablist"
              aria-label="Filter demo opportunities by industry"
              onKeyDown={onKeyDown}
              className="snap-row mt-3 flex gap-2 overflow-x-auto pb-1"
            >
              {filters.map((filter, index) => {
                const selected = filter === active;
                return (
                  <button
                    key={filter}
                    id={`feed-tab-${index}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="feed-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(filter)}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-[0.8rem] font-bold transition-all duration-200 ${
                      selected
                        ? "btn-gradient"
                        : "border border-line bg-white text-body hover:border-brand-violet/30 hover:text-ink"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Listings */}
            <ul
              id="feed-panel"
              role="tabpanel"
              aria-label={`${active} opportunities`}
              className="mt-3 space-y-2"
            >
              {rows.map((row, index) => (
                <li
                  // Keying on the filter restarts the entrance animation
                  // each time the visitor switches industry.
                  key={`${active}-${row.company}`}
                  className={`flex items-center gap-3 rounded-xl border border-line bg-white p-3 ${
                    reduced ? "" : "alert-enter"
                  }`}
                  style={reduced ? undefined : { animationDelay: `${index * 60}ms` }}
                >
                  <CompanyMark company={row.company} domain={row.domain} size={38} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.9rem] font-black text-ink">
                      {row.company}
                    </span>
                    <span className="block truncate text-[0.8rem] font-medium text-muted">
                      {row.role}
                    </span>
                  </span>
                  <span className="hidden shrink-0 rounded-full border border-line bg-tint px-2.5 py-1 text-[0.68rem] font-bold text-muted sm:inline">
                    {row.term}
                  </span>
                  <Bookmark className="h-4 w-4 shrink-0 text-line-strong" aria-hidden="true" />
                </li>
              ))}
            </ul>

            <p className="mt-3 text-[0.72rem] font-medium text-muted">
              Illustrative roles shown to demonstrate the interface — not live listings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
