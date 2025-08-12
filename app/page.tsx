import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import Section from '@/components/Section'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      
      {/* Training Promo */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent-green text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Certified Interpreter</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Interpreter training aligned with NCSC standards. Ethics, modes, terminology, and exam prep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/training" className="btn-primary bg-white text-brand-primary hover:bg-gray-100">
              Explore Programs
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-primary">
              Schedule Info Session
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <Section title="Why Choose Lozada Languages">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">NCSC Certified</h3>
            <p className="text-slate-600">Our interpreters meet National Center for State Courts standards</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Code of Ethics</h3>
            <p className="text-slate-600">Strict adherence to professional ethics and confidentiality</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-sky/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
            <p className="text-slate-600">Decades of expertise in court, medical, and community interpreting</p>
          </div>
        </div>
      </Section>

      {/* Sectors Section */}
      <section id="sectors" className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Sectors We Serve
            </h2>
            <p className="mt-3 text-slate-600">
              Professional interpreting across all major sectors with specialized expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Legal & Courts', desc: 'State and Federal proceedings, depositions, arraignments' },
              { title: 'Healthcare', desc: 'Hospitals, clinics, HIPAA-compliant sessions' },
              { title: 'Education', desc: 'IEP meetings, parent conferences, school services' },
              { title: 'Immigration', desc: 'USCIS interviews, attorney consultations, affidavits' }
            ].map((sector) => (
              <div key={sector.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{sector.title}</h3>
                <p className="text-sm text-slate-600">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
