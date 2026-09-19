import { Bell, Bookmark, Home, Search, User } from "lucide-react";
import { CompanyMark, PreviewBadge, PromptlyMark } from "./Brand.jsx";
import { usePointerParallax } from "../hooks/useMotion.js";
import { productPreview } from "../content/site.js";

const { phone, desktop } = productPreview;

/* ---------------------------------------------------------
   Phone
   --------------------------------------------------------- */

function PhoneMockup({ className = "" }) {
  return (
    <div
      className={`float-panel overflow-hidden rounded-[2.1rem] p-2 ${className}`}
      aria-hidden="true"
    >
      <div className="relative overflow-hidden rounded-[1.7rem] bg-white">
        {/* Status bar + notch */}
        <div className="relative flex items-center justify-between px-4 pb-1 pt-2.5">
          <span className="text-[0.62rem] font-bold text-ink">9:41</span>
          <span className="absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
            <span className="h-1.5 w-4 rounded-[2px] bg-ink/70" />
          </span>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-4 pb-3 pt-2">
          <PromptlyMark className="h-4.5 w-4.5" />
          <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-tint-2">
            <Bell className="h-3.5 w-3.5 text-body" />
            <span className="absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-brand-violet text-[0.52rem] font-black text-white">
              3
            </span>
          </span>
        </div>

        <div className="px-4">
          <p className="text-[1.05rem] font-black leading-tight tracking-[-0.02em] text-ink">
            {phone.greeting}
            <span className="ml-1">👋</span>
          </p>
          <p className="mt-1 text-[0.68rem] font-medium leading-snug text-muted">{phone.subline}</p>

          {/* Filter tabs */}
          <div className="mt-3 flex gap-1.5 overflow-hidden">
            {phone.tabs.map((tab, index) => (
              <span
                key={tab}
                className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6rem] font-bold ${
                  index === 0 ? "bg-ink text-white" : "border border-line bg-white text-muted"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Feed */}
          <ul className="mt-3 space-y-2 pb-3">
            {phone.rows.map((row, index) => (
              <li
                key={row.company}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-2"
              >
                <CompanyMark company={row.company} domain={row.domain} size={28} eager={index < 2} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.7rem] font-black text-ink">
                    {row.company}
                  </span>
                  <span className="block truncate text-[0.62rem] font-medium text-muted">
                    {row.role}
                  </span>
                </span>
                <Bookmark className="h-3.5 w-3.5 shrink-0 text-line-strong" />
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-line bg-white px-2 py-2.5">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Search, label: "Search" },
            { icon: Bookmark, label: "Saved" },
            { icon: Bell, label: "Alerts" },
            { icon: User, label: "Profile" },
          ].map(({ icon: Icon, label, active }) => (
            <span key={label} className="flex flex-col items-center gap-0.5">
              <Icon
                className={`h-3.5 w-3.5 ${active ? "text-brand-violet" : "text-line-strong"}`}
              />
              <span
                className={`text-[0.5rem] font-bold ${active ? "text-brand-violet" : "text-muted"}`}
              >
                {label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Desktop dashboard
   --------------------------------------------------------- */

function DesktopMockup({ className = "" }) {
  return (
    <div
      className={`float-panel overflow-hidden rounded-[1.4rem] ${className}`}
      aria-hidden="true"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-tint px-4 py-2.5">
        <PromptlyMark className="h-4 w-4" />
        <span className="flex flex-1 items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-1.5">
          <Search className="h-3 w-3 shrink-0 text-muted" />
          <span className="truncate text-[0.66rem] font-medium text-muted">
            {desktop.searchPlaceholder}
          </span>
        </span>
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-[0.6rem] font-black text-white">
          A
        </span>
      </div>

      <div className="bg-white px-4 py-3.5">
        {/* Industry tabs */}
        <div className="flex gap-1.5 overflow-hidden border-b border-line pb-2.5">
          {desktop.tabs.map((tab, index) => (
            <span
              key={tab}
              className={`shrink-0 rounded-full px-2.5 py-1 text-[0.62rem] font-bold ${
                index === 0 ? "bg-ink text-white" : "text-muted"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-[1.55fr_0.85fr] gap-3.5">
          {/* Opportunity list */}
          <div>
            <p className="mb-2 text-[0.64rem] font-black uppercase tracking-[0.1em] text-muted">
              Latest opportunities
            </p>
            <ul className="space-y-1.5">
              {desktop.rows.map((row, index) => (
                <li
                  key={row.company}
                  className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-2.5 py-2"
                >
                  <CompanyMark
                    company={row.company}
                    domain={row.domain}
                    size={26}
                    eager={index < 3}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.7rem] font-black text-ink">
                      {row.company}
                    </span>
                    <span className="block truncate text-[0.62rem] font-medium text-muted">
                      {row.role}
                    </span>
                  </span>
                  <Bookmark className="h-3 w-3 shrink-0 text-line-strong" />
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-3">
            <div>
              <p className="mb-2 text-[0.64rem] font-black uppercase tracking-[0.1em] text-muted">
                Your activity
              </p>
              <div className="space-y-1.5">
                {desktop.activity.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line bg-tint px-2.5 py-2">
                    <p className="text-[0.95rem] font-black leading-none text-ink">{item.value}</p>
                    <p className="mt-1 text-[0.58rem] font-semibold leading-tight text-muted">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[0.64rem] font-black uppercase tracking-[0.1em] text-muted">
                Top industries
              </p>
              <div className="space-y-1.5">
                {desktop.industries.map((industry) => (
                  <div key={industry.name} className="flex items-center gap-2">
                    <span className="flex-1 truncate text-[0.58rem] font-semibold text-body">
                      {industry.name}
                    </span>
                    <span className="h-1 w-12 shrink-0 overflow-hidden rounded-full bg-tint-3">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple"
                        style={{ width: `${industry.weight * 100}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Hand-drawn annotation arrows
   --------------------------------------------------------- */

function Annotation({ lines, arrow, className = "" }) {
  return (
    <div className={`pointer-events-none absolute select-none ${className}`} aria-hidden="true">
      <p className="text-[0.82rem] font-semibold leading-[1.35] text-muted [font-family:ui-rounded,'Segoe_UI',system-ui]">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      {arrow}
    </div>
  );
}

const ArrowDownLeft = (
  <svg
    className="absolute -bottom-6 right-6 h-8 w-16 text-line-strong"
    viewBox="0 0 64 32"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M62 2C52 20 34 28 6 27"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M6 27l9-5M6 27l8 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ArrowUpRight = (
  <svg
    className="absolute -top-5 left-2 h-8 w-16 text-line-strong"
    viewBox="0 0 64 32"
    fill="none"
    aria-hidden="true"
  >
    <path d="M2 30C12 12 30 4 58 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M58 5l-9 5M58 5l-8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ---------------------------------------------------------
   Composition
   --------------------------------------------------------- */

export default function ProductPreview({ annotations }) {
  const parallaxRef = usePointerParallax(7);

  return (
    <div ref={parallaxRef} className="relative">
      {/* ---------- Small screens: phone only ----------
          The badge sits above the phone here, because below it would
          collide with the alert card the hero anchors under it. */}
      <div className="relative mx-auto w-full max-w-[280px] pt-7 lg:hidden">
        <PreviewBadge className="absolute left-1/2 top-0 -translate-x-1/2" />
        <PhoneMockup className="float-slow" />
      </div>

      {/* ---------- Large screens: full composition ---------- */}
      <div className="relative hidden lg:block">
        <Annotation
          lines={annotations.topRight}
          arrow={ArrowDownLeft}
          className="right-4 top-0 z-20 text-right xl:right-10"
        />

        <div
          className="relative pt-14"
          style={{ transform: "translate3d(var(--px, 0px), var(--py, 0px), 0)" }}
        >
          {/* Laptop dashboard, pushed right and slightly back */}
          <div className="float-slower ml-auto w-[88%] max-w-[620px]">
            <DesktopMockup />
          </div>

          {/* Phone overlapping the lower-left corner */}
          <div
            className="float-slow absolute -bottom-14 left-0 w-[210px] xl:w-[228px]"
            style={{
              transform: "translate3d(calc(var(--px, 0px) * -1.6), calc(var(--py, 0px) * -1.6), 0)",
            }}
          >
            <PhoneMockup />
          </div>

          <PreviewBadge className="absolute -bottom-6 right-2 z-20" />
        </div>

        <Annotation
          lines={annotations.bottomLeft}
          arrow={ArrowUpRight}
          className="-bottom-20 left-[210px] z-20 xl:left-[250px]"
        />
      </div>
    </div>
  );
}
