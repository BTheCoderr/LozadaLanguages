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
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-secondary rounded"></div>
              <span className="text-xl font-bold text-brand-dark-blue">Lozada Languages</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-brand-orange transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-brand-orange transition-colors">Services</Link>
              <Link href="/training" className="text-gray-700 hover:text-brand-orange transition-colors">Training</Link>
              <Link href="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gradient-primary text-white py-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p>&copy; 2024 Lozada Languages, LLC. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
