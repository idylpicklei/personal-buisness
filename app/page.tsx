import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { TrackRecordSection } from "@/components/track-record-section";
import { TechBackground } from "@/components/ui/tech-background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-[#f4f7fb]">
      <TechBackground />
      <Navigation />
      <HeroSection />
      <TrackRecordSection />
      <ProjectsSection />
      <ApproachSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
