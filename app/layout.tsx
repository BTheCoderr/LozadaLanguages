import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lozada Languages, LLC',
  description: 'Certified interpreting, translation, and interpreter training for RI and MA',
  icons: { icon: '/logo.svg' },
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
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img src="/logo.svg" alt="Lozada Languages" className="w-12 h-12 transition-transform group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-brand-dark-blue leading-tight">Lozada Languages</span>
                  <span className="text-sm text-gray-500 font-medium">Professional Interpreting Services</span>
                </div>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-brand-orange transition-colors font-medium relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full"></span>
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-brand-orange transition-colors font-medium relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full"></span>
                </Link>
                <Link href="/training" className="text-gray-700 hover:text-brand-orange transition-colors font-medium relative group">
                  Training
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="bg-gradient-secondary hover:shadow-lg text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gradient-primary text-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/logo.svg" alt="Lozada Languages" className="w-10 h-10" />
                  <span className="text-xl font-bold">Lozada Languages</span>
                </div>
                <p className="text-blue-100">Professional interpreting and training services for Rhode Island and Massachusetts.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-blue-100">
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-blue-100">Ready to get started?</p>
                <Link href="/contact" className="inline-block mt-3 bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Request Services
                </Link>
              </div>
            </div>
            <div className="border-t border-blue-200 mt-8 pt-8 text-center text-blue-100">
              <p>&copy; 2024 Lozada Languages, LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
