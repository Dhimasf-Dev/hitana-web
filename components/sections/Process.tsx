import { Lightbulb, PenTool, Ruler, Sofa } from "lucide-react";

const steps = [
  {
    title: "Penemuan & moodboarding",
    description:
      "Kami mempelajari cara hidup Anda dan menyusun palet atmosfer, material, dan inspirasi yang unik untuk project Anda.",
    icon: Lightbulb,
  },
  {
    title: "Perencanaan spasial",
    description:
      "Studi layout yang presisi memastikan setiap ruangan mengalir dengan lancar, didukung oleh perencanaan pencahayaan dan akustik.",
    icon: Ruler,
  },
  {
    title: "Detail & sourcing",
    description:
      "Dari millwork custom hingga tekstil artisan, kami mengkurasi setiap finishing dan furnishing dengan perhatian yang teliti.",
    icon: PenTool,
  },
  {
    title: "Instalasi & styling",
    description:
      "Tim kami mengorchestrasi pengiriman, instalasi, dan styling akhir untuk mengungkap interior signature Hitana.",
    icon: Sofa,
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6">
      <div className="max-w-2xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Proses kami
        </span>
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Perjalanan magis mengubah impian menjadi kenyataan yang memukau.
        </h2>
        <p className="text-base text-muted-foreground">
          Setiap project adalah petualangan kreatif yang dimulai dengan memahami impian Anda dan berakhir dengan ruang yang tidak hanya indah, tetapi juga mencerminkan jiwa dan kepribadian unik Anda.
        </p>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <article
            key={title}
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card-cream p-5 shadow-canopy"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  Langkah {index + 1}
                </span>
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
