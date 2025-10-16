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
];

export const TestimonialsSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Testimoni
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Kepuasan klien adalah kebanggaan terbesar kami.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Interior kami telah ditampilkan di Architectural Digest, Wallpaper*, dan Luxe Interiors.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy"
          >
            <blockquote className="text-lg leading-relaxed text-foreground/90">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-serif text-xl text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
