import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import UniversityUsage from "./components/UniversityUsage.jsx";
import FeatureGrid from "./components/FeatureGrid.jsx";
import ImpactMetrics from "./components/ImpactMetrics.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import RecruitingCycles from "./components/RecruitingCycles.jsx";
import InteractiveFeed from "./components/InteractiveFeed.jsx";
import FoundersNote from "./components/FoundersNote.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

import { useRevealObserver } from "./hooks/useMotion.js";

/**
 * Section order tells the story in sequence:
 * an opening appears → Promptly finds it → the student is alerted →
 * they apply early.
 */
export default function App() {
  useRevealObserver();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <UniversityUsage />
        <FeatureGrid />
        <ImpactMetrics />
        <HowItWorks />
        <RecruitingCycles />
        <InteractiveFeed />
        <FoundersNote />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <Analytics />
      <SpeedInsights />
    </>
  );
}
