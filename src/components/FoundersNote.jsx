import { Linkedin } from "lucide-react";
import { Pill, PromptlyMark } from "./Brand.jsx";
import { foundersNote } from "../content/site.js";

/** One founder: monogram, name, role — the whole tile is the link. */
function FounderTile({ founder, index }) {
  return (
    <li className="reveal" style={{ "--reveal-delay": `${index * 70}ms` }}>
      <a
        href={founder.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-lift group flex items-center gap-2.5 p-3"
      >
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[0.8rem] font-black tracking-[-0.02em] text-white"
          style={{ background: "var(--brand-gradient)" }}
          aria-hidden="true"
        >
          {founder.initials}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.875rem] font-black tracking-[-0.015em] text-ink">
            {founder.name}
          </span>
          <span className="block text-[0.75rem] font-semibold text-muted">{founder.role}</span>
        </span>

        <Linkedin
          className="h-3.5 w-3.5 shrink-0 text-line-strong transition-colors duration-200 group-hover:text-brand-violet"
          aria-hidden="true"
        />
        <span className="sr-only">LinkedIn profile, opens in a new tab</span>
      </a>
    </li>
  );
}

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
              <span className="block">{foundersNote.headline[0]}</span>
              <span className="gradient-text block">{foundersNote.headline[1]}</span>
            </h2>

            {foundersNote.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-5 text-[1.0625rem] font-medium leading-[1.72] text-body"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-9 border-t border-line-strong/40 pt-7">
              <p className="flex items-center gap-2.5 text-[0.95rem] font-black tracking-[-0.01em] text-ink">
                <PromptlyMark className="h-6 w-6" />
                {foundersNote.signoff}
              </p>

              <ul className="mt-4 grid gap-2.5 sm:grid-cols-3">
                {foundersNote.founders.map((founder, index) => (
                  <FounderTile key={founder.name} founder={founder} index={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
