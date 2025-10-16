import { Button } from "@/components/ui/button";

export const ConsultationSection = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border/70 bg-primary/12 px-6 py-16 shadow-aurora sm:px-10 lg:px-16"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            Mulai project Anda
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Mari wujudkan impian interior Anda menjadi kenyataan yang memukau.
          </h2>
          <p className="text-base text-muted-foreground">
            Setiap ruang memiliki cerita unik. Bagikan visi dan impian Anda, dan biarkan kami menciptakan solusi interior yang tidak hanya indah, tetapi juga mencerminkan kepribadian dan gaya hidup Anda.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 shadow-aurora">
              Book a consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:studio@hitana.com">Email</a>
            </Button>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-primary/30 bg-card-cream p-8">
          <h3 className="font-serif text-2xl text-foreground">Konsultasi mencakup</h3>
          <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li>· Sesi penemuan awal (virtual atau di studio)</li>
            <li>· Mood board yang disesuaikan dan arah material</li>
            <li>· Timeline project dan outline investasi</li>
            <li>· Preview sourcing khusus project</li>
          </ul>
          <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5 text-sm text-primary">
            Booking saat ini tersedia untuk project Juni–September 2025.
          </div>
        </div>
      </div>
    </section>
  );
};
