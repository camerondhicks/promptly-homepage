/**
 * ─────────────────────────────────────────────────────────────
 *  PROMPTLY — LANDING PAGE CONTENT
 * ─────────────────────────────────────────────────────────────
 *
 *  Everything a non-developer might want to change lives in this
 *  one file. Edit the values here and the whole page updates.
 *
 *  Rules of thumb:
 *   • Never list a company, university or number you can't verify.
 *   • Anything shown purely to demonstrate the UI must stay inside
 *     the `demo` object below, which is always labelled "Preview"
 *     on the page itself.
 */

/* ============================================================
 * 1. METRICS  —  update these as the product grows
 * ========================================================== */

export const promptlyStats = {
  companiesTracked: 366,
  liveOpportunities: 1133,
  companiesHiring: 196,
  topSchool: "UCLA",
};

/** The four cards in the "Early impact" section. */
export const impactMetrics = [
  {
    value: promptlyStats.companiesTracked,
    label: "Companies tracked",
    format: "number",
  },
  {
    value: promptlyStats.liveOpportunities,
    label: "Live opportunities",
    format: "number",
  },
  {
    value: promptlyStats.companiesHiring,
    label: "Companies hiring",
    format: "number",
  },
  {
    value: promptlyStats.topSchool,
    label: "Largest student usage",
    format: "text",
  },
];

/* ============================================================
 * 2. LINKS
 * ========================================================== */

export const links = {
  app: "https://app.joinpromptly.co/",
  site: "https://joinpromptly.co/",
  privacy: "https://app.joinpromptly.co/privacy",
  terms: "https://app.joinpromptly.co/terms",
  email: "mailto:help.promptly@gmail.com",
  instagram: "https://www.instagram.com/joinpromptly",
  tiktok: "https://www.tiktok.com/@joinpromptly",
  // Add these when the accounts exist — the footer hides any empty link.
  linkedin: "",
  x: "",
};

export const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "For Students", href: "#for-students" },
  { label: "FAQ", href: "#faq" },
];

/* ============================================================
 * 3. HERO
 * ========================================================== */

export const hero = {
  pill: "Be first, not late",
  headlineStatic: ["Opportunities", "move fast."],
  headlineTyped: "You can too.",
  subhead:
    "Promptly sends you alerts when internships and early-career opportunities go live, so you can find them while they're still fresh.",
  primaryCta: "Get Promptly",
  secondaryCta: "See how it works",
  assurances: ["Free to join", "Personalized opportunities", "Be the first to know"],
  annotations: {
    topRight: ["Real opportunities.", "Real time."],
    bottomLeft: ["Be the first", "to apply."],
  },
};

/* ============================================================
 * 4. UNIVERSITIES
 *
 *    ⚠️  Student usage only — never an endorsement or partnership.
 *    Add a school here ONLY if you can verify Promptly users there.
 *    The strip renders whatever is in this array.
 * ========================================================== */

export const universityUsage = {
  eyebrow: "Used by students across top universities",
  schools: ["UCLA"],
};

/* ============================================================
 * 5. FEATURES
 * ========================================================== */

export const features = [
  {
    icon: "bolt",
    title: "Instant Alerts",
    body: "Get notified when opportunities matching your interests go live.",
  },
  {
    icon: "target",
    title: "Personalized to You",
    body: "Filter opportunities around your major, graduation year, industries, and interests.",
  },
  {
    icon: "bookmark",
    title: "Follow Companies",
    body: "Keep the companies you care about in one place.",
  },
  {
    icon: "calendar",
    title: "Recruiting Cycles",
    body: "See when different industries and companies typically begin recruiting.",
  },
];

/* ============================================================
 * 6. HOW IT WORKS
 * ========================================================== */

export const howItWorks = {
  pill: "How it works",
  headline: ["From new openings", "to your inbox."],
  gradientFrom: 1, // index of the headline line that gets the gradient
  body: "Set your preferences, follow companies, and get notified when relevant opportunities appear.",
  steps: [
    {
      icon: "sliders",
      title: "Set your preferences",
      body: "Choose your major, graduation year, industries, and interests.",
    },
    {
      icon: "radar",
      title: "Promptly tracks opportunities",
      body: "Promptly organizes openings across the companies and categories you care about.",
    },
    {
      icon: "bell",
      title: "Get notified",
      body: "Receive alerts when relevant opportunities become available.",
    },
    {
      icon: "send",
      title: "Apply early",
      body: "Open the listing and apply while the opportunity is still fresh.",
    },
  ],
};

