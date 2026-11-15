import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Timeline } from "@/components/sections/Timeline";
import { EcosystemMap } from "@/components/sections/EcosystemMap";
import { EverythingGrid } from "@/components/sections/EverythingGrid";
import { AcademyPreview } from "@/components/sections/AcademyPreview";
import { PaymentGrid } from "@/components/sections/PaymentGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Multilingual } from "@/components/sections/Multilingual";
import { DownloadApp } from "@/components/sections/DownloadApp";

import { EcommerceShowcase } from "@/components/sections/EcommerceShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <FeatureCards />
        <EcommerceShowcase />
        <ProblemSolution />
        <Timeline />
        <EcosystemMap />
        <EverythingGrid />
        <AcademyPreview />
        <PaymentGrid />
        <Multilingual />
        <Testimonials />
        <DownloadApp />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
