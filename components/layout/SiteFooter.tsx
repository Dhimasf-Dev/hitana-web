import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Music } from "lucide-react";

const footerNav = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
];

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com", icon: Music },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
];

export const SiteFooter = () => {
  return (
    <footer className="relative border-t border-border/50 bg-hitana-gradient-footer backdrop-blur-sm">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Enhanced Brand Section */}
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/hitana-logo.png"
                  alt="Hitana Logo"
                  width={100}
                  height={100}
                  className="relative h-36 w-36 -ml-5 -mt-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="mt-6 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Professional interior design services and consultation for modern living spaces.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Contact us for your interior design needs</p>
                <p className="text-primary font-medium">info@hitanainterior.com</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Navigation Section */}
          <div className="grid flex-1 gap-12 sm:grid-cols-2">
            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                  Navigate
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group/link flex items-center gap-2 transition-all duration-300 hover:text-foreground hover:translate-x-1">
                      <div className="h-1 w-1 rounded-full bg-primary/60 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              {/* Workshop Hours */}
              <div className="group">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                    Workshop Hours
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60"></div>
                    <span>Mon – Sun: 8:00am – 5:00pm</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Media */}
              <div className="group">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                    Social
                  </h3>
                </div>
                <div className="flex gap-3">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/social relative flex size-12 items-center justify-center rounded-full border border-border/50 bg-gradient-to-br from-card/60 to-card/40 text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                      aria-label={label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <Icon className="relative size-5 transition-transform duration-300 group-hover/social:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-border/50 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Hitana. All rights reserved.</span>
            <div className="h-1 w-1 rounded-full bg-primary/60"></div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="group/link flex items-center gap-2 transition-all duration-300 hover:text-foreground hover:translate-x-1">
              <div className="h-1 w-1 rounded-full bg-primary/60 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
              <span>Privacy Policy</span>
            </a>
            <a href="#" className="group/link flex items-center gap-2 transition-all duration-300 hover:text-foreground hover:translate-x-1">
              <div className="h-1 w-1 rounded-full bg-primary/60 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
              <span>Terms of Service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
