export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  imageUrl: string;
  alt: string;
}

export interface ProjectMilestone {
  title: string;
  description: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  location: string;
  sector: string;
  coverImage: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  highlights: ProjectHighlight[];
  gallery: ProjectGalleryItem[];
  milestones: ProjectMilestone[];
  testimonial?: ProjectTestimonial;
  services: string[];
  completion: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "casa-selaras",
    name: "Casa Selaras",
    location: "Bali, Indonesia",
    sector: "Luxury private villa",
    coverImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Indoor-outdoor living concept featuring bespoke teak furniture, handwoven textiles, and a floating media wall framing the jungle canopy.",
    challenge:
      "Menciptakan suasana vila tropis yang tetap terasa intim dan nyaman sepanjang tahun, dengan material yang tahan terhadap kelembapan dan perubahan cuaca.",
    solution:
      "Kami menggabungkan kayu jati solid, batu paras jogja, dan kain linen tahan lembap. Setiap ruang direncanakan agar sirkulasi udara alami maksimal, dilengkapi furnitur built-in yang menyatu dengan struktur bangunan.",
    metrics: [
      { label: "Luas area", value: "640 m²" },
      { label: "Durasi pengerjaan", value: "6 bulan" },
      { label: "Furnitur custom", value: "35 item" },
    ],
    highlights: [
      {
        title: "Living pavilion",
        description:
          "Ruang tamu semi-outdoor dengan sofa modular, coffee table batu, dan sistem panel kayu geser untuk mengontrol cahaya.",
      },
      {
        title: "Master suite",
        description:
          "Dipan custom dengan sandaran rotan, wardrobe walk-in dengan pencahayaan sensor, serta vanity yang terhubung ke taman privat.",
      },
      {
        title: "Entertainment lounge",
        description:
          "Backdrop TV melayang dengan panel akustik, bar counter marmer, dan rak display karya seni lokal.",
      },
    ],
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
        alt: "Living pavilion with custom teak furniture",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        alt: "Master bedroom with custom headboard and lighting",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
        alt: "Entertainment lounge with floating media wall",
      },
    ],
    milestones: [
      {
        title: "Konsep & moodboard",
        description:
          "Fase eksplorasi material dan warna yang memadukan unsur tropis modern dengan sentuhan resort mewah.",
      },
      {
        title: "Detail teknis",
        description:
          "Pembuatan gambar kerja furnitur built-in, koordinasi MEP, serta simulasi pencahayaan untuk memastikan kenyamanan malam hari.",
      },
      {
        title: "Produksi & instalasi",
        description:
          "Perakitan di workshop Bali, finishing manual, dan instalasi onsite dengan pengawasan project manager dedicated.",
      },
    ],
    testimonial: {
      quote:
        "Tim Lumen menghadirkan detail yang melampaui ekspektasi kami. Setiap ruang terasa menyatu dengan alam tanpa mengorbankan kenyamanan modern.",
      author: "Mira Santoso",
      role: "Pemilik Casa Selaras",
    },
    services: [
      "Interior architecture",
      "Custom furniture",
      "Wardrobe & storage",
      "Lighting design",
      "Styling & art curation",
    ],
    completion: "2024",
  },
  {
    slug: "the-conservatory",
    name: "The Conservatory",
    location: "Singapore",
    sector: "Boutique café",
    coverImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Sculptural banquettes, brass shelving, and botanical ceiling installations create a serene hospitality environment.",
    challenge:
      "Mengubah ruko pusat kota menjadi café botanical yang terasa lapang dengan sirkulasi pengunjung optimal.",
    solution:
      "Kami merancang layout berlapis dengan kombinasi seating komunal dan privat, menambahkan kanopi tanaman gantung dan pencahayaan hangat untuk menghadirkan nuansa taman indoor.",
    metrics: [
      { label: "Seats capacity", value: "72" },
      { label: "Timeline", value: "14 minggu" },
      { label: "Material lokal", value: "68%" },
    ],
    highlights: [
      {
        title: "Bar & pastry counter",
        description:
          "Counter terrazzo khusus dengan detail brass serta rak display kaca untuk menonjolkan pastry signature.",
      },
      {
        title: "Banquette sculpture",
        description:
          "Seating custom berbentuk lengkung dengan upholstery anti noda dan pencahayaan indirect.",
      },
      {
        title: "Ceiling garden",
        description:
          "Instalasi tanaman alami dan lampu pendant spesial yang menjaga suasana teduh di seluruh area.",
      },
    ],
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        alt: "Banquette seating inside The Conservatory",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
        alt: "Pastry counter with brass shelving",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        alt: "Ceiling garden with pendant lighting",
      },
    ],
    milestones: [
      {
        title: "Spatial planning",
        description:
          "Analisis arus pengunjung, zoning area self-service dan table service, serta integrasi dapur terbuka.",
      },
      {
        title: "Material mock-up",
        description:
          "Pengujian material tahan lembap, seleksi tanaman indoor, dan percobaan finishing terrazzo custom.",
      },
      {
        title: "Installation & styling",
        description:
          "Instalasi furnitur, sistem pencahayaan, dan styling akhir lengkap dengan arrangement floristry.",
      },
    ],
    testimonial: {
      quote:
        "Atmosfer café kami menjadi pembeda utama. Klien merasa rileks dan betah berlama-lama karena detail interior yang hangat.",
      author: "Nadya Hartono",
      role: "Founder, The Conservatory",
    },
    services: [
      "Interior concept",
      "Custom seating",
      "Bar fabrication",
      "Lighting & planting plan",
      "Operational flow consulting",
    ],
    completion: "2023",
  },
  {
    slug: "harbor-workspace",
    name: "Harbor Workspace",
    location: "Singapore",
    sector: "Workplace consultancy",
    coverImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Hybrid workplace blending collaborative lounges, acoustic meeting pods, and a materials library display wall for client presentations.",
    challenge:
      "Menyatukan kebutuhan tim konsultan dan klien dalam satu ruang, dengan fokus fleksibilitas dan privasi.",
    solution:
      "Kami menata zona fokus, kolaborasi, dan prezentasi secara seimbang. Furnitur modular memungkinkan re-konfigurasi cepat, sementara material library dirancang sebagai elemen branding utama.",
    metrics: [
      { label: "Workstations", value: "48" },
      { label: "Meeting pods", value: "6" },
      { label: "Energy savings", value: "18%" },
    ],
    highlights: [
      {
        title: "Reception & lounge",
        description:
          "Area sambutan dengan meja resepsionis batu onyx backlit dan lounge sofa custom.",
      },
      {
        title: "Materials library",
        description:
          "Rak display modular dengan pencahayaan LED untuk menampilkan sampel material dan maket.",
      },
      {
        title: "Focus pods",
        description:
          "Pod akustik dengan panel serap suara, ventilation system tersendiri, dan furnitur ergonomis.",
      },
    ],
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
        alt: "Reception area with custom stone counter",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        alt: "Collaborative workspace with lounge seating",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        alt: "Focus pod with acoustic treatment",
      },
    ],
    milestones: [
      {
        title: "User journey mapping",
        description:
          "Workshop bersama tim klien untuk memahami aktivitas harian dan kebutuhan teknologi.",
      },
      {
        title: "Prototype & testing",
        description:
          "Pembuatan mock-up workstation dan pod untuk memastikan ergonomi dan akustik optimal.",
      },
      {
        title: "Installation",
        description:
          "Koordinasi multi-vendor untuk instalasi furniture custom, sistem listrik, dan signage brand.",
      },
    ],
    testimonial: {
      quote:
        "Workplace baru kami meningkatkan produktivitas sekaligus memperkuat citra profesional saat menerima klien.",
      author: "Darren Lim",
      role: "CEO, Harbor Workspace",
    },
    services: [
      "Workplace strategy",
      "Custom workstations",
      "Acoustic solutions",
      "Brand integration",
      "Installation management",
    ],
    completion: "2024",
  },
  {
    slug: "aurora-residences",
    name: "Aurora Residences",
    location: "Jakarta, Indonesia",
    sector: "Penthouse residence",
    coverImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Warm minimal penthouse featuring custom cabinetry, art-led styling, and lighting layers for day-to-night transitions.",
    challenge:
      "Menghadirkan suasana hangat dalam unit tinggi dengan pencahayaan alami terbatas, sekaligus menyediakan ruang penyimpanan yang terintegrasi.",
    solution:
      "Kami menggunakan kombinasi veneer walnut, kain bouclé, dan aksen metal champagne. Sistem pencahayaan layered memastikan ambience adaptif, sementara storage disamarkan dalam panel dinding.",
    metrics: [
      { label: "Floor area", value: "280 m²" },
      { label: "Custom joinery", value: "27 elemen" },
      { label: "Lead time", value: "5 bulan" },
    ],
    highlights: [
      {
        title: "Great room",
        description:
          "Area living dan dining menyatu dengan rak display custom, console bar, dan artwork curated.",
      },
      {
        title: "Owner suite",
        description:
          "Headboard panel bertekstur dengan lighting linear, walk-in closet kaca, dan kamar mandi marmer.",
      },
      {
        title: "Home office",
        description:
          "Workspace multifungsi dengan meja custom, rak arsip tersembunyi, dan panel akustik dekoratif.",
      },
    ],
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505691723494-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
        alt: "Great room with custom shelving",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        alt: "Owner suite with illuminated headboard",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        alt: "Home office with custom cabinetry",
      },
    ],
    milestones: [
      {
        title: "Discovery",
        description:
          "Sesi preferensi gaya, inventaris furnitur existing, dan perencanaan ulang layout.",
      },
      {
        title: "Design development",
        description:
          "Pengembangan 3D render, pemilihan material, serta koordinasi dengan kontraktor sipil.",
      },
      {
        title: "Installation & styling",
        description:
          "Pengiriman furnitur custom, instalasi panel, dan styling final termasuk artwork dan aksesori.",
      },
    ],
    testimonial: {
      quote:
        "Setiap sudut terasa personal namun tetap rapi. Penyimpanan tersembunyi menjadi solusi tepat untuk gaya hidup kami.",
      author: "Avery Collins",
      role: "Pemilik Aurora Residences",
    },
    services: [
      "Interior planning",
      "Custom cabinetry",
      "Lighting layers",
      "Furniture procurement",
      "Styling",
    ],
    completion: "2023",
  },
  {
    slug: "wellness-spa-retreat",
    name: "Wellness Spa Retreat",
    location: "Ubud, Bali",
    sector: "Wellness facility",
    coverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Holistic wellness sanctuary featuring treatment rooms, meditation pavilions, and natural stone therapy areas surrounded by tropical gardens.",
    challenge:
      "Menciptakan lingkungan wellness yang menyatu dengan alam tropis Bali, memberikan pengalaman healing yang autentik namun tetap modern.",
    solution:
      "Kami merancang pavilion terbuka dengan material lokal seperti batu paras dan kayu jati, mengintegrasikan elemen air dan tanaman untuk menciptakan atmosfer yang menenangkan.",
    metrics: [
      { label: "Treatment rooms", value: "8" },
      { label: "Meditation pavilions", value: "3" },
      { label: "Natural pool area", value: "200 m²" },
    ],
    highlights: [
      {
        title: "Main spa pavilion",
        description:
          "Pavilion utama dengan kolam refleksi, seating area batu, dan sistem pencahayaan natural yang mengikuti pergerakan matahari.",
      },
      {
        title: "Treatment suites",
        description:
          "Kamar treatment dengan shower outdoor, bathtub batu alam, dan akses langsung ke taman privat untuk privacy maksimal.",
      },
      {
        title: "Meditation garden",
        description:
          "Taman meditasi dengan jalur refleksi, area yoga outdoor, dan soundscape natural dari air terjun kecil.",
      },
    ],
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        alt: "Main spa pavilion with natural stone elements",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        alt: "Treatment room with outdoor shower",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        alt: "Meditation garden with natural soundscape",
      },
    ],
    milestones: [
      {
        title: "Site analysis & concept",
        description:
          "Studi topografi, analisis iklim mikro, dan pengembangan konsep wellness yang mengintegrasikan budaya lokal Bali.",
      },
      {
        title: "Natural material selection",
        description:
          "Seleksi batu paras lokal, kayu jati sustainable, dan tanaman tropis yang mendukung healing environment.",
      },
      {
        title: "Installation & landscaping",
        description:
          "Instalasi sistem air, penanaman taman, dan setup area treatment dengan fokus pada privacy dan comfort.",
      },
    ],
    testimonial: {
      quote:
        "Retreat ini memberikan pengalaman wellness yang benar-benar transformative. Setiap elemen dirancang untuk healing dan renewal.",
      author: "Made Sari",
      role: "Wellness Director, Spa Retreat",
    },
    services: [
      "Wellness space planning",
      "Natural material integration",
      "Healing garden design",
      "Water feature design",
      "Privacy & comfort optimization",
    ],
    completion: "2024",
  },
  {
    slug: "atelier-creative-studio",
    name: "Atelier Creative Studio",
    location: "Bandung, Indonesia",
    sector: "Creative workspace",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Inspiring creative hub featuring flexible studio spaces, material experimentation zones, and collaborative work areas for artists and designers.",
    challenge:
      "Merancang workspace yang mendukung berbagai aktivitas kreatif - dari brainstorming hingga produksi - dengan budget terbatas namun tetap inspiring.",
    solution:
      "Kami menciptakan zona multifungsi dengan furnitur transformable, sistem penyimpanan modular untuk material, dan area showcase untuk karya yang sedang dikerjakan.",
    metrics: [
      { label: "Studio spaces", value: "6" },
      { label: "Collaboration zones", value: "4" },
      { label: "Material storage", value: "200+ items" },
    ],
    highlights: [
      {
        title: "Main studio",
        description:
          "Ruang kerja utama dengan meja besar modular, sistem pencahayaan adjustable, dan dinding pinboard untuk mood boards.",
      },
      {
        title: "Material lab",
        description:
          "Area eksperimen dengan rak display material, workstation untuk prototyping, dan storage terorganisir.",
      },
      {
        title: "Collaboration lounge",
        description:
          "Ruang santai dengan seating casual, whiteboard besar, dan area presentasi untuk sharing ide.",
      },
    ],
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        alt: "Main studio with modular workspace",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        alt: "Material lab with organized storage",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
        alt: "Collaboration lounge with casual seating",
      },
    ],
    milestones: [
      {
        title: "Creative workflow analysis",
        description:
          "Workshop dengan tim kreatif untuk memahami proses kerja dan kebutuhan spesifik setiap disiplin.",
      },
      {
        title: "Flexible design development",
        description:
          "Pengembangan sistem furnitur modular dan layout yang dapat beradaptasi dengan berbagai aktivitas.",
      },
      {
        title: "Installation & setup",
        description:
          "Instalasi furnitur custom, sistem storage, dan setup area showcase untuk karya kreatif.",
      },
    ],
    testimonial: {
      quote:
        "Studio ini menjadi tempat favorit tim untuk brainstorming dan kolaborasi. Setiap sudut menginspirasi kreativitas.",
      author: "Rizki Pratama",
      role: "Creative Director, Atelier Studio",
    },
    services: [
      "Creative workspace design",
      "Modular furniture systems",
      "Material organization",
      "Flexible layout planning",
      "Inspiration zone creation",
    ],
    completion: "2024",
  },
];
