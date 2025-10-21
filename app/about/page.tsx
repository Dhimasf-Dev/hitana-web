import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConsultationSection } from "@/components/sections/ConsultationSection";

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

const values = [
  {
    title: "Craftsmanship",
    subtitle: "Kerajinan tangan terbaik",
    description: "Setiap detail dikerjakan dengan presisi tinggi menggunakan teknik tradisional yang telah teruji selama puluhan tahun."
  },
  {
    title: "Innovation",
    subtitle: "Inovasi berkelanjutan",
    description: "Kami selalu mencari cara baru untuk meningkatkan kualitas dan efisiensi tanpa mengorbankan estetika dan fungsionalitas."
  },
  {
    title: "Sustainability",
    subtitle: "Berkelanjutan & ramah lingkungan",
    description: "Menggunakan material yang ramah lingkungan dan proses produksi yang bertanggung jawab terhadap masa depan planet."
  },
  {
    title: "Client-Centric",
    subtitle: "Fokus pada kepuasan klien",
    description: "Setiap keputusan desain dibuat dengan mempertimbangkan kebutuhan, gaya hidup, dan visi unik setiap klien."
  }
];

const achievements = [
  { value: "120+", label: "Proyek selesai" },
  { value: "2+", label: "Tahun pengalaman" },
  { value: "98%", label: "Tingkat kepuasan klien" },
  { value: "25+", label: "Klien puas" }
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16 lg:space-y-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-[3rem]"></div>
        
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center lg:pb-20 lg:pt-16">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20">
                Tentang Hitana
              </span>
              <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Menciptakan ruang yang mencerminkan kepribadian dan gaya hidup Anda.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                Sejak 2022, Hitana telah menjadi pionir dalam industri interior design Indonesia. Kami percaya bahwa setiap ruang memiliki cerita unik yang menunggu untuk diceritakan melalui desain yang penuh makna.
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
                <Link href="/projects">Lihat proyek kami</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative z-10 flex-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[3rem] border border-border/50 bg-gradient-to-br from-card/90 to-card/60 shadow-2xl transition-all duration-500 group-hover:shadow-3xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
                <div className="relative h-full w-full flex items-center justify-center p-12">
                  <img
                    src="/hitana-logo.png"
                    alt="Hitana Logo"
                    className="h-full w-full object-contain object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border border-primary/20">
                    <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                      Since 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Cerita kami
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Dari mimpi kecil menjadi workshop interior terdepan
            </h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hitana dimulai dari sebuah workshop kecil di Jakarta pada tahun 2022. Didirikan oleh Sarah Wijaya, seorang desainer interior yang memiliki passion mendalam terhadap kerajinan tangan tradisional Indonesia.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Visi kami sederhana: menciptakan furniture dan interior yang tidak hanya indah dipandang, tetapi juga memiliki nilai fungsional yang tinggi. Setiap proyek yang kami kerjakan adalah perpaduan antara estetika modern dan kearifan lokal.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hari ini, dengan tim yang terdiri dari 25+ profesional berpengalaman, kami telah menyelesaikan lebih dari 120 proyek interior untuk klien dari berbagai kalangan - mulai dari rumah pribadi hingga kantor korporat dan restoran ternama.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2rem]"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-lg backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                  alt="Workshop Hitana dengan furniture custom sedang dikerjakan"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Workshop & Showroom
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Workshop kami seluas 2,000m² dilengkapi dengan fasilitas modern dan showroom yang memamerkan koleksi furniture custom terbaik kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Nilai-nilai kami
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Prinsip yang memandu setiap karya kami
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {value.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                        {value.subtitle}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Proses kerja kami
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Langkah-langkah menuju ruang impian Anda
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Dari konsultasi awal hingga instalasi final, setiap tahap dalam proses kami dirancang untuk memastikan hasil yang sempurna sesuai dengan visi Anda.
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

      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Pencapaian kami
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Angka-angka yang membanggakan
            </h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.value}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-serif text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{achievement.value}</p>
                <p className="relative mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationSection
        variant="enhanced"
        id="consultation"
        title="Mulai Project Anda"
        subtitle="Siap mewujudkan ruang impian Anda?"
        description="Mari diskusikan visi Anda dengan tim kami. Kami siap membantu mewujudkan ruang yang mencerminkan kepribadian dan gaya hidup unik Anda."
        primaryButtonText="Konsultasi Gratis"
        primaryButtonHref="https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1"
        secondaryButtonText="Lihat Portfolio"
        secondaryButtonHref="/projects"
        secondaryButtonType="link"
        showWhyChooseUs={true}
      />
    </div>
  );
}
