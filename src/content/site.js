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
  companiesTracked: 690,
  liveOpportunities: 1988,
  companiesHiring: 354,
};

/*
 * The "Early impact" cards.
 *
 * These are rounded DOWN from the real figures above and shown with a
 * "+", so the number stays true as the product grows. Rounding up would
 * claim more than Promptly actually tracks — 690 is not "700+".
 * The exact figures still drive the product preview's own stat block.
 */
export const impactMetrics = [
  { value: 650, label: "Companies tracked", format: "number", suffix: "+" },
  { value: 1900, label: "Live opportunities", format: "number", suffix: "+" },
  { value: 350, label: "Companies hiring", format: "number", suffix: "+" },
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

/* Order matches the order the sections appear on the page. */
export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "For Students", href: "#for-students" },
  { label: "How It Works", href: "#how-it-works" },
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
  /*
   * Taken from signup data — every name here is a school Promptly has
   * real student users at. Order is roughly by number of students, then
   * alphabetical. Names are shortened only where the short form is
   * unambiguous. Add or remove a line and the marquee updates itself.
   */
  schools: [
    "Trinity College",
    "UCLA",
    "NYU",
    "University of Pennsylvania",
    "Dartmouth College",
    "UNC Chapel Hill",
    "Washington University in St. Louis",
    "UT Austin",
    "University of Illinois Urbana-Champaign",
    "University of Wisconsin–Madison",
    "University of Washington",
    "University of Florida",
    "Howard University",
    "Fisk University",
    "Swarthmore College",
    "Wellesley College",
    "Drexel University",
    "Lehigh University",
    "University of Rochester",
    "Baruch College",
    "Bentley University",
    "NJIT",
    "San José State University",
    "UT Dallas",
    "UT San Antonio",
    "Texas State University",
    "University of Central Oklahoma",
  ],
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
  body: "Pick a track and the feed reshapes around it — the same way it does once your own filters are set.",
  searchPlaceholder: "Search Google, Goldman, McKinsey, Amazon...",
  filters: ["Finance", "Technology", "Healthcare", "Education"],
  /*
   * Row anatomy mirrors the Student Alert Feed in the app: track tag,
   * company, role, how it closes, the student-fit line and the source.
   */
  listings: {
    Finance: [
      {
        company: "BlackRock",
        mark: "BLK",
        role: "2027 Summer Internship Program — AMERS",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 14, 2026",
        fit: "Strong match · Finance + Summer 2027",
        source: "BlackRock — 2027 Summer Internship AMERS",
      },
      {
        company: "D.E. Shaw",
        mark: "DES",
        role: "Fundamental Research Analyst Intern",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 8, 2026",
        fit: "Strong match · Finance + Summer 2027",
        source: "D.E. Shaw — Fundamental Research Analyst Intern 2027",
      },
      {
        company: "Citadel",
        mark: "CITA",
        role: "Quantitative Researcher PhD Intern (US)",
        term: "Internship",
        closes: "Live · Closes see posting",
        fit: "Strong match · Finance + Internship",
        source: "Citadel — verified live posting",
      },
    ],
    Technology: [
      {
        company: "Two Sigma",
        mark: "2S",
        role: "Software Engineering Intern",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 21, 2026",
        fit: "Strong match · Technology + Summer 2027",
        source: "Two Sigma Careers",
      },
      {
        company: "Dropbox",
        mark: "DBX",
        role: "Product Engineering Intern",
        term: "Summer 2027",
        closes: "Live · Closes see posting",
        fit: "Strong match · Technology + Summer 2027",
        source: "Dropbox Careers",
      },
      {
        company: "Hudson River Trading",
        mark: "HRT",
        role: "Algorithm Engineering Intern",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 5, 2026",
        fit: "Strong match · Technology + Summer 2027",
        source: "HRT Careers",
      },
    ],
    Healthcare: [
      {
        company: "Nuveen",
        mark: "NUV",
        role: "Healthcare Investment Intern",
        term: "Summer 2027",
        closes: "Live · Closes see posting",
        fit: "Strong match · Healthcare + Summer 2027",
        source: "Nuveen Careers",
      },
      {
        company: "MetLife",
        mark: "MET",
        role: "Actuarial Summer Intern",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 12, 2026",
        fit: "Strong match · Healthcare + Summer 2027",
        source: "MetLife Careers",
      },
      {
        company: "Mastercard",
        mark: "MA",
        role: "Health Analytics Intern",
        term: "Summer 2027",
        closes: "Live · Closes see posting",
        fit: "Strong match · Healthcare + Summer 2027",
        source: "Mastercard Careers",
      },
    ],
    Education: [
      {
        company: "Federal Reserve Board",
        mark: "FRB",
        role: "Research Assistant Program",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 3, 2026",
        fit: "Strong match · Education + Summer 2027",
        source: "Federal Reserve Board Careers",
      },
      {
        company: "L'Oréal",
        mark: "OR",
        role: "Campus Programs Intern",
        term: "Summer 2027",
        closes: "Live · Closes see posting",
        fit: "Strong match · Education + Summer 2027",
        source: "L'Oréal Careers",
      },
      {
        company: "Bain Capital",
        mark: "BAIN",
        role: "Student Programs Intern",
        term: "Summer 2027",
        closes: "Rolling · Opened Jan 19, 2026",
        fit: "Strong match · Education + Summer 2027",
        source: "Bain Capital Careers",
      },
    ],
  },
};

