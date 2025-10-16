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
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-14 lg:flex-row lg:items-center lg:pb-28 lg:pt-24">
        <div className="relative z-10 max-w-xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Atelier interior pemenang penghargaan
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
            Transformasi ruang menjadi karya seni yang hidup dan bernyawa.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hitana menghadirkan solusi interior premium yang menggabungkan estetika modern dengan sentuhan tradisional Indonesia. Setiap detail dirancang khusus untuk mencerminkan kepribadian dan gaya hidup unik Anda.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
              <a href="#contact">Book a consultation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="/services">Services</Link>
            </Button>
          </div>
          <div className="grid gap-6 pt-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.value} className="rounded-2xl border border-border/70 bg-card-cream p-5 shadow-canopy">
                <p className="font-serif text-3xl font-semibold text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex-1">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] border border-border/80 bg-card shadow-aurora">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1100&q=80"
              alt="Ruang keluarga yang diterangi matahari dengan pencahayaan artistik dan furniture custom"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-12 right-0 w-full max-w-[280px] rounded-3xl border border-border/60 bg-card-cream p-6 shadow-canopy">
            <p className="text-sm font-semibold text-muted-foreground">Project Unggulan</p>
            <p className="mt-2 font-serif text-xl text-foreground">Residence Modern Jakarta</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Millwork kayu jati custom, plester artisan, dan potongan vintage kurasi yang berlapis untuk hunian mewah yang tenang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
