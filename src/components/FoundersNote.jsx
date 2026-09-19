import { Pill, PromptlyMark } from "./Brand.jsx";
import { foundersNote } from "../content/site.js";

export default function FoundersNote() {
  return (
    <section id="founders-note" className="px-5 py-16 sm:px-8 sm:py-20" aria-label="Founders note">
      <div className="mx-auto max-w-[1240px]">
        <div className="reveal relative overflow-hidden rounded-[28px] border border-line bg-tint px-5 py-12 sm:px-10 sm:py-16">
          <div
            className="bg-glow bg-glow-blue -right-20 -top-24 h-[320px] w-[320px] opacity-40"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[44rem]">
            <Pill>{foundersNote.pill}</Pill>

            <h2 className="mt-5 text-[clamp(1.75rem,4.4vw,2.6rem)] font-black leading-[1.12] tracking-[-0.035em] text-ink">
              {foundersNote.headline}
            </h2>

            {foundersNote.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-5 text-[1.0625rem] font-medium leading-[1.72] text-body"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line-strong/40 pt-7">
              <PromptlyMark className="h-8 w-8" />
              <div>
                <p className="text-[0.95rem] font-black tracking-[-0.01em] text-ink">
                  {foundersNote.signoff}
                </p>
                <p className="mt-0.5 text-[0.85rem] font-medium text-muted">
                  {foundersNote.founders.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
