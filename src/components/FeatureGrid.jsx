import { Bookmark, CalendarRange, Target, Zap } from "lucide-react";
import { features } from "../content/site.js";

const icons = {
  bolt: Zap,
  target: Target,
  bookmark: Bookmark,
  calendar: CalendarRange,
};

export default function FeatureGrid() {
  return (
    <section id="features" className="px-5 py-16 sm:px-8 sm:py-20" aria-label="Features">
      <div className="mx-auto max-w-[1240px]">
        <div className="reveal rounded-[28px] border border-line bg-tint p-2.5 sm:p-3">
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = icons[feature.icon] ?? Zap;
              return (
                <li
                  key={feature.title}
                  className="card card-lift reveal group p-6"
                  style={{ "--reveal-delay": `${index * 70}ms` }}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white ring-1 ring-line transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon
                      className="h-5 w-5 text-brand-violet transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 text-[1.0625rem] font-black tracking-[-0.015em] text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] font-medium leading-[1.6] text-body">
                    {feature.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
