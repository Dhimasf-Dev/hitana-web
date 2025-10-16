import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="relative flex min-h-screen flex-col">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-studio-veil"
        />
        <main className="relative flex-1 pt-24">
          {children}
        </main>
        <div className="relative">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
};
