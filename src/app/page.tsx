import Navbar from "@/components/landing/Navbar";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import UrgenceIA from "@/components/landing/UrgenceIA";
import DreamSection from "@/components/landing/DreamSection";
import DarkStats from "@/components/landing/DarkStats";
import Testimonials from "@/components/landing/Testimonials";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Program from "@/components/landing/Program";

import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import WindowClosing from "@/components/landing/WindowClosing";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyFloatingCTA from "@/components/landing/StickyFloatingCTA";
import Chatbot from "@/components/landing/Chatbot";

export default function Home() {
  return (
    <>
      <UrgencyBanner />
      <Navbar />
      {/* 1. HOOK — Accroche pattern interrupt */}
      <Hero />
      {/* 2. PROBLÈME — Agiter la douleur */}
      <PainSection />
      <UrgenceIA />
      {/* 3. RÊVE — Vision du résultat */}
      <DreamSection />
      <DarkStats />
      {/* 4. PREUVE SOCIALE — Crédibilité */}
      <Testimonials />
      {/* 5. SOLUTION — Présenter l'offre */}
      <HowItWorks />
      <Features />
      {/* 6. CONTENU — Ce qu'ils reçoivent */}
      <Program />

      {/* 7. OBJECTIONS — Lever les freins */}
      <Pricing />
      <FAQ />
      {/* 8. URGENCE — La fenêtre se ferme */}
      <WindowClosing />
      {/* 9. CTA FINAL — Passer à l'action */}
      <FinalCTA />
      <Footer />
      {/* Floating elements */}
      <StickyFloatingCTA />
      <Chatbot />
    </>
  );
}
