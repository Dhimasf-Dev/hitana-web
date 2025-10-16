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
  return (
    <section id="services" className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Layanan custom
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Karya seni furniture yang mengubah setiap ruang menjadi masterpiece.
          </h2>
          <p className="text-base text-muted-foreground">
            Dari ide kreatif hingga realisasi sempurna, tim ahli kami menciptakan furniture dan elemen arsitektur yang tidak hanya fungsional, tetapi juga menjadi pusat perhatian yang memukau di setiap ruang.
          </p>
        </div>
        <div className="max-w-sm space-y-4 text-sm text-muted-foreground">
          <p>
            Setiap komisi diproduksi oleh jaringan artisan kami di seluruh Jawa dan Bali, memastikan detail yang sempurna, kerajinan lokal, dan pengiriman tepat waktu.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            Lihat layanan detail
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy transition hover:border-primary/40 hover:shadow-aurora"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
                {service.subtitle}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-foreground">
                {service.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
          <Link href="/services">
            Jelajahi Semua Layanan
          </Link>
        </Button>
      </div>
    </section>
  );
};
