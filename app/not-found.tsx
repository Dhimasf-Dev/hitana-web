import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-semibold text-foreground">404</h1>
          <p className="text-lg text-muted-foreground">Halaman tidak ditemukan</p>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau dihapus.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="rounded-full px-8 shadow-aurora" asChild>
            <Link href="/">Kembali ke beranda</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary/30 px-8 text-primary hover:bg-primary/10"
            asChild
          >
            <Link href="/projects">Lihat proyek kami</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
