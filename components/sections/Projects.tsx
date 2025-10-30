"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type ImageItem = {
  id: string;
  name: string;
  url: string;
};

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [lastWheelTime, setLastWheelTime] = useState(0);
  const [wheelAccumulator, setWheelAccumulator] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [images, setImages] = useState<ImageItem[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const getItemsPerView = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  
  const itemsPerView = getItemsPerView();
  const featuredImages = images.slice(0, 6);
  const maxIndex = Math.max(0, featuredImages.length - itemsPerView);

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
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(`/api/images?folder=Foto`);
        const data = await res.json();
        if (mounted) setImages((data.items || []).map((i: any) => ({ id: i.id, name: i.name, url: i.url })));
      } catch {}
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex, maxIndex]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
            Project unggulan
          </span>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Karya masterpiece yang mengubah cara Anda melihat ruang.
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Setiap project adalah cerita unik yang kami wujudkan menjadi kenyataan. Dari hunian mewah hingga ruang komersial, kami menciptakan pengalaman yang tak terlupakan melalui desain yang memukau.
          </p>
        </div>

      <div className="mt-12 relative">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div 
          ref={sliderRef}
          className="group relative overflow-hidden rounded-2xl md:rounded-[3rem] cursor-grab active:cursor-grabbing select-none transition-all duration-500"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
          
          <div 
            className="flex transition-transform ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transitionDuration: isDragging ? '0ms' : '300ms'
            }}
          >
            {featuredImages.map((item, index) => (
              <div key={item.id} className={`flex-shrink-0 px-2 py-4 md:px-4 md:py-6 ${
                itemsPerView === 1 ? 'w-full' : 
                itemsPerView === 2 ? 'w-1/2' : 
                'w-1/3'
              }`}>
                <Link href={`/projects`}>
                  <article 
                    className="group relative overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="mt-8 md:mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <button
                onClick={prevSlide}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:scale-110 hover:-translate-x-1"
                aria-label="Previous projects"
              >
                <svg className="h-5 w-5 text-foreground transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-bold text-primary">
                  {currentIndex + 1} / {maxIndex + 1}
                </span>
              </div>
              
              <button
                onClick={nextSlide}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:scale-110 hover:translate-x-1"
                aria-label="Next projects"
              >
                <svg className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center md:justify-end">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-sm font-semibold text-primary transition-all duration-500 hover:from-primary/20 hover:to-primary/10 hover:shadow-lg hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>
                <span className="relative z-10">Lihat portfolio</span>
                <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/30 shadow-lg">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-3 w-3 md:h-4 md:w-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-xl scale-125' 
                      : 'bg-border/50 hover:bg-border/70 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
