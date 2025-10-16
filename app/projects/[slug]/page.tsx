import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

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
    <div className="space-y-24 pb-24 pt-6 lg:space-y-32 lg:pt-10">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              {project.sector}
            </span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {project.name}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/70 bg-card/90 p-5 text-center shadow-canopy"
                >
                  <p className="font-serif text-3xl text-foreground">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
                <a href="#project-consultation">Diskusikan project serupa</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/projects">Kembali ke daftar project</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-border/70 bg-card shadow-aurora">
            <img
              src={project.coverImage}
              alt={`${project.name} hero visual`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Tantangan
              </span>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Strategi & solusi
              </span>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-canopy">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Lokasi & timeline
              </p>
              <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <div>
                  <p className="font-medium text-foreground">Lokasi</p>
                  <p>{project.location}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Selesai</p>
                  <p>{project.completion}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Layanan</p>
                  <p>{project.services[0]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground">Sorotan utama</h2>
            <div className="grid gap-5">
              {project.highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-canopy"
                >
                  <h3 className="font-serif text-xl text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Galeri visual
          </span>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {project.gallery.map((item) => (
              <div
                key={item.imageUrl}
                className="group overflow-hidden rounded-3xl border border-border/70 bg-card shadow-canopy"
              >
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Milestone utama
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Tahapan pelaksanaan project
            </h2>
          </div>
          <div className="grid gap-4">
            {project.milestones.map((milestone) => (
              <article
                key={milestone.title}
                className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-canopy"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.testimonial && (
        <section className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2.5rem] border border-border/70 bg-card/90 p-10 shadow-canopy lg:p-14">
            <figure className="max-w-3xl space-y-5">
              <blockquote className="text-2xl leading-relaxed text-foreground/90 lg:text-[2rem]">
                "{project.testimonial.quote}"
              </blockquote>
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {project.testimonial.author}
                </span>
                {" · "}
                {project.testimonial.role}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.5rem] border border-border/70 bg-card/90 p-8 shadow-canopy lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Layanan terlibat
              </span>
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Layanan yang kami hadirkan untuk project ini
              </h2>
              <p className="text-base text-muted-foreground">
                Setiap layanan dirancang secara khusus untuk mendukung kebutuhan klien dan karakter ruang.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-muted-foreground">
              {project.services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 rounded-full border border-border/70 px-5 py-3"
                >
                  <span aria-hidden className="text-primary">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="project-consultation"
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-primary/30 bg-primary/12 px-6 py-16 shadow-aurora sm:px-10 lg:px-16"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Mulai project Anda
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Ceritakan kebutuhan ruang Anda, kami siapkan proposal khusus.
            </h2>
            <p className="text-base text-muted-foreground">
              Kirimkan brief singkat dan tim kami akan merespon dalam 2×24 jam dengan langkah selanjutnya serta jadwal konsultasi.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  Konsultasi via WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:studio@lumeninteriors.com">Email project brief</a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/25 bg-background/90 p-8 text-sm text-muted-foreground">
            <p className="font-semibold text-primary">Dokumen yang kami butuhkan:</p>
            <ul className="mt-4 space-y-3">
              <li>• Denah serta kondisi eksisting</li>
              <li>• Moodboard atau referensi inspirasi</li>
              <li>• Timeline dan estimasi budget</li>
              <li>• Stakeholder utama dan tujuan ruang</li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/80">
              Kami siap bekerja sama dengan arsitek atau kontraktor pilihan Anda untuk memastikan integrasi desain yang mulus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
