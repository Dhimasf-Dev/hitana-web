"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About Us", href: "/about", type: "page" },
  { label: "Contact", href: "/contact", type: "page" },
  { label: "FAQ", href: "/faq", type: "page" },
  { label: "Projects", href: "/projects", type: "page" },
  { label: "Services", href: "/services", type: "page" },
];

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        "backdrop-blur-xl bg-hitana-gradient-header",
        isScrolled
          ? "border-border/50 shadow-xl"
          : "border-border/30",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="relative mx-auto flex h-20 max-w-7xl items-center gap-6 px-6">
        <div className="flex flex-1 items-center justify-between gap-6">
          <Link href="/" onClick={closeMenu} className="group inline-flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/hitana-logo.png"
                alt="Hitana Logo"
                width={120}
                height={120}
                className="relative h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return item.type === "page" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "group/link relative text-sm font-semibold transition-all duration-300 hover:translate-y-[-1px]",
                    active 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300",
                    active 
                      ? "w-full" 
                      : "w-0 group-hover/link:w-full"
                  )}></div>
                  <span className="relative">{item.label}</span>
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "group/link relative text-sm font-semibold transition-all duration-300 hover:translate-y-[-1px]",
                    active 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300",
                    active 
                      ? "w-full" 
                      : "w-0 group-hover/link:w-full"
                  )}></div>
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button size="sm" className="group rounded-full px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
            <a href="https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1" target="_blank" rel="noreferrer">
              <span className="flex items-center gap-2">
                Konsultasi gratis
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </Button>
        </div>
        <div className="flex items-center lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Toggle navigation" 
            onClick={toggleMenu}
            className="group relative rounded-full border border-border/50 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            {isMenuOpen ? <X className="relative size-5" /> : <Menu className="relative size-5" />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "border-t border-border/50 bg-hitana-gradient-header backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        
        <nav className="relative mx-6 flex flex-col gap-6 py-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return item.type === "page" ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "group/link flex items-center gap-3 text-base font-semibold transition-all duration-300 hover:translate-x-2",
                  active 
                    ? "text-foreground" 
                    : "text-foreground/90 hover:text-foreground"
                )}
              >
                <div className={cn(
                  "h-1 w-1 rounded-full bg-primary/60 transition-opacity duration-300",
                  active 
                    ? "opacity-100" 
                    : "opacity-0 group-hover/link:opacity-100"
                )}></div>
                <span>{item.label}</span>
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "group/link flex items-center gap-3 text-base font-semibold transition-all duration-300 hover:translate-x-2",
                  active 
                    ? "text-foreground" 
                    : "text-foreground/90 hover:text-foreground"
                )}
              >
                <div className={cn(
                  "h-1 w-1 rounded-full bg-primary/60 transition-opacity duration-300",
                  active 
                    ? "opacity-100" 
                    : "opacity-0 group-hover/link:opacity-100"
                )}></div>
                <span>{item.label}</span>
              </a>
            );
          })}
          <div className="pt-4">
            <Button size="sm" className="group w-full rounded-full px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <a href="https://wa.me/6281189996353?text=Hai%20kak%21%20Saya%20tertarik%20dengan%20layanan%20desain%20interior%20dan%20furniture%20custom%20nya%20%F0%9F%8F%A1" target="_blank" rel="noreferrer" onClick={closeMenu}>
                <span className="flex items-center justify-center gap-2">
                  Konsultasi gratis
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
