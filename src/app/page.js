import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import WhoItsFor from "@/components/home/WhoItsFor";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import ComparisonSection from "@/components/home/ComparisonSection";
import PricingSection from "@/components/home/PricingSection";
import BuiltForTeams from "@/components/home/BuiltForTeams";
import FaqSection from "@/components/home/FaqSection";
import DemoRequestSection from "@/components/home/DemoRequestSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Semantic Site Header & Navigation */}
      <Header />

      {/* Semantic Main Content */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with Live Workflow Diagram & CTAs */}
        <HeroSection />

        {/* Who It's For: Target Personas */}
        <WhoItsFor />

        {/* How It Works: 3 Simple Steps */}
        <HowItWorks />

        {/* Core CRM Features Breakdown */}
        <Features />

        {/* WorkSensy vs Others Comparison */}
        <ComparisonSection />

        {/* Pricing: Simple pricing for growing sales teams */}
        <PricingSection />

        {/* Built For Every Team: Built for teams of every size, across every industry */}
        <BuiltForTeams />

        {/* FAQ Section with Google Rich Snippets Schema */}
        <FaqSection />

        {/* Request a Free Demo / Sales Workflow Form */}
        <DemoRequestSection />
      </main>

      {/* Semantic Site Footer */}
      <Footer />
    </div>
  );
}
