import '../styles/globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lozada Languages, LLC',
  description: 'Certified interpreting, translation, and interpreter training for RI and MA',
  icons: { icon: '/logo-emblem.svg' },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Lozada Languages, LLC',
    description: 'Certified interpreting, translation, and interpreter training',
    images: ['/og-image.png'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Lozada Languages, LLC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lozada Languages, LLC',
    description: 'Certified interpreting, translation, and interpreter training for RI and MA',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <footer className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/logo-emblem.svg" alt="Lozada Languages" className="w-10 h-10" />
                  <span className="text-xl font-bold">Lozada Languages</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Professional interpreting and training services for Rhode Island and Massachusetts. 
                  NCSC certified, ethical, and reliable.
                </p>
                <div className="flex space-x-4">
                  <Link href="/contact" className="btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-slate-300">
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Languages</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>Spanish</li>
                  <li>Haitian Creole</li>
                  <li>Cape Verdean Creole</li>
                  <li>Arabic</li>
                  <li>And more...</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2024 Lozada Languages, LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
