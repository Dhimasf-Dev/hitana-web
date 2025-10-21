import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteLayout } from "@/components/layout/SiteLayout"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hitana - Interior Design & Custom Furniture',
  description: 'Professional interior design services and consultation',
  icons: {
    icon: '/hitana-logo.png',
    shortcut: '/hitana-logo.png',
    apple: '/hitana-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <SiteLayout>
            {children}
          </SiteLayout>
        </TooltipProvider>
      </body>
    </html>
  )
}
