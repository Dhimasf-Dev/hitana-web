"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Berapa lama waktu pengerjaan proyek interior design?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk renovasi kamar tidur atau ruang tamu biasanya memakan waktu 2-4 minggu, sedangkan untuk renovasi rumah lengkap bisa memakan waktu 6-12 minggu. Tim kami akan memberikan estimasi waktu yang akurat setelah konsultasi awal."
  },
  {
    question: "Apakah Hitana menyediakan layanan konsultasi gratis?",
    answer: "Ya, kami menyediakan konsultasi gratis untuk membantu Anda memahami kebutuhan desain interior. Konsultasi ini mencakup analisis ruang, diskusi konsep, dan rekomendasi awal. Konsultasi dapat dilakukan secara online atau onsite tergantung kebutuhan."
  },
  {
    question: "Bagaimana proses kerja Hitana dari awal hingga selesai?",
    answer: "Proses kerja kami meliputi: 1) Konsultasi awal dan analisis kebutuhan, 2) Survei lokasi dan pengukuran, 3) Presentasi konsep dan mood board, 4) Revisi dan finalisasi desain, 5) Persiapan dokumen teknis, 6) Koordinasi dengan kontraktor, 7) Supervisi pengerjaan, 8) Quality control dan finishing."
  },
  {
    question: "Apakah Hitana menyediakan layanan pembelian furniture dan dekorasi?",
    answer: "Ya, kami menyediakan layanan procurement lengkap termasuk furniture, lighting, dekorasi, dan aksesoris. Kami memiliki jaringan supplier terpercaya dan dapat membantu Anda mendapatkan produk berkualitas dengan harga terbaik. Kami juga menyediakan layanan custom furniture sesuai kebutuhan."
  },
  {
    question: "Berapa biaya jasa interior design Hitana?",
    answer: "Biaya jasa kami bervariasi tergantung luas area, kompleksitas desain, dan jenis layanan yang dipilih. Kami menggunakan sistem harga yang transparan dengan breakdown yang jelas. Untuk informasi detail, silakan hubungi tim kami untuk konsultasi dan penawaran yang disesuaikan dengan budget Anda."
  },
  {
    question: "Apakah Hitana melayani proyek di luar kota?",
    answer: "Ya, kami melayani proyek di berbagai kota di Indonesia. Untuk proyek di luar kota, kami akan melakukan koordinasi intensif melalui video call dan mengirim tim untuk survei dan supervisi sesuai kebutuhan. Biaya transportasi dan akomodasi akan diinformasikan terlebih dahulu."
  },
  {
    question: "Bagaimana jika saya tidak puas dengan hasil desain?",
    answer: "Kepuasan klien adalah prioritas utama kami. Jika ada ketidakpuasan, kami akan melakukan revisi sesuai feedback Anda tanpa biaya tambahan hingga maksimal 3 kali revisi. Kami berkomitmen untuk memberikan hasil yang sesuai dengan ekspektasi dan kebutuhan Anda."
  },
  {
    question: "Apakah Hitana menyediakan garansi untuk hasil kerja?",
    answer: "Ya, kami memberikan garansi untuk hasil kerja kami. Garansi mencakup kualitas material yang direkomendasikan dan ketahanan desain selama 1 tahun. Jika ada masalah yang disebabkan oleh kesalahan desain atau rekomendasi material, kami akan bertanggung jawab untuk memperbaikinya."
  },
  {
    question: "Bagaimana cara memulai proyek dengan Hitana?",
    answer: "Untuk memulai proyek, Anda dapat menghubungi kami melalui website, WhatsApp, atau email. Kami akan menjadwalkan konsultasi gratis untuk memahami kebutuhan Anda. Setelah konsultasi, kami akan memberikan proposal lengkap termasuk timeline, budget, dan konsep desain yang sesuai dengan visi Anda."
  },
  {
    question: "Apakah Hitana memiliki portfolio yang bisa dilihat?",
    answer: "Tentu saja! Anda dapat melihat portfolio lengkap kami di halaman Projects di website ini. Portfolio mencakup berbagai jenis proyek mulai dari residential, commercial, hingga hospitality. Setiap proyek dilengkapi dengan foto before-after dan testimoni klien untuk memberikan gambaran kualitas kerja kami."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-20 pb-16 lg:space-y-24">

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Pertanyaan umum
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Jawaban untuk pertanyaan yang sering diajukan
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Berikut adalah jawaban untuk pertanyaan yang paling sering ditanyakan oleh klien kami tentang layanan interior design Hitana.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <button
                    onClick={() => toggleItem(index)}
                    className="relative w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors duration-200"
                  >
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 flex-1">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-8 pb-6">
                      <div className="pt-2 border-t border-border/30">
                        <p className="text-muted-foreground leading-relaxed mt-4">
                          {item.answer}
                        </p>
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
        title="Siap Memulai Proyek Anda?"
        subtitle="Mari diskusikan visi interior design Anda dengan tim profesional kami."
        description="Konsultasi gratis untuk memahami kebutuhan dan memberikan solusi terbaik sesuai dengan budget dan preferensi Anda."
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
