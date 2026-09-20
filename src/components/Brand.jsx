import { useId } from "react";

/**
 * The Promptly bolt, drawn as a path so it stays razor sharp at any
 * size and can be recoloured. Each instance mints its own gradient id
 * because SVG gradient ids are global to the document.
 */
export function PromptlyMark({ className = "h-8 w-8", title }) {
  // useId() contains colons, which are awkward inside url(#…) references,
  // so they're stripped before the id reaches the gradient.
  const id = `bolt-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="19.5" y1="1.5" x2="6" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2E8BFF" />
          <stop offset="48%" stopColor="#6D4AFF" />
          <stop offset="100%" stopColor="#B026FF" />
        </linearGradient>
      </defs>
      <path
        d="M14.6 1.9 L4.3 14.1 H10.4 L9.5 22.1 L19.8 9.9 H13.7 Z"
        fill={`url(#${id})`}
        stroke={`url(#${id})`}
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Full lockup: bolt + wordmark. The shipped logo PNG has a white
 * wordmark baked in, which disappears on a light background, so the
 * wordmark is set in live text here instead.
 */
export function Logo({ className = "", markClass = "h-8 w-8", textClass = "text-[1.35rem]" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <PromptlyMark className={markClass} />
      <span
        className={`font-black italic uppercase leading-none tracking-[-0.03em] text-brand-wordmark ${textClass}`}
      >
        Promptly
      </span>
    </span>
  );
}

/**
 * A company tile: a coloured square with a short monogram, exactly as
 * the app draws them. Keeping it local means no third-party favicon
 * request per logo and nothing to shift as images load.
 */
const MARK_TONES = ["#111827", "#14532d", "#1e3a5f", "#166534", "#312e45"];

function monogram(company) {
  const words = company.trim().split(/[\s.&]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function CompanyMark({ company, mark, size = 36, className = "" }) {
  const label = mark ?? monogram(company ?? "?");
  // Stable per company, so a given logo is always the same colour.
  const tone =
    MARK_TONES[
      [...(company ?? "")].reduce((sum, char) => sum + char.charCodeAt(0), 0) % MARK_TONES.length
    ];

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-[10px] font-black leading-none text-white ${className}`}
      style={{
        width: size,
        height: size,
        background: tone,
        fontSize: Math.max(7, Math.round(size * (label.length > 3 ? 0.26 : 0.32))),
        letterSpacing: "-0.02em",
      }}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

/**
 * The small "Product preview" chip. Anywhere illustrative data is
 * shown, this sits next to it so nothing reads as a live listing.
 */
export function PreviewBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white/85 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted backdrop-blur ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />
      Product preview
    </span>
  );
}

/** Section eyebrow chip, e.g. EARLY IMPACT — same shape the app uses. */
export function Pill({ children, className = "" }) {
  return <span className={`pill ${className}`}>{children}</span>;
}
