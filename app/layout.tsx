import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lozada Languages, LLC',
  description: 'Certified interpreting, translation, and interpreter training for RI and MA',
  icons: { icon: '/logo.svg' },
  openGraph: {
    title: 'Lozada Languages, LLC',
    description: 'Certified interpreting, translation, and interpreter training',
    images: ['/og-image.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Lozada Languages" className="h-8 w-8" />
              <span className="font-semibold tracking-wide">Lozada Languages</span>
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/training">Training</Link>
              <Link href="/contact" className="rounded-md bg-brand-navy text-white px-4 py-2">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-24">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
            <div>© {new Date().getFullYear()} Lozada Languages, LLC</div>
            <div>Providence RI and Massachusetts</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