/* ============================================================
 * 7. RECRUITING CYCLES
 *
 *    Deliberately approximate. These are general seasonal
 *    patterns, not promises about any specific employer.
 *    `start` / `end` are month indexes (0 = Jan, 11 = Dec).
 * ========================================================== */

export const recruitingCycles = {
  pill: "Recruiting cycles",
  headline: ["Know when recruiting starts", "before everyone starts searching."],
  body: "Different industries open their doors at different times of year. Promptly shows you the shape of each cycle so you can plan ahead instead of reacting.",
  disclaimer:
    "Approximate seasonal patterns shown for illustration. Individual employers vary — Promptly tracks the actual openings.",
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  industries: [
    {
      name: "Technology",
      start: 6,
      end: 11,
      peak: "Aug – Oct",
      note: "Many summer programs post in late summer and early fall, often reviewing on a rolling basis.",
    },
    {
      name: "Finance",
      start: 2,
      end: 8,
      peak: "Apr – Jul",
      note: "Often the earliest cycle of all, with some programs opening more than a year ahead of the internship.",
    },
    {
      name: "Consulting",
      start: 5,
      end: 10,
      peak: "Jul – Sep",
      note: "Typically clusters around the start of the academic year, tied closely to campus recruiting.",
    },
    {
      name: "Healthcare",
      start: 8,
      end: 3,
      peak: "Oct – Feb",
      note: "Research and clinical programs frequently run a winter application window for the following summer.",
    },
  ],
};

/* ============================================================
 * 8. INTERACTIVE FEED DEMO
 *
 *    ⚠️  PRODUCT PREVIEW — illustrative roles, not live listings.
 *    The component labels this clearly on screen. Do not move
 *    this data anywhere that reads as a real opportunity feed.
 * ========================================================== */

export const interactiveFeed = {
  pill: "Product preview",
  headline: ["Find what matters", "to you."],
  body: "Pick an industry and the feed reshapes around it — the same way it does once your own filters are set.",
  filters: ["Technology", "Finance", "Healthcare", "Consulting"],
  listings: {
    Technology: [
      { company: "Google", role: "Software Engineering Intern", domain: "google.com", term: "Summer 2027" },
      { company: "Microsoft", role: "Product Manager Intern", domain: "microsoft.com", term: "Summer 2027" },
      { company: "Spotify", role: "Data Analyst Intern", domain: "spotify.com", term: "Summer 2027" },
    ],
    Finance: [
      { company: "J.P. Morgan", role: "Investment Banking Intern", domain: "jpmorgan.com", term: "Summer 2027" },
      { company: "Goldman Sachs", role: "Summer Analyst", domain: "goldmansachs.com", term: "Summer 2027" },
      { company: "BlackRock", role: "Markets Summer Analyst", domain: "blackrock.com", term: "Summer 2027" },
    ],
    Healthcare: [
      { company: "Pfizer", role: "Clinical Research Intern", domain: "pfizer.com", term: "Summer 2027" },
      { company: "Johnson & Johnson", role: "Biomedical Engineering Intern", domain: "jnj.com", term: "Summer 2027" },
      { company: "Genentech", role: "Research Summer Scholar", domain: "gene.com", term: "Summer 2027" },
    ],
    Consulting: [
      { company: "McKinsey & Company", role: "Summer Business Analyst", domain: "mckinsey.com", term: "Summer 2027" },
      { company: "Bain & Company", role: "Associate Consultant Intern", domain: "bain.com", term: "Summer 2027" },
      { company: "Deloitte", role: "Strategy Summer Scholar", domain: "deloitte.com", term: "Summer 2027" },
    ],
  },
};

/* ============================================================
 * 9. HERO PRODUCT MOCKUP + LIVE ALERT DEMO
 *
 *    ⚠️  PRODUCT PREVIEW — illustrative only. Both surfaces are
 *    labelled "Preview" on screen.
 * ========================================================== */

