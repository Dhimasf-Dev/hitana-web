"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { useState, useMemo } from "react";
import { Search, Filter, Grid, List } from "lucide-react";

const caseStudyProjects = projects.slice(0, 2);

const categories = Array.from(new Set(projects.map(project => project.sector)));

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.sector === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <div className="space-y-20 pb-16 pt-6 lg:space-y-24 lg:pt-8">
      <section className="relative mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-[3rem]"></div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20">
                Project portfolio
              </span>
              <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Menyusun ruang yang beresonansi dengan brand dan gaya hidup klien kami.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Kami menghadirkan pengalaman interior end-to-end—mulai dari konsep, produksi furnitur, hingga styling akhir. Setiap proyek adalah kolaborasi yang menggabungkan fungsi, estetika, dan cerita unik penghuni.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="default" className="group rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href="https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1" target="_blank" rel="noreferrer">Konsultasi gratis</a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="group rounded-full border-2 border-primary/40 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:info@hitanainterior.com">Email</a>
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-card shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1300&q=80"
                alt="Interior design project showcase dengan furniture custom dan finishing premium"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-portfolio" className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Project portfolio
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Proses menyeluruh yang menghasilkan ruang fungsional sekaligus berkarakter.
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Kami mendokumentasikan setiap milestone mulai dari konsep awal hingga instalasi. Berikut beberapa proyek yang menampilkan kedalaman layanan kami.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border-0 bg-muted/30 px-12 py-4 text-sm placeholder:text-muted-foreground/60 focus:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>

            {/* Filter Row */}
            <div className="flex items-center justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === "All"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 rounded-xl bg-muted/30 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-2 transition-all duration-200 ${
                    viewMode === "grid" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg p-2 transition-all duration-200 ${
                    viewMode === "list" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between text-sm">
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">{displayedProjects.length}</span> of{" "}
                <span className="font-medium text-foreground">{filteredProjects.length}</span> projects
                {searchTerm && (
                  <span className="ml-2 text-primary">
                    • &ldquo;{searchTerm}&rdquo;
                  </span>
                )}
              </div>
              {filteredProjects.length > 0 && (
                <div className="text-xs text-muted-foreground">
                  Sorted by latest
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {displayedProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                      {project.sector}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-4 bg-primary/60 rounded-full"></div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">Key Points</span>
                    </div>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <li key={highlight.title} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/40 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      View Details
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="flex justify-center pt-8">
              <button
                onClick={loadMore}
                className="group rounded-2xl bg-muted/30 px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-all duration-200 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Load More Projects
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-6">
                <Search className="h-16 w-16 mx-auto mb-6 opacity-40" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">No projects found</h3>
                <p className="text-sm">Try adjusting your search terms or category filter</p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="rounded-2xl bg-muted/30 px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>


      <ConsultationSection
        variant="enhanced"
        id="consultation"
        subtitle="Ceritakan kebutuhan ruang Anda, kami siapkan proposal khusus."
        description="Kirimkan brief singkat dan tim kami akan merespon dalam 2×24 jam dengan langkah selanjutnya serta jadwal konsultasi."
        showWhyChooseUs={true}
      />
    </div>
  );
}
