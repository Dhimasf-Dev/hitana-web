import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ConsultationSection } from "@/components/sections/ConsultationSection";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-20 pb-16 pt-6 lg:space-y-24 lg:pt-8">
      {/* Hero Section with Modern Gradient Background */}
      <section className="relative mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-[3rem]"></div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20">
                {project.sector}
              </span>
              <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {project.name}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                {project.summary}
              </p>
            </div>
            
            {/* Enhanced Metrics Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="relative font-serif text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{metric.value}</p>
                  <p className="relative mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="default" className="group rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href="https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1" target="_blank" rel="noreferrer">
                  Konsultasi gratis
                </a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="group rounded-full border-2 border-primary/40 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/projects">
                  Email
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Enhanced Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-card shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <img
                src={project.coverImage}
                alt={`${project.name} hero visual`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Left Column - Challenge & Solution */}
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
                    Tantangan
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
                    Strategi & Solusi
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
            </div>
            
            {/* Enhanced Project Info Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                    Lokasi & Timeline
                  </p>
                </div>
                <div className="grid gap-6 text-sm sm:grid-cols-3">
                  <div className="space-y-2">
                    <p className="font-bold text-foreground text-sm">Lokasi</p>
                    <p className="text-muted-foreground text-sm">{project.location}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-foreground text-sm">Selesai</p>
                    <p className="text-muted-foreground text-sm">{project.completion}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-foreground text-sm">Layanan</p>
                    <p className="text-muted-foreground text-sm">{project.services[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Key Points</h2>
              <p className="text-muted-foreground text-base">Fitur-fitur unggulan yang membuat project ini istimewa</p>
            </div>
            
            <div className="grid gap-4">
              {project.highlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Galeri Visual
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Dokumentasi Project
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Lihat detail visual dari setiap sudut ruang yang telah kami transformasi
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {project.gallery.map((item, index) => (
              <div
                key={item.imageUrl}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-white font-semibold text-sm bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationSection
        variant="enhanced"
        id="project-consultation"
        subtitle="Ceritakan kebutuhan ruang Anda, kami siapkan proposal khusus."
        description="Kirimkan brief singkat dan tim kami akan merespon dalam 2×24 jam dengan langkah selanjutnya serta jadwal konsultasi."
        showWhyChooseUs={true}
      />
    </div>
  );
}
