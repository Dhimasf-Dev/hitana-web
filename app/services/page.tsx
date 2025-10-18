import { Button } from "@/components/ui/button";
import { ConsultationSection } from "@/components/sections/ConsultationSection";

const serviceSuites = [
  {
    title: "Furniture Customize",
    summary:
      "Furniture custom yang dirancang khusus sesuai proporsi ruang dan identitas brand Anda.",
    highlights: [
      "Sofa, kursi lounge, dan sistem seating modular",
      "Meja makan dan konferensi dengan manajemen kabel terintegrasi",
      "Kabinet aksen dengan inset kaca, rotan, atau logam",
    ],
  },
  {
    title: "Kitchen Set",
    summary:
      "Kitchen set yang terinspirasi chef dengan ergonomi yang halus dan inovasi penyimpanan.",
    highlights: [
      "Kabinet custom dengan soft-close dan organizer pintar",
      "Panel peralatan terintegrasi dan ventilasi tersembunyi",
      "Worktop batu alam dipadukan dengan permukaan quartz yang tahan lama",
    ],
  },
  {
    title: "Wardrobe",
    summary:
      "Sistem wardrobe bercahaya yang menampilkan koleksi kurasi dengan kecanggihan hotel-suite.",
    highlights: [
      "Display kaca depan dengan pencahayaan LED ambient",
      "Island built-in, laci perhiasan, dan integrasi vanity",
      "Material yang ramah iklim untuk melestarikan pakaian",
    ],
  },
  {
    title: "Backdrop TV",
    summary:
      "Instalasi backdrop TV yang membentuk focal point dengan tekstur berlapis dan routing kabel tersembunyi.",
    highlights: [
      "Rak mengambang dengan panel akustik terintegrasi",
      "Cladding batu atau kayu statement dengan pencahayaan",
      "Penyimpanan konvertibel untuk konsol dan koleksi",
    ],
  },
  {
    title: "Dipan",
    summary:
      "Rangka dipan custom yang dirancang untuk kenyamanan dan estetika kamar tidur modern.",
    highlights: [
      "Headboard custom dengan pencahayaan LED terintegrasi",
      "Penyimpanan bawah tempat tidur yang fungsional",
      "Meja samping terintegrasi dan sistem organisasi",
    ],
  },
  {
    title: "Rak Kabinet",
    summary:
      "Solusi rak kabinet untuk pantry, galeri, dan ruang hibrida yang memadukan utilitas dengan detail pahatan.",
    highlights: [
      "Sistem pull-out tersembunyi dan hardware ergonomis",
      "Finishing lacquer yang cocok warna dan veneer book-matching",
      "Insert modular untuk peralatan, koleksi, dan arsip",
    ],
  },
  {
    title: "Office",
    summary:
      "Lingkungan kantor yang dikurasi untuk pengalaman kerja dan kesejahteraan tim.",
    highlights: [
      "Workstation ergonomis dengan sistem kabel terorganisir",
      "Partisi akustik dan dinding display brand",
      "Meja konferensi dan area kolaborasi yang fleksibel",
    ],
  },
  {
    title: "Resto",
    summary:
      "Lingkungan dining yang dirancang untuk pengalaman tamu yang mendalam dan kenyamanan staf.",
    highlights: [
      "Banquette seating dengan upholstery performa tinggi",
      "Counter bar signature dan meja resepsionis",
      "Sistem pencahayaan mood dan display menu yang menarik",
    ],
  },
  {
    title: "Cafe",
    summary:
      "Konsep kafe modern yang memadukan fungsionalitas dengan estetika untuk menciptakan atmosfer yang hangat.",
    highlights: [
      "Seating yang nyaman dengan variasi layout",
      "Counter service yang efisien dan display pastry",
      "Pencahayaan ambient dan dekorasi yang menciptakan mood",
    ],
  },
];

