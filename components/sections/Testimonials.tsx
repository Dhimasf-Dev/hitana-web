"use client";

import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Hitana tidak hanya membuat rumah kami cantik, tetapi juga menciptakan ruang yang benar-benar mencerminkan kepribadian keluarga kami. Setiap sudut memiliki cerita dan makna yang dalam.",
    name: "Ahmad Rahman",
    role: "Hunian pribadi, Jakarta",
  },
  {
    quote:
      "Kerja sama dengan Hitana adalah pengalaman yang luar biasa. Mereka memahami visi kami dan mewujudkannya dengan detail yang sempurna. Hasilnya melebihi ekspektasi!",
    name: "Sari Dewi",
    role: "Hotelier boutique, Bali",
  },
  {
    quote:
      "Desain interior yang dibuat Hitana sangat memukau. Mereka berhasil mengubah ruang kosong menjadi tempat yang hangat dan nyaman untuk keluarga kami.",
    name: "Budi Santoso",
    role: "Residential, Surabaya",
  },
  {
    quote:
      "Tim Hitana sangat profesional dan detail-oriented. Mereka mendengarkan kebutuhan kami dan memberikan solusi yang tepat sesuai budget.",
    name: "Lisa Wijaya",
    role: "Office space, Bandung",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [lastWheelTime, setLastWheelTime] = useState(0);
  const [wheelAccumulator, setWheelAccumulator] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const getItemsPerView = () => {
    if (windowWidth < 768) return 1;
    return 2;
  };
  
  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    const timeDiff = now - lastWheelTime;
    
    if (timeDiff < 100) return;
    
    setLastWheelTime(now);
    
    const deltaX = Math.abs(e.deltaX);
    const deltaY = Math.abs(e.deltaY);
    
    if (deltaX > deltaY && deltaX > 2) {
      setWheelAccumulator(prev => prev + e.deltaX);
    } else if (deltaY > deltaX && deltaY > 2) {
      setWheelAccumulator(prev => prev + e.deltaY);
    }
    
    const threshold = 50;
    if (Math.abs(wheelAccumulator) >= threshold) {
      if (wheelAccumulator > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setWheelAccumulator(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const resetAccumulator = () => {
      setWheelAccumulator(0);
    };

    const interval = setInterval(resetAccumulator, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex, maxIndex]);
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Testimoni
        </span>
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Kepuasan klien adalah kebanggaan terbesar kami.
        </h2>
      </div>
      <div className="mt-8 relative">
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div 
          ref={sliderRef}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl cursor-grab active:cursor-grabbing select-none bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/20 shadow-2xl"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none z-10"></div>
          
          <div 
            className="flex transition-transform ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transitionDuration: isDragging ? '0ms' : '300ms'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className={`flex-shrink-0 px-2 py-3 md:px-3 md:py-4 ${
                itemsPerView === 1 ? 'w-full' : 'w-1/2'
              }`}>
                <figure className="flex h-full flex-col justify-between p-4 md:p-5">
                  <blockquote className="text-sm md:text-base leading-relaxed text-foreground/90">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-3">
                    <p className="font-serif text-base md:text-lg text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 md:mt-6 flex items-center justify-center gap-3 md:gap-4">
          <button
            onClick={prevSlide}
            className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-border/70 bg-card-cream shadow-canopy transition hover:border-primary/40 hover:shadow-aurora"
            aria-label="Previous testimonials"
          >
            <svg className="h-4 w-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-border/50 hover:bg-border/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-border/70 bg-card-cream shadow-canopy transition hover:border-primary/40 hover:shadow-aurora"
            aria-label="Next testimonials"
          >
            <svg className="h-4 w-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
