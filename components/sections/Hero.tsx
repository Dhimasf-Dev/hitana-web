import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { value: "120+", label: "Ruang yang ditransformasi" },
  { value: "18", label: "Kolaborator boutique" },
  { value: "4.9/5", label: "Kepuasan klien" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-[3rem]"></div>
      
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center lg:pb-20 lg:pt-16">
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20">
              Atelier interior pemenang penghargaan
            </span>
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Transformasi ruang menjadi karya seni yang hidup dan bernyawa.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              Hitana menghadirkan solusi interior premium yang menggabungkan estetika modern dengan sentuhan tradisional Indonesia. Setiap detail dirancang khusus untuk mencerminkan kepribadian dan gaya hidup unik Anda.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="default" className="group rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <a href="#contact">Konsultasi gratis</a>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="group rounded-full border-2 border-primary/40 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/services">Services</Link>
            </Button>
          </div>
          
          {/* Enhanced Stats Cards */}
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.value}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-serif text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.value}</p>
                <p className="relative mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Hero Image Section */}
        <div className="relative z-10 flex-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[3rem] border border-border/50 bg-card shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1100&q=80"
                alt="Ruang keluarga yang diterangi matahari dengan pencahayaan artistik dan furniture custom"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Enhanced Featured Project Card */}
          <div className="absolute -bottom-16 right-0 w-full max-w-[320px] group">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/90 to-card/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Project Unggulan</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  Residence Modern Jakarta
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Millwork kayu jati custom, plester artisan, dan potongan vintage kurasi yang berlapis untuk hunian mewah yang tenang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
