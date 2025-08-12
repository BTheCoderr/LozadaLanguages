import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200/60 shadow-sm">
      <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="Lozada Languages" className="h-8 w-8" />
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">Lozada Languages</div>
            <div className="text-xs text-slate-500">Professional Interpreting Services</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <Link href="#services" className="hover:text-brand-primary transition-colors">Services</Link>
          <Link href="#sectors" className="hover:text-brand-primary transition-colors">Sectors</Link>
          <Link href="/training" className="hover:text-brand-primary transition-colors">Training</Link>
          <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
