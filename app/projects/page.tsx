import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Link from "next/link";

const residenceCount = projects.filter((project) =>
  /residence|villa|penthouse/i.test(project.sector),
).length;
const hospitalityCount = projects.filter((project) =>
  /hospitality|café|restaurant|cafe/i.test(project.sector),
).length;
const workplaceCount = projects.filter((project) =>
  /workplace|office|consultancy/i.test(project.sector),
).length;

const heroHighlights = [
  { label: "Residences", value: residenceCount.toString().padStart(2, "0") },
  {
    label: "Hospitality concepts",
    value: hospitalityCount.toString().padStart(2, "0"),
  },
  {
    label: "Workplace suites",
    value: workplaceCount.toString().padStart(2, "0"),
  },
];

const featuredProjects = projects.slice(0, 3);
const caseStudyProjects = projects.slice(0, 2);
const testimonialProjects = projects.filter((project) => project.testimonial);

export default function ProjectsPage() {
  return (
    <div className="space-y-24 pb-24 pt-6 lg:space-y-32 lg:pt-10">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Project portfolio
            </span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Menyusun ruang yang beresonansi dengan brand dan gaya hidup klien kami.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Kami menghadirkan pengalaman interior end-to-end—mulai dari konsep, produksi furnitur, hingga styling akhir. Setiap proyek adalah kolaborasi yang menggabungkan fungsi, estetika, dan cerita unik penghuni.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-card-cream p-5 text-center shadow-canopy"
                >
                  <p className="font-serif text-3xl text-foreground">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
                <a href="#case-studies">Lihat case study</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:studio@lumeninteriors.com">Diskusikan proyek</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-aurora"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 space-y-1 px-6 pb-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {project.location}
                      </span>
                      <h3 className="font-serif text-2xl text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-sm text-primary/80">{project.sector}</p>
                    </div>
                  </div>
                </Link>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-6xl px-6">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Case studies
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Proses menyeluruh yang menghasilkan ruang fungsional sekaligus berkarakter.
          </h2>
          <p className="text-base text-muted-foreground">
            Kami mendokumentasikan setiap milestone mulai dari konsep awal hingga instalasi. Berikut beberapa proyek yang menampilkan kedalaman layanan kami.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudyProjects.map((project) => (
            <article
              key={project.slug}
              className="flex h-full flex-col gap-5 rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-sm text-primary/80">{project.sector}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
                  >
                    Detail project
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Highlights
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight.title} className="flex gap-2">
                        <span aria-hidden className="mt-1 text-primary">
                          ·
                        </span>
                        <span>{highlight.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Impact
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {project.metrics.map((metric) => (
                      <li key={metric.label}>
                        {metric.label}: {metric.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Collaboration timeline
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Tahapan kerja transparan untuk project skala kecil hingga besar.
            </h2>
            <p className="text-base text-muted-foreground">
              Kami menyediakan project manager dedicated, jadwal mingguan, dan koordinasi onsite agar seluruh proses berjalan tepat waktu.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                phase: "01. Vision & Strategy",
                description:
                  "Kami menerjemahkan brief menjadi mood narrative, adjacency diagram, dan user journey yang menjadi kompas desain.",
              },
              {
                phase: "02. Technical Integration",
                description:
                  "Koordinasi gambar kerja dengan tim MEP, lighting, dan AV untuk memastikan instalasi berjalan tanpa revisi besar.",
              },
              {
                phase: "03. Fabrication & Fit-out",
                description:
                  "Produksi furnitur custom di workshop kami berjalan bersamaan dengan persiapan lokasi proyek.",
              },
              {
                phase: "04. Styling & Handover",
                description:
                  "Final styling, kurasi seni, dan penyusunan manual maintenance sebelum serah terima kunci.",
              },
            ].map((phase) => (
              <article
                key={phase.phase}
                className="rounded-3xl border border-border/70 bg-card-cream p-6 shadow-canopy"
              >
                <h3 className="font-serif text-xl text-foreground">{phase.phase}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.5rem] border border-border/70 bg-card-cream p-8 shadow-canopy lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Client reflections
              </span>
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Testimoni yang menunjukkan nilai kolaborasi jangka panjang.
              </h2>
            </div>
            <div className="grid gap-6">
              {testimonialProjects.map((project) => (
                <figure
                  key={project.slug}
                  className="rounded-3xl border border-border/70 bg-card-cream p-6"
                >
                  <blockquote className="text-base leading-relaxed text-foreground/90">
                    &ldquo;{project.testimonial?.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {project.testimonial?.author}
                    </span>{" "}
                    · {project.testimonial?.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects-consultation"
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-primary/30 bg-primary/12 px-6 py-16 shadow-aurora sm:px-10 lg:px-16"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Konsultasi project berikutnya
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Siapkan pertemuan untuk membahas konsep dan kebutuhan Anda.
            </h2>
            <p className="text-base text-muted-foreground">
              Kami siap berkolaborasi dengan arsitek, developer, maupun pemilik langsung. Kirimkan gambaran project dan tim kami akan menghubungi dalam 24 jam kerja.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
                <a href="https://cal.com" target="_blank" rel="noreferrer">
                  Jadwalkan meeting virtual
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/services">Lihat layanan produksi</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/25 bg-card-cream p-8 text-sm text-muted-foreground">
            <p className="font-semibold text-primary">Dokumen ideal:</p>
            <ul className="mt-4 space-y-3">
              <li>• Brief konsep atau moodboard</li>
              <li>• Denah/layout dan dimensi ruang</li>
              <li>• Target budget dan timeline</li>
              <li>• Stakeholder dan kebutuhan fungsi utama</li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/80">
              Kami dapat menyediakan estimasi awal sebelum pertemuan onsite serta sampel material untuk evaluasi tim Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
