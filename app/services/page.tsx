import { Button } from "@/components/ui/button";
import { ConsultationSection } from "@/components/sections/ConsultationSection";

const serviceSuites = [
  {
    title: "Desain Interior",
    summary:
      "Solusi desain interior komprehensif yang mengubah ruang menjadi tempat yang fungsional dan estetik sesuai gaya hidup Anda.",
    highlights: [
      "Konsultasi desain gratis dengan tim profesional berpengalaman",
      "3D visualization untuk memvisualisasikan konsep desain",
      "Pemilihan warna, material, dan furnitur yang harmonis",
      "Layout planning yang optimal untuk setiap ruang",
    ],
  },
  {
    title: "Custom Furniture",
    summary:
      "Furniture custom yang dirancang khusus sesuai proporsi ruang dan identitas brand Anda dengan kualitas premium.",
    highlights: [
      "Sofa, kursi lounge, dan sistem seating modular",
      "Meja makan dan konferensi dengan manajemen kabel terintegrasi",
      "Kabinet aksen dengan inset kaca, rotan, atau logam",
      "Material kayu pilihan terbaik dengan finishing premium",
    ],
  },
  {
    title: "Kitchen Set",
    summary:
      "Kitchen set yang terinspirasi chef dengan ergonomi yang halus dan inovasi penyimpanan untuk pengalaman memasak terbaik.",
    highlights: [
      "Kabinet custom dengan soft-close dan organizer pintar",
      "Panel peralatan terintegrasi dan ventilasi tersembunyi",
      "Worktop batu alam dipadukan dengan permukaan quartz yang tahan lama",
      "Sistem penyimpanan revolusioner untuk efisiensi maksimal",
    ],
  },
  {
    title: "Interior Apartemen",
    summary:
      "Solusi interior khusus untuk apartemen yang memaksimalkan ruang terbatas dengan desain yang cerdas dan fungsional.",
    highlights: [
      "Space planning yang optimal untuk ruang terbatas",
      "Furniture multifungsi dan penyimpanan vertikal",
      "Pencahayaan strategis untuk menciptakan ilusi ruang lebih luas",
      "Material ringan dan tahan lama untuk hunian vertikal",
    ],
  },
  {
    title: "Interior Rumah",
    summary:
      "Transformasi lengkap interior rumah dengan desain yang mencerminkan kepribadian dan gaya hidup keluarga Anda.",
    highlights: [
      "Desain holistik untuk seluruh rumah dengan tema yang konsisten",
      "Zoning ruang yang fungsional untuk setiap aktivitas keluarga",
      "Integrasi teknologi smart home dan sistem pencahayaan",
      "Material berkualitas tinggi yang tahan lama dan mudah perawatan",
    ],
  },
];

const processSteps = [
  {
    title: "Konsultasi Gratis",
    subtitle: "Diskusi mendalam tanpa biaya",
    description: "Nikmati konsultasi dan diskusi mendalam secara online maupun offline dengan tim profesional kami. Kami akan memahami gaya hidup, preferensi, dan visi Anda untuk menciptakan solusi yang tepat."
  },
  {
    title: "Estimasi Harga",
    subtitle: "Perkiraan budget transparan",
    description: "Dapatkan perkiraan harga secara gratis untuk membantu Anda merencanakan anggaran dengan lebih baik. Kami memberikan breakdown detail tanpa hidden cost."
  },
  {
    title: "Rekomendasi Desain",
    subtitle: "Konsep yang sesuai kebutuhan",
    description: "Kami memberikan referensi gaya, layout, dan material yang sesuai dengan kebutuhan dan preferensi hunian Anda. Dilengkapi dengan mood board dan 3D visualization."
  },
  {
    title: "Survey Lapangan",
    subtitle: "Pengukuran presisi tinggi",
    description: "Tim kami melakukan survey untuk menyesuaikan ukuran dan memberikan gambaran lengkap tata letak furnitur melalui gambar 2D dan 3D yang akurat."
  },
  {
    title: "Produksi Custom",
    subtitle: "Kerajinan tangan terbaik",
    description: "Furniture dan elemen interior dibuat khusus di workshop kami menggunakan material premium dan teknik artisan tradisional dengan standar kualitas tertinggi."
  },
  {
    title: "After Sales",
    subtitle: "Dukungan berkelanjutan",
    description: "Kami memberikan layanan terbaik dengan garansi hingga 6 bulan. Pesanan berikutnya bebas minimal order, lebih fleksibel untuk kebutuhan interior Anda."
  }
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
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                      <span className="text-sm font-semibold text-primary">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
