import { ConsultationSection } from "@/components/sections/Consultation";
import { HeroSection } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/Process";
import { ProjectsSection } from "@/components/sections/Projects";
import { ServicesSection } from "@/components/sections/Services";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24 lg:space-y-32">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ConsultationSection />
    </div>
  );
}
