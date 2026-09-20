import { useReducedMotion } from "../hooks/useMotion.js";
import { universityUsage } from "../content/site.js";

/**
 * Student usage — never an endorsement or partnership.
 *
 * With three or more verified schools this is a marquee that drifts
 * horizontally; below that it reads as a single understated line,
 * because a strip of one or two names looks padded out. Add schools in
 * `content/site.js`.
 *
 * The moving copy is duplicated and hidden from assistive tech; the
 * real list is rendered once, unanimated, for screen readers.
 */
export default function UniversityUsage() {
  const { eyebrow, schools } = universityUsage;
  const reduced = useReducedMotion();

  if (!schools.length) return null;

  const name =
    "shrink-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-muted [font-family:ui-serif,Georgia,serif]";

  if (schools.length < 3) {
    return (
      <section
        className="border-y border-line bg-tint/60 px-5 py-10 sm:px-8"
        aria-label="Student usage"
      >
        <div className="mx-auto max-w-[1240px]">
          <p className="reveal text-center text-[0.9rem] font-medium text-muted">
            <span className="font-bold uppercase tracking-[0.14em] text-muted/90">{eyebrow}</span>
            <span className="mx-2 hidden text-line-strong sm:inline">·</span>
            <span className="mt-1.5 block sm:mt-0 sm:inline">
              largest student community at{" "}
              <span className="font-bold text-ink">{schools[0]}</span>
            </span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="overflow-hidden border-y border-line bg-tint/60 py-10"
      aria-label="Student usage"
    >
      <p className="reveal px-5 text-center text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted sm:px-8">
        {eyebrow}
      </p>

      {reduced ? (
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-3 px-5 sm:px-8">
          {schools.map((school) => (
            <li key={school} className={name}>
              {school}
            </li>
          ))}
        </ul>
      ) : (
        <div className="marquee mt-6">
          {/*
            Two identical copies, shifted by exactly one copy's width.
            The spacing lives on each item rather than in a flex gap so
            the two copies are the same width and the loop never jumps.
          */}
          <ul className="marquee-track flex w-max items-center" aria-hidden="true">
            {[...schools, ...schools].map((school, index) => (
              <li key={`${school}-${index}`} className={`${name} pr-9`}>
                {school}
              </li>
            ))}
          </ul>

          <ul className="sr-only">
            {schools.map((school) => (
              <li key={school}>{school}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
