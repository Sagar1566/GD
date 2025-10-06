import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import EventsTimeline from "@/components/sections/events-timeline";
import MomentsGallery from "@/components/sections/moments-gallery";
import FaqSection from "@/components/sections/faq-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <EventsTimeline />
      <MomentsGallery />
      <FaqSection />
      <FooterSection />
    </main>
  );
}