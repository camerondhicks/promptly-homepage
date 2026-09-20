import { useState } from "react";
import { ExternalLink, Search, Star } from "lucide-react";
import { CompanyMark, PreviewBadge, Pill } from "./Brand.jsx";
import { useReducedMotion } from "../hooks/useMotion.js";
import { interactiveFeed } from "../content/site.js";

const { filters, listings, pill, headline, body, searchPlaceholder } = interactiveFeed;

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
            <div className="mb-3 flex justify-end">
              <PreviewBadge />
            </div>

            {/* Search affordance — visual only */}
            <div
              className="flex items-center gap-2 rounded-xl border border-line bg-tint px-3 py-2.5"
              aria-hidden="true"
            >
              <Search className="h-4 w-4 shrink-0 text-muted" />
              <span className="truncate text-[0.82rem] font-medium text-muted">
                {searchPlaceholder}
              </span>
            </div>

            {/* Filters */}
            <div
              role="tablist"
              aria-label="Filter demo opportunities by track"
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
            <div
              id="feed-panel"
              role="tabpanel"
              aria-labelledby={`feed-tab-${filters.indexOf(active)}`}
              className="mt-3"
            >
              <ul className="space-y-2">
              {rows.map((row, index) => (
                  <li
                    // Keying on the filter restarts the entrance animation
                    // each time the visitor switches track.
                    key={`${active}-${row.company}`}
                    className={`flex items-center gap-3 rounded-xl border border-line bg-white p-3 ${
                      reduced ? "" : "alert-enter"
                    }`}
                    style={reduced ? undefined : { animationDelay: `${index * 60}ms` }}
                  >
                    <CompanyMark company={row.company} mark={row.mark} size={38} />

                    <span className="min-w-0 flex-1">
                      <span className="inline-block rounded-md bg-brand-violet/10 px-1.5 py-0.5 text-[0.62rem] font-black uppercase tracking-[0.08em] text-brand-ink">
                        {active}
                      </span>
                      <span className="mt-1 block truncate text-[0.9rem] font-black text-ink">
                        {row.company}
                      </span>
                      <span className="block truncate text-[0.8rem] font-medium text-muted">
                        {row.role} · {row.term}
                      </span>
                      <span className="mt-0.5 block truncate text-[0.72rem] font-semibold text-body">
                        {row.closes}
                      </span>
                      <span className="block truncate text-[0.72rem] font-semibold text-body">
                        Student fit: {row.fit}
                      </span>
                      <span className="block truncate text-[0.72rem] font-semibold text-muted">
                        Verified source: {row.source}
                      </span>
                    </span>

                    {/* The app's row actions: save, and open the posting. */}
                    <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                      <span className="grid h-7 w-7 place-items-center rounded-lg border border-line bg-white">
                        <Star className="h-3.5 w-3.5 text-line-strong" />
                      </span>
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-violet">
                        <ExternalLink className="h-3.5 w-3.5 text-white" />
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 text-[0.72rem] font-medium text-muted">
              Illustrative roles shown to demonstrate the interface — not live listings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