export const productPreview = {
  label: "Product preview",
  phone: {
    greeting: "Good morning",
    subline: "12 new opportunities match your filters.",
    tabs: ["All", "Technology", "Finance", "Healthcare"],
    rows: [
      { company: "Google", role: "Product Management Intern", domain: "google.com" },
      { company: "Goldman Sachs", role: "Summer Analyst", domain: "goldmansachs.com" },
      { company: "Tesla", role: "Vehicle Software Intern", domain: "tesla.com" },
      { company: "Nike", role: "Data Science Intern", domain: "nike.com" },
    ],
  },
  desktop: {
    searchPlaceholder: "Search companies, roles, or keywords",
    tabs: ["All", "Technology", "Finance", "Healthcare", "Consulting", "Saved"],
    rows: [
      { company: "Amazon", role: "Software Development Intern", domain: "amazon.com" },
      { company: "Microsoft", role: "Product Manager Intern", domain: "microsoft.com" },
      { company: "J.P. Morgan", role: "Investment Banking Intern", domain: "jpmorgan.com" },
      { company: "Tesla", role: "Mechanical Engineering Intern", domain: "tesla.com" },
      { company: "Spotify", role: "Data Analyst Intern", domain: "spotify.com" },
    ],
    activity: [
      { value: "82", label: "New alerts this week" },
      { value: "12", label: "Applications" },
      { value: "6", label: "Saved opportunities" },
    ],
    industries: [
      { name: "Technology", weight: 0.92 },
      { name: "Finance", weight: 0.74 },
      { name: "Healthcare", weight: 0.58 },
      { name: "Consulting", weight: 0.44 },
      { name: "Consumer", weight: 0.31 },
    ],
  },
};

/** Cards that slide into the hero, one after another. */
export const liveAlertDemo = [
  { company: "Google", role: "Associate Product Manager", domain: "google.com" },
  { company: "Goldman Sachs", role: "Summer Analyst", domain: "goldmansachs.com" },
  { company: "Tesla", role: "Vehicle Software Intern", domain: "tesla.com" },
];

/* ============================================================
 * 10. FOUNDERS NOTE
 * ========================================================== */

export const foundersNote = {
  pill: "Founders note",
  headline: "We built Promptly because timing kept mattering.",
  paragraphs: [
    "We kept seeing the same problem: great opportunities were opening, but students were finding them days later. Promptly started with a simple idea — make it easier to know when the right opportunity goes live.",
    "Instead of checking dozens of career pages every day, students can keep the opportunities and companies they care about in one place.",
  ],
  signoff: "Built by students, for students.",
  founders: ["Cameron Hicks", "Tremayne Russell", "Marley Stewart"],
};

/* ============================================================
 * 11. FAQ
 * ========================================================== */

export const faqs = [
  {
    question: "How quickly are opportunities added?",
    answer:
      "Promptly monitors company career pages and adds openings as it finds them, rather than waiting for them to filter through to a job board. When something relevant appears, you get an alert.",
  },
  {
    question: "What industries does Promptly cover?",
    answer:
      "Promptly tracks opportunities across technology, finance, healthcare, consulting, science, policy and adjacent student-focused fields. You choose which of them you actually want to hear about.",
  },
  {
    question: "Can I follow specific companies?",
    answer:
      "Yes. Follow the companies, firms, labs and organizations you care about most and their openings stay prioritized in your feed and your alerts.",
  },
  {
    question: "How do alerts work?",
    answer:
      "You set your major, graduation year, industries and interests, and Promptly sends alerts for the openings that match. You control what you're notified about, so the feed stays focused rather than noisy.",
  },
  {
    question: "What are Recruiting Cycles?",
    answer:
      "Different industries recruit at different times of year, and the timing is rarely obvious from the outside. Recruiting Cycles shows you when fields and companies typically begin hiring, so you can prepare before the window opens instead of after.",
  },
  {
    question: "Is Promptly free?",
    answer:
      "Yes — Promptly is free to join. Create an account, set your preferences, and start getting alerts.",
  },
];

/* ============================================================
 * 12. FINAL CTA + FOOTER
 * ========================================================== */

export const finalCta = {
  headline: ["The next opportunity", "could open tomorrow."],
  subhead: "Don't find it three days later.",
  button: "Get Promptly",
  footnote: "Free to join.",
};

export const footer = {
  blurb: "Find internships and early-career opportunities while they're still fresh.",
  columns: [
    {
      title: "Product",
      items: [
        { label: "Features", href: "#features" },
        { label: "Recruiting Cycles", href: "#recruiting-cycles" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      items: [{ label: "Founders Note", href: "#founders-note" }],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy", href: links.privacy },
        { label: "Terms", href: links.terms },
      ],
    },
    {
      title: "Social",
      items: [
        { label: "LinkedIn", href: links.linkedin },
        { label: "X / Twitter", href: links.x },
        { label: "Instagram", href: links.instagram },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Promptly`,
};
