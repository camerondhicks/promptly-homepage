import { useId, useState } from "react";

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
        className={`font-black italic uppercase leading-none tracking-[-0.03em] text-ink ${textClass}`}
      >
        Promptly
      </span>
    </span>
  );
}

/**
 * A company's favicon, with a lettered fallback when the request
 * fails or is blocked. Dimensions are fixed so the surrounding
 * mockups never shift as logos load.
 */
export function CompanyMark({ company, domain, size = 36, eager = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  const initial = company?.trim().charAt(0).toUpperCase() ?? "?";

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-[10px] border border-line bg-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {failed || !domain ? (
        <span className="text-[0.7rem] font-black text-muted">{initial}</span>
      ) : (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt=""
          width={size - 12}
          height={size - 12}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="object-contain"
          style={{ width: size - 12, height: size - 12 }}
        />
      )}
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
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white/85 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted backdrop-blur ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />
      Product preview
    </span>
  );
}

/** Section eyebrow pill, e.g. ● EARLY IMPACT */
export function Pill({ children, className = "" }) {
  return (
    <span className={`pill ${className}`}>
      <span className="pill-dot" />
      {children}
    </span>
  );
}
