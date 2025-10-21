"use client";

import { Button } from "@/components/ui/button";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {

  return (
    <div className="space-y-20 pb-16 lg:space-y-24">


      <section className="mx-auto max-w-6xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Lokasi workshop
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Kunjungi Workshop Kami
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Workshop Hitana berlokasi strategis di Kemang, Jakarta Selatan. Mudah dijangkau dengan berbagai transportasi dan tersedia parkir yang memadai.
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 shadow-lg backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.599187265886!2d106.8225841749912!3d-6.3162643936731095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ede6c2bb16d5%3A0x22774f2adf1fb43c!2sJl.%20Kebagusan%20Raya%20No.66%2C%20RT.10%2FRW.7%2C%20Ragunan%2C%20Ps.%20Minggu%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012520!5e0!3m2!1sen!2sid!4v1761040758534!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  title="Lokasi PT Hitana Nara Interior"
                ></iframe>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl border border-border/50 bg-background/90 backdrop-blur-sm p-6 shadow-lg">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        PT Hitana Nara Interior
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Jl. Kebagusan Raya No. 66, RT.10/RW.7, Ragunan, Ps. Minggu, Jakarta Selatan 12520
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>Senin - Minggu: 08:00 - 17:00</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button
                        size="sm"
                        className="rounded-full px-4 py-2 text-xs font-semibold"
                        asChild
                      >
                        <a href="https://maps.google.com/?q=Jl+Kebagusan+Raya+No+66+RT+10+RW+7+Ragunan+Ps+Minggu+Jakarta+Selatan+12520" target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-3 h-3 mr-1" />
                          Buka di Maps
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-2 border-primary/40 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/10 hover:border-primary"
                        asChild
                      >
                        <a href="tel:+6281189996353">
                          <Phone className="w-3 h-3 mr-1" />
                          Telepon
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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
