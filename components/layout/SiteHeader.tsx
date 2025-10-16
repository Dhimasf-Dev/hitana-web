"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "/services", type: "page" },
  { label: "Process", href: "/#process", type: "anchor" },
  { label: "Projects", href: "/projects", type: "page" },
];

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        "backdrop-blur-xl",
        isScrolled
          ? "bg-background/85 border-border/60 shadow-canopy"
          : "bg-background/55 border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-6 px-6">
        <div className="flex flex-1 items-center justify-between gap-6">
          <Link href="/" onClick={closeMenu} className="group inline-flex items-center gap-3">
            <Image
              src="/hitana-logo.png"
              alt="Hitana Logo"
              width={100}
              height={100}
              className="h-24 w-24 object-contain"
            />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              item.type === "page" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button size="lg" className="rounded-full px-6 shadow-aurora" asChild>
            <a href="#contact">Book a consultation</a>
          </Button>
        </div>
        <div className="flex items-center lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle navigation" onClick={toggleMenu}>
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-6 flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            item.type === "page" ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-foreground/90"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-foreground/90"
              >
                {item.label}
              </a>
            )
          ))}
          <Button size="lg" className="rounded-full px-6" asChild>
            <a href="#contact" onClick={closeMenu}>
              Book a consultation
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
