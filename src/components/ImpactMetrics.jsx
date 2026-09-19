import { Pill, CompanyMark } from "./Brand.jsx";
import { useCountUp, useInView } from "../hooks/useMotion.js";
import { impactMetrics } from "../content/site.js";

/* Subtle network behind the section — opportunities being found. */
function DiscoveryNetwork() {
  const nodes = [
    [18, 116],
    [74, 52],
    [96, 154],
    [162, 92],
    [176, 186],
    [238, 44],
    [252, 138],
  ];

  return (
    <svg
      viewBox="0 0 320 220"
      className="absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="rgba(11,13,23,0.10)" strokeWidth="1">
        <path d="M18 116 74 52 162 92 238 44" />
        <path d="M18 116 96 154 176 186 252 138" />
        <path d="M74 52 96 154M162 92 176 186M162 92 252 138" />
      </g>

      {nodes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="rgba(11,13,23,0.16)" />
      ))}

      {/* Pulse travelling toward the opportunity card */}
      <path
        d="M18 116 74 52 162 92 238 44"
        pathLength="286"
        stroke="url(#discovery-pulse)"
        strokeWidth="2"
        strokeLinecap="round"
        className="pulse-travel"
      />
      <defs>
        <linearGradient id="discovery-pulse" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563FF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MetricCard({ metric, active, index }) {
  const isNumber = metric.format === "number";
  const counted = useCountUp(isNumber ? metric.value : 0, active && isNumber);

  return (
    <li
      className="card card-lift reveal p-5 sm:p-6"
      style={{ "--reveal-delay": `${index * 80}ms` }}
    >
      <p className="text-[clamp(1.75rem,4.6vw,2.25rem)] font-black leading-none tracking-[-0.035em]">
        <span className="gradient-text">
          {isNumber ? counted.toLocaleString("en-US") : metric.value}
        </span>
      </p>
      <p className="mt-2.5 text-[0.875rem] font-semibold text-muted">{metric.label}</p>
    </li>
  );
}

export default function ImpactMetrics() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section
      id="for-students"
      ref={ref}
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24"
      aria-label="Early impact"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="reveal">
            <Pill>Early impact</Pill>
            <h2 className="mt-5 text-[clamp(2rem,5.2vw,3rem)] font-black leading-[1.04] tracking-[-0.038em] text-ink">
              <span className="block">Students are already</span>
              <span className="gradient-text block">getting ahead.</span>
            </h2>
            <p className="mt-5 max-w-[32rem] text-[1rem] font-medium leading-[1.65] text-body">
              Promptly helps students discover opportunities across hundreds of companies and
              industries.
            </p>
          </div>

          {/* Network + the opportunity being discovered */}
          <div className="relative hidden min-h-[220px] lg:block" aria-hidden="true">
            <DiscoveryNetwork />
            <div className="absolute right-0 top-8 w-[260px] rounded-2xl border border-line bg-white p-3.5 shadow-[0_2px_4px_rgba(11,13,23,0.03),0_20px_44px_-20px_rgba(30,32,68,0.3)]">
              <div className="flex items-center gap-2.5">
                <CompanyMark company="Google" domain="google.com" size={34} />
                <span className="min-w-0">
                  <span className="block truncate text-[0.82rem] font-black leading-tight text-ink">
                    Google
                  </span>
                  <span className="block truncate text-[0.72rem] font-medium leading-tight text-muted">
                    Product Management Internship
                  </span>
                </span>
              </div>
              <p className="mt-2.5 border-t border-line pt-2.5 text-[0.68rem] font-bold text-brand-ink">
                Recently opened
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} active={inView} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
