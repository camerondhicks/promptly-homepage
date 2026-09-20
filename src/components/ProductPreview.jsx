import { Bell, CalendarRange, Home, Search, Star, User } from "lucide-react";
import { CompanyMark, PromptlyMark } from "./Brand.jsx";
import { usePointerParallax } from "../hooks/useMotion.js";
import { productPreview } from "../content/site.js";

const { phone, desktop, nav, eyebrow } = productPreview;

/* The app's left rail, in order. */
const NAV_ICONS = {
  Home,
  Openings: Search,
  "Student Cycles": CalendarRange,
  Saved: Star,
  Alerts: Bell,
  Profile: User,
};

const PHONE_NAV_ICONS = {
  Home,
  Openings: Search,
  Cycles: CalendarRange,
  Saved: Star,
  Alerts: Bell,
};

/* ---------------------------------------------------------
   Phone — the app's Openings feed
   --------------------------------------------------------- */

function PhoneMockup({ className = "" }) {
  return (
    /* iPhone: titanium rail, dark bezel, dynamic island. */
    <div
      className={`device-shadow relative rounded-[2.45rem] bg-gradient-to-b from-[#3a3c44] to-[#1b1c21] p-[3px] ${className}`}
      aria-hidden="true"
    >
      {/* Side buttons */}
      <span className="absolute -left-[2px] top-[74px] h-5 w-[2px] rounded-l-sm bg-[#2b2d34]" />
      <span className="absolute -left-[2px] top-[104px] h-9 w-[2px] rounded-l-sm bg-[#2b2d34]" />
      <span className="absolute -right-[2px] top-[96px] h-12 w-[2px] rounded-r-sm bg-[#2b2d34]" />

      <div className="overflow-hidden rounded-[2.3rem] bg-[#0b0d17] p-[5px]">
        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[2rem] bg-white">
          {/* Status bar + dynamic island */}
          <div className="relative flex shrink-0 items-center justify-between px-4 pb-1 pt-2.5">
            <span className="text-[0.62rem] font-bold text-ink">9:41</span>
            <span className="absolute left-1/2 top-1.5 h-[15px] w-[46px] -translate-x-1/2 rounded-full bg-ink" />
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
              <span className="h-1.5 w-4 rounded-[2px] bg-ink/70" />
            </span>
          </div>

        {/* App header */}
        <div className="flex shrink-0 items-center justify-between px-4 pb-2 pt-2">
          <PromptlyMark className="h-4.5 w-4.5" />
          <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-tint-2">
            <Bell className="h-3.5 w-3.5 text-body" />
            <span className="absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-brand-violet text-[0.52rem] font-black text-white">
              3
            </span>
          </span>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden px-3.5">
          <p className="text-[0.92rem] font-black leading-tight tracking-[-0.02em] text-ink">
            {phone.title}
          </p>

          {/* Search */}
          <div className="mt-2.5 flex items-center gap-1.5 rounded-xl bg-tint-2 px-2.5 py-1.5">
            <Search className="h-3 w-3 shrink-0 text-muted" />
            <span className="truncate text-[0.6rem] font-medium text-muted">
              {phone.searchPlaceholder}
            </span>
          </div>

          {/* Track filters */}
          <div className="mt-2.5 flex gap-1.5 overflow-hidden">
            {phone.tabs.slice(0, 3).map((tab, index) => (
              <span
                key={tab}
                className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6rem] font-bold ${
                  index === 0 ? "bg-brand-violet text-white" : "bg-tint-2 text-muted"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Feed */}
          <ul className="mt-2.5 space-y-2 pb-3">
            {phone.rows.map((row) => (
              <li
                key={row.company}
                className="flex items-center gap-2 rounded-xl border border-line bg-white p-2"
              >
                <CompanyMark company={row.company} mark={row.mark} size={26} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.5rem] font-black uppercase tracking-[0.1em] text-brand-ink">
                    {row.track}
                  </span>
                  <span className="block truncate text-[0.68rem] font-black leading-tight text-ink">
                    {row.company}
                  </span>
                  <span className="block truncate text-[0.58rem] font-medium leading-tight text-muted">
                    {row.role}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom nav */}
        <div className="mt-auto flex shrink-0 items-center justify-around border-t border-line bg-white px-2 py-2.5">
          {phone.nav.map((label, index) => {
            const Icon = PHONE_NAV_ICONS[label] ?? Home;
            const active = index === 1;
            return (
              <span key={label} className="flex flex-col items-center">
                <Icon
                  className={`h-[15px] w-[15px] ${active ? "text-brand-violet" : "text-line-strong"}`}
                />
                {active && <span className="mt-1 h-[3px] w-[3px] rounded-full bg-brand-violet" />}
              </span>
            );
          })}
          </div>

          {/* Home indicator */}
          <span className="mx-auto mb-1.5 mt-1 block h-[3px] w-[82px] shrink-0 rounded-full bg-ink/25" />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Dashboard — the app's Home screen
   --------------------------------------------------------- */

function Sidebar() {
  return (
    <div className="flex shrink-0 flex-col border-r border-line bg-tint px-2.5 py-4">
      <span className="mb-3 flex items-center gap-1 px-1">
        <PromptlyMark className="h-4 w-4" />
        <span className="text-[0.56rem] font-black italic uppercase tracking-[-0.02em] text-brand-wordmark">
          Promptly
        </span>
      </span>

      <ul className="space-y-0.5">
        {nav.map((item, index) => {
          const Icon = NAV_ICONS[item] ?? Home;
          const active = index === 0;
          return (
            <li key={item}>
              <span
                className={`flex items-center gap-1.5 rounded-lg px-1.5 py-1.5 ${
                  active ? "bg-white text-brand-ink shadow-[0_1px_2px_rgba(11,13,23,0.05)]" : "text-muted"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap text-[0.66rem] font-bold">{item}</span>
              </span>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

function DesktopMockup({ className = "" }) {
  return (
    /* MacBook: aluminium lid, camera, and the hinge/base below it. */
    <div className={className} aria-hidden="true">
      <div className="device-shadow relative rounded-t-[0.85rem] bg-gradient-to-b from-[#3a3c44] to-[#1f2126] px-[7px] pb-[7px] pt-[13px]">
        <span className="absolute left-1/2 top-[5px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/30" />

        <div className="flex overflow-hidden rounded-[0.4rem] bg-white">
          <Sidebar />

      <div className="min-w-0 flex-1 px-5 py-4">
        <p className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-brand-ink">
          {eyebrow}
        </p>
        <p className="mt-0.5 text-[1.2rem] font-black leading-tight tracking-[-0.03em] text-ink xl:text-[1.45rem]">
          {desktop.greeting}
        </p>

        {/* Alert profile + alert pulse, side by side as in the app */}
        <div className="mt-3 grid gap-2.5 xl:grid-cols-2">
          <div className="rounded-xl border border-line bg-tint p-2.5 max-xl:hidden">
            <span className="inline-block rounded-md bg-brand-violet/10 px-1.5 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.1em] text-brand-ink">
              {desktop.profile.label}
            </span>
            <p className="mt-2 text-[0.8rem] font-black leading-tight text-ink">
              {desktop.profile.title}
            </p>
            <p className="mt-2 text-[0.62rem] font-bold leading-snug text-muted">
              {desktop.profile.meta}
            </p>
          </div>

          <div className="rounded-xl border border-line bg-tint p-2.5">
            <span className="inline-block rounded-md bg-brand-violet/10 px-1.5 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.1em] text-brand-ink">
              {desktop.pulse.label}
            </span>
            <p className="mt-2 text-[0.8rem] font-black leading-tight text-brand-ink">
              {desktop.pulse.title}
            </p>
            <ul className="mt-2 space-y-1.5">
              {desktop.pulse.rows.slice(0, 2).map((row) => (
                <li key={row.company}>
                  <span className="block truncate text-[0.7rem] font-black text-ink">
                    {row.company}
                  </span>
                  <span className="block truncate text-[0.62rem] font-medium text-muted">
                    {row.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The open-now alert */}
        <div className="mt-2.5 rounded-xl border border-line bg-tint p-2.5">
          <div className="flex items-start gap-2.5">
            <span className="min-w-0 flex-1">
              <span className="inline-block rounded-md bg-brand-violet/10 px-1.5 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.1em] text-brand-ink">
                {desktop.openNow.tag}
              </span>
              <span className="mt-1.5 block text-[0.84rem] font-black leading-tight tracking-[-0.01em] text-ink xl:text-[0.96rem]">
                {desktop.openNow.company} {desktop.openNow.headline}
              </span>
              <span className="mt-1.5 block text-[0.68rem] font-medium text-muted">
                {desktop.openNow.meta}
              </span>
            </span>
            <CompanyMark company={desktop.openNow.company} mark={desktop.openNow.mark} size={40} />
          </div>
          <span className="btn-gradient mt-2.5 inline-flex rounded-lg px-3.5 py-2 text-[0.68rem] font-black">
            {desktop.openNow.cta}
          </span>
        </div>

          </div>
        </div>
      </div>

      {/* Base + hinge notch */}
      <div className="relative h-[11px] rounded-b-[0.45rem] bg-gradient-to-b from-[#d9dce3] to-[#9ea3ae] shadow-[0_10px_18px_-10px_rgba(30,32,68,0.5)]">
        <span className="absolute left-1/2 top-0 h-[3px] w-[58px] -translate-x-1/2 rounded-b-[3px] bg-[#8b909d]" />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Handwritten annotations
   --------------------------------------------------------- */

function Annotation({ lines, className = "" }) {
  return (
    <p
      className={`pointer-events-none absolute select-none text-[0.95rem] font-bold leading-[1.35] text-body ${className}`}
      aria-hidden="true"
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

/* ---------------------------------------------------------
   Composition
   --------------------------------------------------------- */

export default function ProductPreview({ annotations }) {
  const parallaxRef = usePointerParallax(7);

  return (
    <div ref={parallaxRef} className="relative">
      {/* ---------- Small screens: phone only ----------
          The badge sits above the phone here, because below it would
          collide with the alert card the hero anchors under it. The
          padding has to clear the badge's full height plus the float. */}
      <div className="relative mx-auto w-full max-w-[280px] lg:hidden">
        <PhoneMockup className="float-slow" />
      </div>

      {/* ---------- Large screens: full composition ---------- */}
      <div className="relative hidden lg:block">
        <Annotation lines={annotations.topRight} className="right-4 top-0 z-20 text-right xl:right-8" />

        <div
          className="relative pt-16"
          style={{ transform: "translate3d(var(--px, 0px), var(--py, 0px), 0)" }}
        >
          {/*
            Phone and dashboard are laid out side by side rather than
            stacked absolutely: the dashboard takes whatever width is
            left, so the two overlap only at its outer edge and neither
            one's content is ever buried.
          */}
          {/*
            The MacBook takes the whole column so its lid keeps a real
            laptop's landscape proportions, and the iPhone rests against
            its bottom-right corner — over the alert card's empty right
            side, so no content is covered. Below xl the column is too
            narrow for both, and the phone drops out.
          */}
          <div className="relative">
            <DesktopMockup className="float-slower" />

            <div
              className="absolute bottom-[-196px] left-[-56px] z-20 hidden w-[196px] xl:block"
              style={{
                transform:
                  "translate3d(calc(var(--px, 0px) * -1.4), calc(var(--py, 0px) * -1.4), 0)",
              }}
            >
              <PhoneMockup className="float-slow" />
            </div>
          </div>
        </div>

        <Annotation
          lines={annotations.bottomLeft}
          className="-bottom-10 left-[210px] z-20 max-xl:hidden xl:left-[236px]"
        />
      </div>
    </div>
  );
}