/* ============================================================
 * 9. HERO PRODUCT MOCKUP + LIVE ALERT DEMO
 *
 *    ⚠️  PRODUCT PREVIEW — illustrative only. Both surfaces are
 *    labelled "Preview" on screen. The structure, wording and
 *    navigation mirror app.joinpromptly.co so the page shows the
 *    product people actually get.
 * ========================================================== */

export const productPreview = {
  label: "Product preview",
  eyebrow: "Student alert dashboard",

  /** Left rail, same order as the app. */
  nav: ["Home", "Openings", "Student Cycles", "Saved", "Alerts", "Profile"],

  /* Phone shows the Openings feed — a list reads well in a narrow column. */
  phone: {
    title: "Student Alert Feed",
    searchPlaceholder: "Search Google, Goldman...",
    tabs: ["All", "Finance", "Technology", "Healthcare"],
    rows: [
      { company: "BlackRock", mark: "BLK", role: "2027 Summer Internship — AMERS", track: "Finance" },
      { company: "D.E. Shaw", mark: "DES", role: "Fundamental Research Analyst", track: "Finance" },
      { company: "Two Sigma", mark: "2S", role: "Software Engineering Intern", track: "Technology" },
      { company: "Citadel", mark: "CITA", role: "Quantitative Researcher Intern", track: "Finance" },
    ],
    nav: ["Home", "Openings", "Cycles", "Saved", "Alerts"],
  },

  /* Dashboard shows the app's Home screen. */
  desktop: {
    greeting: "Good evening",
    profile: {
      label: "Alert profile",
      title: "Tracking Finance, Technology, Healthcare.",
      meta: "Trinity College · Class of 2028 · Neuroscience",
    },
    pulse: {
      label: "Alert pulse",
      title: "New matches since your last review.",
      rows: [
        { company: "BlackRock", role: "2027 Summer Internship Program — AMERS" },
        { company: "D.E. Shaw", role: "Fundamental Research Analyst Intern" },
        { company: "Thoma Bravo", role: "Internship roles" },
      ],
    },
    status: {
      label: "System status",
      line: "Always watching, student-focused openings.",
    },
    openNow: {
      tag: "Open now",
      company: "BlackRock",
      mark: "BLK",
      headline: "2027 Summer Internship Program — AMERS is open.",
      meta: "Finance student alert · Deadline rolling.",
      cta: "View alert",
    },
  },
};

/** Cards that slide into the hero, one after another. */
export const liveAlertDemo = [
  { company: "BlackRock", mark: "BLK", role: "2027 Summer Internship — AMERS" },
  { company: "Citadel", mark: "CITA", role: "Quantitative Researcher Intern" },
  { company: "Two Sigma", mark: "2S", role: "Software Engineering Intern" },
];
/* ============================================================
 * 10. FOUNDERS NOTE
 * ========================================================== */

export const foundersNote = {
  pill: "Founders note",
  headline: ["Getting in isn't only about", "qualifications. It's about timing."],
  paragraphs: [
    "Promptly was founded in response to the immense pressure of securing competitive roles at top-tier institutions. It was built on a frustrating truth: getting a foot in the door is not just about qualifications. A large part is almost entirely about timing.",
    "Highly qualified candidates miss career-defining internships simply because they discover the posting a few days too late. Promptly exists to stop that window from closing before applicants even know the opportunity is there, bridging the vital gap between being an exceptional candidate and having perfect timing.",
  ],
  signoff: "Built by students, for students.",
  founders: [
    {
      name: "Cameron Hicks",
      initials: "CH",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/camerondhicks/",
    },
    {
      name: "Marley Stewart",
      initials: "MS",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/marleystewart/",
    },
    {
      name: "Tremayne Russell",
      initials: "TR",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/tremaynerussell/",
    },
  ],
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
    question: "Do I need to download an app?",
    answer:
      "No. Promptly runs in your browser, and on iPhone you can add it to your home screen so it opens like any other app. A native App Store version is on the way.",
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
        { label: "Instagram", href: links.instagram },
        { label: "TikTok", href: links.tiktok },
        { label: "LinkedIn", href: links.linkedin },
        { label: "X / Twitter", href: links.x },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Promptly`,
};
