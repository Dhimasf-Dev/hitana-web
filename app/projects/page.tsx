"use client";

import { Button } from "@/components/ui/button";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { getImageKitUrl } from "@/lib/imagekit";
import { useEffect, useState } from "react";
import { Grid, List } from "lucide-react";

type ImageItem = {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  width?: number;
  height?: number;
  createdAt?: string;
};

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(12);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/images?folder=Foto&limit=120`);
        const data = await res.json();
        if (mounted) setImages(data.items || []);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const displayedImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const loadMore = () => setVisibleCount(prev => prev + 12);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((idx) => (idx === null ? null : (idx - 1 + images.length) % images.length));
  const showNext = () => setSelectedIndex((idx) => (idx === null ? null : (idx + 1) % images.length));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, images.length]);

  return (
    <div className="space-y-20 pb-16 pt-6 lg:space-y-24 lg:pt-8">
      <section className="relative mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-[3rem]"></div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20">
                Project portfolio
              </span>
              <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Menyusun ruang yang beresonansi dengan brand dan gaya hidup klien kami.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Kami menghadirkan pengalaman interior end-to-end—mulai dari konsep, produksi furnitur, hingga styling akhir. Setiap proyek adalah kolaborasi yang menggabungkan fungsi, estetika, dan cerita unik penghuni.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="default" className="group rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href="https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1" target="_blank" rel="noreferrer">Konsultasi gratis</a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="group rounded-full border-2 border-primary/40 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:info@hitanainterior.com">Email</a>
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-card shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1300&q=80"
                alt="Interior design project showcase dengan furniture custom dan finishing premium"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-portfolio" className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Project portfolio
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Proses menyeluruh yang menghasilkan ruang fungsional sekaligus berkarakter.
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Kami mendokumentasikan setiap milestone mulai dari konsep awal hingga instalasi. Berikut beberapa proyek yang menampilkan kedalaman layanan kami.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 rounded-xl bg-muted/30 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-2 transition-all duration-200 ${
                    viewMode === "grid" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg p-2 transition-all duration-200 ${
                    viewMode === "list" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              <div className="text-xs text-muted-foreground">
                {loading ? "Loading images..." : null}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">{displayedImages.length}</span> of{" "}
                <span className="font-medium text-foreground">{images.length}</span> images
              </div>
              {images.length > 0 && (
                <div className="text-xs text-muted-foreground">
                  Sorted by latest
                </div>
              )}
            </div>
          </div>

          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {displayedImages.map((item, index) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => setSelectedIndex(index)}>
                  <img
                    src={getImageKitUrl(item.url)}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                </div>
              </article>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center pt-8">
              <button
                onClick={loadMore}
                className="group rounded-2xl bg-muted/30 px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-all duration-200 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Load More Projects
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {images.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">No images found</h3>
              </div>
            </div>
          )}
        </div>
      </section>


      <ConsultationSection
        variant="enhanced"
        id="consultation"
        subtitle="Ceritakan kebutuhan ruang Anda, kami siapkan proposal khusus."
        description="Kirimkan brief singkat dan tim kami akan merespon dalam 2×24 jam dengan langkah selanjutnya serta jadwal konsultasi."
        showWhyChooseUs={true}
      />

      {selectedIndex !== null && images[selectedIndex] && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={closeModal}>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white hover:bg-black/70 p-3"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white hover:bg-black/70 p-3"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              onClick={closeModal}
              className="absolute -top-3 -right-3 rounded-full bg-black/70 text-white hover:bg-black/80 p-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img
              src={getImageKitUrl(images[selectedIndex].url)}
              alt={images[selectedIndex].name}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
