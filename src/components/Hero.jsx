import { ArrowRight, Check } from "lucide-react";
import { Pill } from "./Brand.jsx";
import ProductPreview from "./ProductPreview.jsx";
import LiveAlertDemo from "./LiveAlertDemo.jsx";
import { useTypewriter } from "../hooks/useMotion.js";
import { hero, links } from "../content/site.js";

export default function Hero() {
  const { typed, done } = useTypewriter(hero.headlineTyped, { delay: 520, speed: 52 });

  return (
    <section id="top" className="relative overflow-x-clip px-5 pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-36">
      {/* Ambient background */}
      <div className="bg-grid" aria-hidden="true" />
      <div
        className="bg-glow bg-glow-blue glow-drift -left-24 top-8 h-[420px] w-[420px]"
        aria-hidden="true"
      />
      <div
        className="bg-glow bg-glow-purple glow-drift right-0 top-40 h-[480px] w-[480px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-8">
        {/* ---------------- Copy ---------------- */}
        <div className="relative z-10">
          <Pill>{hero.pill}</Pill>

          <h1 className="mt-6 text-[clamp(2.6rem,8.2vw,4.4rem)] font-black leading-[0.96] tracking-[-0.042em] text-ink">
            {hero.headlineStatic.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            {/*
              The typed line is mirrored in a visually hidden span so
              screen readers get the whole headline at once instead of
              a string that mutates character by character.
            */}
            <span className="sr-only">{hero.headlineTyped}</span>
            <span className="block" aria-hidden="true">
              <span className="gradient-text">{typed}</span>
              <span className={`type-caret ${done ? "" : "type-caret--typing"}`} />
            </span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-[1.0625rem] font-medium leading-[1.65] text-body sm:text-[1.125rem]">
            {hero.subhead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.app}
              className="btn-gradient inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[0.975rem] font-bold"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[0.975rem] font-bold"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
            {hero.assurances.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[0.85rem] font-semibold text-muted">
                <Check className="h-4 w-4 shrink-0 text-brand-violet" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Product ---------------- */}
        {/* Bottom padding on small screens leaves room for the alert
            card, which is anchored below the phone. */}
        <div className="relative z-10 mt-4 pb-28 lg:mt-0 lg:pb-0">
          <ProductPreview annotations={hero.annotations} />

          {/* Alert demo: tucked against the composition on desktop,
              centred under the phone on smaller screens. */}
          <LiveAlertDemo className="absolute -bottom-10 left-1/2 z-30 -translate-x-1/2 lg:-bottom-4 lg:left-auto lg:right-[-10px] lg:translate-x-0" />
        </div>
      </div>
    </section>
  );
}
