import { useState } from "react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Filter,
  Mail,
  Radar,
  Search,
  Star,
  Zap,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Our Story", href: "#our-story" },
];

const features = [
  {
    title: "Live Openings Feed",
    body: "Filter instantly by Technology, Healthcare, Science, and Policy. Track exact deadlines and opening times.",
    icon: Radar,
  },
  {
    title: "Recruiting Cycles Timeline",
    body: "Visualize the entire year. Know exactly when companies like NASA, Mayo Clinic, and Spotify typically open their applications.",
    icon: CalendarDays,
  },
  {
    title: "Multi-Channel Alerts",
    body: "Receive instant push notifications directly to your lock screen, alongside daily email digests and SMS alerts for time-sensitive roles.",
    icon: Bell,
  },
];

const steps = [
  {
    title: "Set Your Filters",
    body: "Select your major, graduation year, and target industries.",
    icon: Filter,
  },
  {
    title: "Save Your Firms",
    body: "Star the companies you care about most to keep them close.",
    icon: Star,
  },
  {
    title: "Get Notified",
    body: "Wait for the ping. Apply before the competition even knows the role exists.",
    icon: Zap,
  },
];

const faqItems = [
  {
    question: "How fast are the notifications?",
    answer:
      "Promptly is built around instant alerts. When a tracked opportunity is published, the product is designed to send students a push notification immediately so they can apply while the window is still fresh.",
  },
  {
    question: "What industries do you track?",
    answer:
      "Promptly tracks opportunities across Technology, Healthcare, Science, Policy, and adjacent student-focused fields like Finance, Consulting, Education, Design, Marketing, and Media.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes. Promptly is planned as both a web app and phone app, so students can manage their search from a dashboard and still receive time-sensitive alerts directly on their lock screen.",
  },
];

const openingRows = [
  { company: "Google", role: "Associate Product Manager", meta: "Opened 18 min ago", tag: "Technology" },
  { company: "Mayo Clinic", role: "Clinical Research Intern", meta: "Opened 1 hr ago", tag: "Healthcare" },
  { company: "NASA", role: "Mission Systems Intern", meta: "Opened yesterday", tag: "Science" },
];

const storySignals = [
  { label: "First access to openings", icon: Zap },
  { label: "Direct-from-source alerts", icon: Radar },
  { label: "Apply before the crowd", icon: Bell },
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Promptly home">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-700/35 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Zap className="h-5 w-5 fill-white text-white" />
      </span>
      <span className="text-lg font-black tracking-tight text-white">Promptly</span>
    </a>
  );
}

function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#11131b]/82 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#waitlist"
          className="gradient-button rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 sm:px-5"
        >
          Join the Waitlist
        </a>
      </nav>
    </header>
  );
}

