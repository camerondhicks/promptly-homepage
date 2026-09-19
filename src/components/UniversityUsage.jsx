import { universityUsage } from "../content/site.js";

/**
 * Student usage — never an endorsement or partnership.
 *
 * The strip only makes sense with a few names in it, so with fewer
 * than three verified schools the section renders as a single
 * understated line instead of a thin, padded-out logo row.
 * Add schools in `content/site.js`.
 */
export default function UniversityUsage() {
  const { eyebrow, schools } = universityUsage;

  if (!schools.length) return null;

  const isStrip = schools.length >= 3;

  return (
    <section className="border-y border-line bg-tint/60 px-5 py-10 sm:px-8" aria-label="Student usage">
      <div className="mx-auto max-w-[1240px]">
        {isStrip ? (
          <div className="reveal">
            <p className="text-center text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted">
              {eyebrow}
            </p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {schools.map((school) => (
                <li
                  key={school}
                  className="text-[1.15rem] font-semibold tracking-[-0.01em] text-muted/85 [font-family:ui-serif,Georgia,serif]"
                >
                  {school}
                </li>
              ))}
              <li className="text-[0.85rem] font-medium text-muted/70">and more</li>
            </ul>
          </div>
        ) : (
          <p className="reveal text-center text-[0.9rem] font-medium text-muted">
            <span className="font-bold uppercase tracking-[0.14em] text-muted/90">{eyebrow}</span>
            <span className="mx-2 hidden text-line-strong sm:inline">·</span>
            <span className="mt-1.5 block sm:mt-0 sm:inline">
              largest student community at{" "}
              <span className="font-bold text-ink">{schools[0]}</span>
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
