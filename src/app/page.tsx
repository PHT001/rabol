import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogosBar from "@/components/landing/LogosBar";
import UrgenceIA from "@/components/landing/UrgenceIA";
import VideoRobot from "@/components/landing/VideoRobot";
import HowItWorks from "@/components/landing/HowItWorks";
import VideoSection from "@/components/landing/VideoSection";
import Features from "@/components/landing/Features";
import VideoClaude from "@/components/landing/VideoClaude";
import Program from "@/components/landing/Program";
import DarkStats from "@/components/landing/DarkStats";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosBar />
      <UrgenceIA />
      <VideoRobot />
      <HowItWorks />
      <VideoSection />
      <Features />
      <VideoClaude />
      <Program />
      <DarkStats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
