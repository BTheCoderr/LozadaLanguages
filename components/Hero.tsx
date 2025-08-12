import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-400/20 to-sky-500/20 blur-3xl" />
      <div className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-3 py-1 text-xs text-sky-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              NCSC-aligned • 20+ years experience
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Professional interpreting in court, medical, and community settings
            </h1>
            <p className="mt-3 text-xl text-slate-600">
              Certified and qualified interpreters ready on demand. NCSC standards. Reliable, ethical, and prompt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="btn-secondary"
              >
                View Services
              </Link>
              <div className="ml-2 text-sm text-slate-500">
                Court • Medical • Immigration • Schools
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Badge label="NCSC standards" />
              <Badge label="Ethics & confidentiality" />
              <Badge label="On-site + remote" />
            </div>
          </div>

          <div className="relative">
            {/* Logo emblem as subtle watermark */}
            <div className="mx-auto aspect-square w-72 rounded-full bg-gradient-to-br from-sky-100 to-emerald-100 p-6 shadow-inner md:w-80">
              <img
                src="/logo-emblem.svg"
                alt="Lozada Languages emblem"
                className="h-full w-full drop-shadow-sm opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="badge">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      {label}
    </div>
  );
}