function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold text-emerald-100">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
          <Check className="h-5 w-5" />
        </span>
        <span>You are on the early access list. We will send the next update soon.</span>
      </div>
    );
  }

  return (
    <form
      id={compact ? undefined : "waitlist"}
      onSubmit={handleSubmit}
      className={`glass flex w-full flex-col gap-3 rounded-3xl p-2 sm:flex-row ${
        compact ? "max-w-xl" : "max-w-2xl"
      }`}
    >
      <label className="sr-only" htmlFor={compact ? "footer-email" : "hero-email"}>
        Email address
      </label>
      <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-black/20 px-4 py-3 ring-1 ring-white/8 transition focus-within:ring-2 focus-within:ring-blue-400/70">
        <Mail className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          id={compact ? "footer-email" : "hero-email"}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your school email"
          className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500 sm:text-base"
        />
      </div>
      <button
        type="submit"
        className="gradient-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 sm:text-base"
      >
        Get Early Access
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function DashboardMockup() {
  return (
    <div className="product-stage mx-auto w-full max-w-5xl lg:absolute lg:-right-[28rem] lg:top-28 lg:w-[52rem] xl:-right-[24rem]">
      <div className="dashboard-perspective glass rounded-[2rem] p-3 shadow-2xl shadow-violet-950/40">
        <div className="rounded-[1.5rem] border border-white/10 bg-[#141722] p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-violet-300">Mission control</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-4xl">Good Morning</h2>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-slate-300 ring-1 ring-white/10">
                <Search className="h-5 w-5" />
              </span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-slate-300 ring-1 ring-white/10">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[0.65rem] font-black text-white">
                  3
                </span>
              </span>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-[1.45rem] border border-white/10 bg-gradient-to-br from-slate-700/55 via-[#292d42] to-violet-700/45 p-5 shadow-2xl shadow-black/25">
              <div className="mb-10 flex items-center justify-between">
                <span className="rounded-full bg-violet-500/25 px-3 py-1 text-[0.7rem] font-black uppercase tracking-wide text-violet-100">
                  Just opened
                </span>
                <span className="text-xs font-bold text-slate-300">Technology</span>
              </div>
              <h3 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
                Google Associate Product Manager just opened 18 min ago.
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-300">
                Deadline Nov 4, 2025. Summer 2026 application.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="gradient-button rounded-2xl px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">
                  Apply Now
                </button>
                <button className="rounded-2xl border border-white/12 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/16">
                  Save
                </button>
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-white/10 bg-white/7 p-5 text-center">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-600 text-white shadow-lg shadow-violet-900/40">
                <Bell className="h-9 w-9 fill-white" />
              </span>
              <h3 className="mt-5 text-xl font-black text-white">Always watching</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
                Only live, relevant openings make it here.
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-hidden">
            {["Technology", "Healthcare", "Science", "Policy"].map((tag) => (
              <span
                key={tag}
                className="shrink-0 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-bold text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {openingRows.map((opening) => (
              <div
                key={opening.company}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-3 transition hover:bg-white/11"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-600 text-xs font-black text-white">
                  {opening.company === "Google" ? "GO" : opening.company === "Mayo Clinic" ? "Mayo" : "NASA"}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-black text-violet-200">{opening.tag}</p>
                  <p className="truncate text-sm font-black text-white">{opening.company}</p>
                  <p className="truncate text-xs font-medium text-slate-400">
                    {opening.role} - {opening.meta}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-violet-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="phone-card glass absolute -right-2 top-0 hidden w-64 rounded-[2.25rem] p-3 shadow-2xl shadow-blue-950/30 md:block">
        <div className="rounded-[1.8rem] border border-white/12 bg-[#11141d] p-4">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">9:41</span>
            <div className="flex gap-1">
              <span className="h-1.5 w-5 rounded-full bg-slate-500" />
              <span className="h-1.5 w-3 rounded-full bg-slate-600" />
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-violet-600 p-4 shadow-lg shadow-violet-900/30">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/18">
              <Bell className="h-6 w-6 fill-white text-white" />
            </div>
            <p className="text-xs font-black uppercase tracking-wide text-white/75">Promptly Alert</p>
            <h4 className="mt-2 text-lg font-black leading-tight text-white">Google APM just opened.</h4>
            <p className="mt-2 text-xs font-semibold text-white/75">Tap to view deadline and apply.</p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-white/12" />
            <div className="h-3 w-3/4 rounded-full bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-20 max-w-3xl">
          <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Never Miss the Window. <span className="gradient-text">Be the First to Apply.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            Stop finding out about top-tier internships days after they open. Promptly sends you instant notifications
            the second an opportunity goes live.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
        <div className="relative z-10 mt-12 lg:mt-0 lg:hidden">
          <DashboardMockup />
        </div>
      </div>
      <div className="hidden lg:block">
        <DashboardMockup />
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article className="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-600 shadow-lg shadow-violet-900/25 transition duration-300 group-hover:scale-105">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-black text-white">{feature.title}</h3>
      <p className="mt-3 text-sm font-medium leading-7 text-slate-300">{feature.body}</p>
    </article>
  );
}

function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Features</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">What it Does</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-white/10 bg-black/14 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">How it Works</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Step-by-Step</h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="glass relative rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
                {index < steps.length - 1 && (
                  <div className="absolute -right-7 top-1/2 z-10 hidden h-px w-10 bg-gradient-to-r from-violet-300 to-transparent lg:block" />
                )}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-widest text-slate-500">Step {index + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-sky-200 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-300">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section id="our-story" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="glass rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#151824] p-5">
            <div className="mb-8 flex items-center justify-between">
              <span className="section-kicker">Founders note</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-600">
                <Zap className="h-6 w-6 fill-white text-white" />
              </span>
            </div>
            <div className="space-y-3">
              {storySignals.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/6 p-4 transition duration-300 hover:border-violet-300/30 hover:bg-white/10"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/25 text-sky-200 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-slate-200">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p className="section-kicker">Our Story</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">About the Founders</h2>
          <div className="glass mt-8 rounded-[2rem] p-6 sm:p-8">
            <p className="text-lg font-medium leading-9 text-slate-200">
              <strong className="font-black text-white">Marley Stewart</strong>,{" "}
              <strong className="font-black text-white">Cameron Hicks</strong>, and{" "}
              <strong className="font-black text-white">Tremayne Russell</strong> started Promptly because we realized
              that getting a foot in the door at top institutions was often just about timing. We built Promptly because
              we were tired of missing the window for competitive opportunities. We are bridging the gap between talent
              and timing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(faqItems[0].question);

  return (
    <section id="faq" className="border-y border-white/10 bg-black/14 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-kicker">FAQ</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((faq) => {
            const isOpen = openQuestion === faq.question;
            return (
              <div key={faq.question} className="glass rounded-3xl transition duration-300 hover:border-white/18">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-white sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-violet-200 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm font-medium leading-7 text-slate-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Logo />
              <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-300">
                Join the waitlist to get instant internship and job alerts the second they go live.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-slate-400">
                <a className="transition hover:text-white" href="#features">
                  Features
                </a>
                <a className="transition hover:text-white" href="#how-it-works">
                  How it Works
                </a>
                <a className="transition hover:text-white" href="#our-story">
                  Our Story
                </a>
                <a className="transition hover:text-white" href="mailto:hello@joinpromptly.com">
                  Contact
                </a>
                <a className="transition hover:text-white" href="#privacy">
                  Privacy
                </a>
                <a className="transition hover:text-white" href="#terms">
                  Terms
                </a>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-slate-400">Final call</p>
              <WaitlistForm compact />
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-sm font-medium text-slate-500">
            Copyright 2026 Promptly. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="app-shell min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <OurStory />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
