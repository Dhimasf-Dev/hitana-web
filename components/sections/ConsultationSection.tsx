import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ConsultationSectionProps {
  variant?: "default" | "enhanced" | "compact";
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonType?: "link" | "email";
  showWhyChooseUs?: boolean;
  className?: string;
}

export const ConsultationSection = ({
  variant = "default",
  id = "consultation",
  title = "Mulai Project Anda",
  subtitle = "Siap membahas project interior Anda?",
  description = "Konsultasi gratis untuk memahami kebutuhan dan budget project Anda.",
  primaryButtonText = "Konsultasi Gratis",
  primaryButtonHref = "https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1",
  secondaryButtonText = "Email",
  secondaryButtonHref = "mailto:info@hitanainterior.com",
  secondaryButtonType = "email",
  showWhyChooseUs = false,
  className = "",
}: ConsultationSectionProps) => {
  const baseClasses = "mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-primary/30 bg-primary/12 px-4 py-6 shadow-aurora sm:px-6 lg:px-8";
  
  const enhancedClasses = "relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 px-6 py-8 shadow-2xl backdrop-blur-sm sm:px-8 lg:px-12";
  
  const compactClasses = "mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-primary/30 bg-primary/12 px-4 py-6 shadow-aurora sm:px-6 lg:px-8";

  const getSectionClasses = () => {
    switch (variant) {
      case "enhanced":
        return enhancedClasses;
      case "compact":
        return compactClasses;
      default:
        return baseClasses;
    }
  };

  const renderSecondaryButton = () => {
    if (secondaryButtonType === "link") {
      return (
        <Button
          size="lg"
          variant="outline"
          className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
          asChild
        >
          <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
        </Button>
      );
    }

    return (
      <Button
        size="lg"
        variant="outline"
        className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
        asChild
      >
        <a href={secondaryButtonHref}>{secondaryButtonText}</a>
      </Button>
    );
  };

  const renderWhyChooseUs = () => (
    <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            <div className="h-1 w-4 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"></div>
          </div>
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Mengapa memilih Hitana?
          </h3>
        </div>
        
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
            <span className="leading-relaxed">Tim berpengalaman dengan portofolio beragam</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
            <span className="leading-relaxed">Pendekatan desain yang personal dan fungsional</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
            <span className="leading-relaxed">Kualitas material premium dengan harga kompetitif</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
            <span className="leading-relaxed">Garansi dan dukungan purna jual yang terpercaya</span>
          </li>
        </ul>
        
        <div className="group/commitment relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/commitment:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-2 w-2 rounded-full bg-primary/60"></div>
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
                Komitmen kami
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover/commitment:text-foreground/80 transition-colors duration-300">
              Setiap project adalah investasi jangka panjang. Kami memastikan setiap detail desain dan konstruksi memenuhi standar tertinggi untuk kepuasan klien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDefaultRightContent = () => (
    <div className="rounded-3xl border border-primary/25 bg-card-cream p-4 text-sm text-muted-foreground">
      <p className="font-semibold text-primary">Dokumen yang kami butuhkan:</p>
      <ul className="mt-4 space-y-3">
        <li>• Denah serta kondisi eksisting</li>
        <li>• Moodboard atau referensi inspirasi</li>
        <li>• Timeline dan estimasi budget</li>
        <li>• Stakeholder utama dan tujuan ruang</li>
      </ul>
      <p className="mt-6 text-xs text-muted-foreground/80">
        Kami siap bekerja sama dengan arsitek atau kontraktor pilihan Anda untuk memastikan integrasi desain yang mulus.
      </p>
    </div>
  );

  if (variant === "enhanced") {
    return (
      <section id={id} className={`${getSectionClasses()} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                {title}
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                {subtitle}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl">
                {description}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="default" className="group rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href={primaryButtonHref} target="_blank" rel="noreferrer">
                  {primaryButtonText}
                </a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="group rounded-full border-2 border-primary/50 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={secondaryButtonHref}>
                  {secondaryButtonText}
                </a>
              </Button>
            </div>
          </div>
          
          {showWhyChooseUs ? renderWhyChooseUs() : renderDefaultRightContent()}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`${getSectionClasses()} ${className}`}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            {title}
          </span>
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            {subtitle}
          </h2>
          <p className="text-base text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
              <a href={primaryButtonHref} target="_blank" rel="noreferrer">
                {primaryButtonText}
              </a>
            </Button>
            {renderSecondaryButton()}
          </div>
        </div>
        {variant === "compact" ? null : renderDefaultRightContent()}
      </div>
    </section>
  );
};
