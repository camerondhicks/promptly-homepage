import { useState } from "react";
import { Plus } from "lucide-react";
import { Pill } from "./Brand.jsx";
import { faqs } from "../content/site.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="px-5 py-16 sm:px-8 sm:py-24" aria-label="Frequently asked questions">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <Pill>FAQ</Pill>
          <h2 className="mt-5 text-[clamp(1.85rem,4.6vw,2.6rem)] font-black leading-[1.08] tracking-[-0.038em] text-ink">
            Questions,
            <span className="gradient-text block">answered.</span>
          </h2>
        </div>

        <ul className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <li
                key={faq.question}
                className="card reveal overflow-hidden transition-colors duration-200"
                style={{ "--reveal-delay": `${Math.min(index, 3) * 60}ms` }}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-center justify-between gap-5 px-5 py-4.5 text-left sm:px-6"
                  >
                    <span className="text-[0.975rem] font-bold tracking-[-0.01em] text-ink sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-transparent bg-ink text-white" : "text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  data-open={isOpen}
                  className="accordion-panel"
                >
                  <div>
                    <p className="px-5 pb-5 text-[0.925rem] font-medium leading-[1.68] text-body sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
