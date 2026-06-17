import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { MetricsSection } from "@/components/metrics-section";
import { Navigation } from "@/components/navigation";
import { PillarsSection } from "@/components/pillars-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-[#f4f7fb]">
      <Navigation />
      <HeroSection />
      <PillarsSection />
      {/* <MetricsSection /> */}
      <ApproachSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
