import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Furniture Customize",
    subtitle: "Kerajinan yang disesuaikan",
    description:
      "Setiap potongan furniture adalah karya seni yang dibuat khusus untuk Anda. Menggunakan kayu pilihan terbaik, teknik artisan tradisional, dan finishing premium yang tahan puluhan tahun.",
  },
  {
    title: "Kitchen Set",
    subtitle: "Dapur impian chef",
    description:
      "Dapur yang tidak hanya cantik, tetapi juga super fungsional. Sistem penyimpanan revolusioner, peralatan terintegrasi, dan permukaan yang mudah dirawat untuk pengalaman memasak yang menyenangkan.",
  },
  {
    title: "Wardrobe",
    subtitle: "Elegansi terorganisir",
    description:
      "Wardrobe yang mengubah cara Anda menyimpan pakaian. Sistem modular cerdas dengan pencahayaan LED, display kaca transparan, dan organisasi yang membuat setiap item mudah ditemukan.",
  },
  {
    title: "Backdrop TV",
    subtitle: "Dinding fokus signature",
    description:
      "TV wall yang menjadi pusat perhatian ruang keluarga. Desain yang memukau dengan kabel tersembunyi, kabinet mengambang, dan panel tekstur yang menciptakan atmosfer sinema di rumah.",
  },
  {
    title: "Dipan",
    subtitle: "Surga istirahat",
    description:
      "Tempat tidur yang tidak hanya nyaman, tetapi juga cerdas. Dengan meja samping terintegrasi, penyimpanan rahasia, dan headboard yang bisa disesuaikan untuk menciptakan oasis ketenangan pribadi.",
  },
  {
    title: "Rak Kabinet",
    subtitle: "Organisasi yang halus",
    description:
      "Solusi penyimpanan yang mengubah ruang menjadi lebih teratur dan estetik. Dari pantry dapur hingga galeri koleksi, setiap rak dirancang untuk memaksimalkan ruang dan keindahan.",
  },
  {
    title: "Office",
    subtitle: "Kantor yang menginspirasi",
    description:
      "Ruang kerja yang tidak hanya produktif, tetapi juga menginspirasi kreativitas. Dengan meja ergonomis, sistem akustik cerdas, dan elemen brand yang memperkuat identitas perusahaan.",
  },
  {
    title: "Resto",
    subtitle: "Atmosfer dining yang memukau",
    description:
      "Restoran yang menciptakan pengalaman makan yang tak terlupakan. Setiap elemen dirancang untuk memanjakan indera - dari seating yang nyaman hingga pencahayaan yang menciptakan mood sempurna.",
  },
  {
    title: "Cafe",
    subtitle: "Kafe dengan karakter unik",
    description:
      "Kafe yang menjadi destinasi favorit pelanggan. Desain yang hangat dan mengundang, furniture custom yang nyaman, dan atmosfer yang membuat pelanggan betah berlama-lama.",
  },
];

export const ServicesSection = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="mx-auto max-w-7xl px-6">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
            Layanan custom
          </span>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Solusi furniture custom untuk setiap kebutuhan interior Anda.
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Dari furniture custom hingga kitchen set, kami menghadirkan solusi interior yang disesuaikan dengan gaya hidup dan kebutuhan Anda.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Link key={service.title} href="/services">
              <article 
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                        {service.subtitle}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors duration-300">
                    <span className="text-sm font-semibold">Pelajari lebih lanjut</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-sm font-semibold text-primary transition-all duration-500 hover:from-primary/20 hover:to-primary/10 hover:shadow-lg hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>
            <span className="relative z-10">Lihat layanan</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
