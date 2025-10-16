import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Music } from "lucide-react";

const footerNav = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/projects" },
];

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com", icon: Music },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/hitana-logo.png"
                alt="Hitana Logo"
                width={100}
                height={100}
                className="h-36 w-36 -ml-5 -mt-10 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional interior design services and consultation for modern living spaces.
            </p>
            <div className="text-sm text-muted-foreground/80">
              <p>Contact us for your interior design needs</p>
              <p>info@hitana.com</p>
            </div>
          </div>
          <div className="grid flex-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/80">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith('/#') ? (
                      <a href={item.href} className="transition hover:text-foreground">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="transition hover:text-foreground">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/80">
                Studio Hours
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Mon – Sun: 8:00am – 5:00pm</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/80">
                  Social
                </h3>
                <div className="mt-3 flex gap-3">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition hover:border-primary hover:text-primary"
                      aria-label={label}
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hitana. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
