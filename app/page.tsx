import { AdvantagesSection } from "@/components/sections/Advantages";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { HeroSection } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { ServicesSection } from "@/components/sections/Services";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16 lg:space-y-24">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ConsultationSection
        variant="enhanced"
        id="consultation"
        subtitle="Ceritakan kebutuhan ruang Anda, kami siapkan proposal khusus."
        description="Kirimkan brief singkat dan tim kami akan merespon dalam 2×24 jam dengan langkah selanjutnya serta jadwal konsultasi."
        showWhyChooseUs={true}
      />
    </div>
  );
}
