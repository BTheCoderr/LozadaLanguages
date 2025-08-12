import Section from '@/components/Section'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Your Challenges Are Our Solutions
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Certified interpreting and training for RI and MA with over 20 years of experience
            </p>
            <p className="mt-6 text-blue-50">
              Lozada Languages, LLC specializes in court, medical, school, and immigration interpreting, led by Julio Alberto Lozada Ramos with over 20 years of experience.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-blue px-6 py-3 rounded-md font-medium transition-colors">
                Our Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-secondary rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      <Section title="About Us">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg leading-relaxed">
              Our agency stands out by ensuring client satisfaction through professional and ethical interpreting services. Most of our interpreters are certified by the National Center for State Courts, adhering to a strict code of ethics for reliability and integrity in every assignment.
            </p>
          </div>
          <div className="bg-gradient-accent p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
            <ul className="space-y-2">
              <li>✓ Extensive experience in both RI State Court and Federal Court</li>
              <li>✓ Rigorous training and NCSC certification</li>
              <li>✓ Known in the community for professionalism and respect</li>
              <li>✓ We strive to exceed client expectations</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Our Expertise">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-orange shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Interpreting Modes</h3>
            <p>Our interpreters undergo rigorous training, equipped with knowledge in various modes of interpreting.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-magenta shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Regional Expertise</h3>
            <p>Prepared to navigate the nuances of language, including regional jargon and dialects, ensuring effective communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-green shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Sector Coverage</h3>
            <p>We provide interpreting services across various sectors: community, schools, medical, immigration, and law offices.</p>
          </div>
        </div>
      </Section>

      <Section title="Languages We Serve">
        <div className="bg-gradient-secondary p-8 rounded-lg text-white">
          <p className="text-center text-lg mb-6">
            Offering interpreting and translation services in multiple languages, including Spanish, Haitian Creole, Cape Verdean Creole, Arabic, Cantonese, Mandarin, Italian, French, and more.
          </p>
          <p className="text-center text-blue-100">
            Your challenges are our solutions; we tailor our services to meet your specific needs. Dedicated to providing timely and accurate communication solutions for every client.
          </p>
        </div>
      </Section>
    </>
  )
}
