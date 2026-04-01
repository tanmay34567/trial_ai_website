import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToppersSection from "@/components/ToppersSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-edu-primary">
      <Navbar />
      <HeroSection />
      
      <div className="relative z-20">
        <ToppersSection />
        <FeaturesSection />
        <CoursesSection />
        <Testimonials />
        <ContactCTA />
      </div>

      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-edu-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[60%] right-[10%] w-[30%] h-[30%] bg-edu-gold/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </main>
  );
}
