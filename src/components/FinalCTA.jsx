import { ArrowRight } from "lucide-react";
import { finalCta, links } from "../content/site.js";

export default function FinalCTA() {
  return (
    <section className="px-5 pb-8 pt-4 sm:px-8" aria-label="Get started">
      <div className="mx-auto max-w-[1240px]">
        <div className="reveal relative overflow-hidden rounded-[28px] border border-line bg-tint px-6 py-16 text-center sm:px-10 sm:py-24">
          <div className="bg-grid opacity-70" aria-hidden="true" />
          <div
            className="bg-glow bg-glow-blue glow-drift -left-10 top-0 h-[360px] w-[360px]"
            aria-hidden="true"
          />
          <div
            className="bg-glow bg-glow-purple glow-drift -right-10 bottom-0 h-[380px] w-[380px]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[36rem]">
            <h2 className="text-[clamp(2rem,5.6vw,3.25rem)] font-black leading-[1.05] tracking-[-0.04em] text-ink">
              <span className="block">{finalCta.headline[0]}</span>
              <span className="gradient-text block">{finalCta.headline[1]}</span>
            </h2>

            <p className="mt-5 text-[1.0625rem] font-medium text-body sm:text-[1.15rem]">
              {finalCta.subhead}
            </p>

            <a
              href={links.app}
              className="btn-gradient mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-[1rem] font-bold"
            >
              {finalCta.button}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <p className="mt-4 text-[0.85rem] font-semibold text-muted">{finalCta.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