const processMilestones = [
  {
    step: "01",
    title: "Konsultasi & Briefing",
    description: "Memahami kebutuhan dan visi project Anda",
    details: "Sesi diskusi mendalam tentang gaya hidup, budget, dan timeline project",
    deliverables: "Project brief, mood board, dan estimasi budget awal",
    duration: "1-2 minggu",
  },
  {
    step: "02",
    title: "Desain & Planning",
    description: "Membuat konsep dan rencana detail",
    details: "3D visualization, material selection, dan technical drawings",
    deliverables: "3D render, material samples, dan working drawings",
    duration: "2-3 minggu",
  },
  {
    step: "03",
    title: "Produksi & Manufacturing",
    description: "Fabrikasi furniture di workshop kami",
    details: "Custom manufacturing dengan quality control ketat",
    deliverables: "Progress photos dan quality check reports",
    duration: "4-6 minggu",
  },
  {
    step: "04",
    title: "Instalasi & Handover",
    description: "Pasang dan styling final di lokasi",
    details: "White-glove installation dan final styling",
    deliverables: "Final photos dan maintenance guide",
    duration: "1 minggu",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-16 pt-6 lg:space-y-24 lg:pt-8">
      {/* Hero Section with Modern Gradient Background */}
      <section className="relative mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-[3rem]"></div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20">
                Detail layanan & fabrikasi
              </span>
              <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Mitra terpercaya untuk solusi interior dan furniture custom berkualitas tinggi.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Sejak berdiri, Hitana telah menjadi pilihan utama para pemilik rumah dan bisnis yang menginginkan interior berkualitas premium. Kami mengkhususkan diri dalam desain interior custom, furniture handmade, dan millwork yang menggabungkan keindahan estetika dengan fungsionalitas praktis.
              </p>
            </div>
            
            {/* Enhanced Metrics Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                style={{
                  animationDelay: '0ms',
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-serif text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">8+</p>
                <p className="relative mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  Layanan Custom
                </p>
              </div>
              <div
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                style={{
                  animationDelay: '100ms',
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-serif text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">100+</p>
                <p className="relative mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  Project Selesai
                </p>
              </div>
              <div
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                style={{
                  animationDelay: '200ms',
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-serif text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">5+</p>
                <p className="relative mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  Tahun Pengalaman
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="default" className="group rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href="#consultation">Konsultasi gratis</a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="group rounded-full border-2 border-primary/40 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:studio@hitana.com">Email</a>
              </Button>
            </div>
          </div>
          
          {/* Enhanced Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-card shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1300&q=80"
                alt="Pengrajin membangun kabinet custom di dalam workshop modern"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Services Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Layanan custom
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Solusi lengkap untuk melengkapi rumah, kantor, resto, dan café Anda.
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Setiap layanan kami dirancang khusus untuk memenuhi kebutuhan unik Anda dengan standar kualitas tertinggi
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceSuites.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                        Fitur Unggulan
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <li key={highlight} className="flex gap-3 items-start">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Timeline Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Proses kerja
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Langkah-langkah yang kami lakukan untuk setiap project.
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Dari konsep awal hingga instalasi final, kami memastikan setiap tahap berjalan dengan transparan dan terkoordinasi.
            </p>
          </div>
          
          <div className="mt-12 relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 rounded-full hidden md:block" />
            
            <div className="space-y-8">
              {processMilestones.map((milestone, index) => (
                <div key={milestone.step} className="relative flex items-start gap-8">
                  {/* Enhanced Timeline dot */}
                  <div className="relative z-10 group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/40 bg-gradient-to-br from-card/90 to-card/60 shadow-xl backdrop-blur-sm group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">{milestone.step}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Content card */}
                  <div 
                    className="group flex-1 relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                          <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                          <span className="font-semibold">Step {milestone.step}</span>
                        </div>
                      </div>
                      
                      <p className="text-base font-semibold text-foreground mb-3">
                        {milestone.description}
                      </p>
                      
                      <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                        {milestone.details}
                      </p>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                              Deliverables
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {milestone.deliverables}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                              Durasi
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {milestone.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
