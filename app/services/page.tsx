import { Button } from "@/components/ui/button";

const craftsmanshipPillars = [
  {
    title: "Penguasaan material",
    description:
      "Kayu keras premium, panel rekayasa, dan batu alam yang dipilih dari mitra terpercaya di seluruh Indonesia dan Eropa.",
  },
  {
    title: "Rekayasa presisi",
    description:
      "Detail yang digerakkan CAD, joinery mortise-and-tenon, dan hardware Eropa memastikan keawetan dengan fungsionalitas yang mulus.",
  },
  {
    title: "Finishing artisan",
    description:
      "Stain yang dioles tangan, palet lacquer custom, dan tekstur khusus yang meningkatkan setiap komisi custom.",
  },
];

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

const projectShowcases = [
  {
    name: "Residence Modern Jakarta",
    location: "Jakarta, Indonesia",
    scope: "Arsitektur interior full-service & furniture",
    narrative:
      "Hunian yang diterangi matahari dengan millwork kayu jati custom, dinding media dengan finishing plester, dan seating custom yang disesuaikan untuk pertemuan keluarga.",
  },
  {
    name: "Atelier Hitana",
    location: "Jakarta, Indonesia",
    scope: "Konsep hospitality & fabrikasi millwork",
    narrative:
      "Kafe boutique dengan seating banquette artistik, counter service dengan detail kuningan, dan rak yang dipimpin seni yang menampilkan pembuat lokal.",
  },
  {
    name: "Harbor Workspace",
    location: "Jakarta, Indonesia",
    scope: "Strategi tempat kerja, workstation modular & penyimpanan custom",
    narrative:
      "Kantor hibrida yang memadukan lounge kolaboratif, pod meeting akustik, dan dinding display perpustakaan material untuk presentasi klien.",
  },
];

const processMilestones = [
  {
    stage: "01. Imersi",
    detail:
      "Kami memetakan rutinitas, nilai brand, dan tujuan spasial, menangkap palet material dan pertimbangan ergonomis dari awal.",
  },
  {
    stage: "02. Desain Teknis",
    detail:
      "Elevasi CAD yang detail, visualisasi 3D, dan gambar mekanis mengkoordinasikan finishing, pencahayaan, dan titik integrasi.",
  },
  {
    stage: "03. Fabrikasi",
    detail:
      "Tim workshop kami menjalankan joinery presisi, finishing, dan kontrol kualitas, berbagi update kemajuan sepanjang produksi.",
  },
  {
    stage: "04. Instalasi & Styling",
    detail:
      "Instalasi white-glove disinkronkan dengan pencahayaan, aksesori, dan penempatan seni untuk menghadirkan lingkungan siap huni.",
  },
];

const resourceAssurances = [
  "Project manager khusus dan koordinasi site",
  "Garansi komprehensif pada hardware dan finishing",
  "Sourcing berkelanjutan dengan opsi kayu bersertifikat FSC",
  "Kolaborasi dengan arsitek, developer, dan tim brand",
];

export default function ServicesPage() {
  return (
    <div className="space-y-24 pb-24 pt-6 lg:space-y-32 lg:pt-10">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Detail layanan & fabrikasi
            </span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Mitra terpercaya untuk solusi interior dan furniture custom berkualitas tinggi.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sejak berdiri, Hitana telah menjadi pilihan utama para pemilik rumah dan bisnis yang menginginkan interior berkualitas premium. Kami mengkhususkan diri dalam desain interior custom, furniture handmade, dan millwork yang menggabungkan keindahan estetika dengan fungsionalitas praktis.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
                <a href="#consultation">Jadwalkan konsultasi</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:studio@hitana.com">Kirim brief project</a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-card shadow-aurora">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1300&q=80"
              alt="Pengrajin membangun kabinet custom di dalam workshop modern"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Pilar kerajinan
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Fondasi kualitas yang memastikan setiap detail terasa premium.
            </h2>
            <p className="text-base text-muted-foreground">
              Tim produksi kami memadukan teknologi modern dengan sentuhan tangan artisan. Hasilnya adalah produk yang presisi, tahan lama, dan memiliki karakter unik.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {craftsmanshipPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy"
              >
                <h3 className="font-serif text-2xl text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Suite layanan
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Solusi lengkap untuk melengkapi rumah, kantor, resto, dan café Anda.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceSuites.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-5 rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy transition hover:border-primary/40 hover:shadow-aurora"
            >
              <div>
                <h3 className="font-serif text-2xl text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden className="mt-1 text-primary">
                      ·
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Pameran project
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Contoh project yang menampilkan kolaborasi desain dan produksi kami.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projectShowcases.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card-cream p-8 shadow-canopy"
            >
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  {project.location}
                </span>
                <h3 className="font-serif text-2xl text-foreground">{project.name}</h3>
                <p className="text-sm text-primary/80">{project.scope}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.narrative}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Timeline proses
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Struktur kerja yang transparan dari briefing hingga instalasi.
            </h2>
            <p className="text-base text-muted-foreground">
              Project manager kami akan menjadi kontak utama yang mengkoordinasikan tim desain, produksi, dan instalasi sehingga setiap milestone berjalan mulus.
            </p>
          </div>
          <div className="grid gap-4">
            {processMilestones.map((milestone) => (
              <article
                key={milestone.stage}
                className="rounded-3xl border border-border/70 bg-card-cream p-6 shadow-canopy"
              >
                <h3 className="font-serif text-xl text-foreground">{milestone.stage}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {milestone.detail}
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
                Kolaborasi & dukungan
              </span>
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Dukungan menyeluruh untuk developer, arsitek, dan brand manager.
              </h2>
              <p className="text-base text-muted-foreground">
                Kami memfasilitasi kolaborasi lintas disiplin dengan memberikan dokumentasi teknis lengkap, mock-up material, dan koordinasi onsite untuk memastikan hasil akhir sesuai visi Anda.
              </p>
            </div>
            <ul className="space-y-4 rounded-3xl border border-border/70 bg-card-cream p-6">
              {resourceAssurances.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="mt-1 text-primary">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="consultation"
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
              Bagikan layout, moodboard, atau referensi inspirasional. Tim kami akan merespon dalam 2×24 jam dengan langkah selanjutnya dan jadwal konsultasi.
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
                <a href="mailto:studio@hitana.com">Email project brief</a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/25 bg-card-cream p-8 text-sm text-muted-foreground">
            <p className="font-semibold text-primary">Dokumen yang membantu proses:</p>
            <ul className="mt-4 space-y-3">
              <li>• Denah ruang atau ukuran dasar</li>
              <li>• Foto kondisi eksisting atau render referensi</li>
              <li>• Budget kisaran dan timeline target</li>
              <li>• Preferensi material, warna, dan gaya interior</li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/80">
              Semua informasi dijaga kerahasiaannya. Kami senang berkolaborasi dengan arsitek, kontraktor, dan vendor pilihan Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
