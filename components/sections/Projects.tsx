import Link from "next/link";

import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);
const [primaryProject, secondaryProject, tertiaryProject] = featuredProjects;

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Project unggulan
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Karya masterpiece yang mengubah cara Anda melihat ruang.
          </h2>
          <p className="text-base text-muted-foreground">
            Setiap project adalah cerita unik yang kami wujudkan menjadi kenyataan. Dari hunian mewah hingga ruang komersial, kami menciptakan pengalaman yang tak terlupakan melalui desain yang memukau.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Desain interior full-service · Pengadaan furniture · Styling</p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {primaryProject && (
          <article className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-card shadow-aurora">
            <Link href={`/projects/${primaryProject.slug}`} className="block">
              <img
                src={primaryProject.coverImage}
                alt={primaryProject.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 px-10 pb-10">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {primaryProject.location}
                </span>
                <h3 className="font-serif text-3xl text-foreground">
                  {primaryProject.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {primaryProject.summary}
                </p>
              </div>
            </Link>
          </article>
        )}
        <div className="grid gap-6">
          {secondaryProject && (
            <article className="relative overflow-hidden rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-foreground">
                    {secondaryProject.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary/80">
                    {secondaryProject.sector}
                  </p>
                </div>
                <Link
                  href={`/projects/${secondaryProject.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
                >
                  Detail project
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {secondaryProject.solution}
              </p>
              <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
                {secondaryProject.metrics.slice(0, 3).map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between border-b border-border/60 pb-3 last:border-none last:pb-0"
                  >
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          )}
          {tertiaryProject && (
            <article className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-canopy">
              <Link href={`/projects/${tertiaryProject.slug}`} className="block">
                <img
                  src={tertiaryProject.coverImage}
                  alt={tertiaryProject.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 space-y-2 px-6 pb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {tertiaryProject.location}
                  </span>
                  <p className="font-serif text-xl text-foreground">
                    {tertiaryProject.name}
                  </p>
                </div>
              </Link>
            </article>
          )}
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          Jelajahi portfolio project lengkap
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
};
