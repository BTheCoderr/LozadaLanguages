import Section from '@/components/Section'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Your Challenges Are Our Solutions
            </h1>
            <p className="mt-4 text-xl">
              Certified interpreting and training for RI and MA with over 20 years of experience
            </p>
            <p className="mt-6">
              Lozada Languages, LLC specializes in court, medical, school, and immigration interpreting, led by Julio Alberto Lozada Ramos with over 20 years of experience in judicial court interpreting.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="rounded-md bg-brand-navy text-white px-5 py-3">Request services</Link>
              <Link href="/training" className="rounded-md border px-5 py-3">Join a course</Link>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="h-64 bg-gradient-to-br from-brand-navy to-brand-gold rounded-lg flex items-center justify-center text-white text-2xl font-semibold">
              Language Access
            </div>
          </div>
        </div>
      </section>

      <Section title="About us">
        <p>
          Founded by Julio Alberto Lozada Ramos—an NCSC‑certified interpreter with two decades in Rhode Island state and federal courts—we empower LEP communities through accurate and ethical language access.
        </p>
        <p className="mt-4">
          Our agency stands out by ensuring client satisfaction through professional and ethical interpreting services. Most of our interpreters are certified by the National Center for State Courts, adhering to a strict code of ethics for reliability and integrity in every assignment.
        </p>
      </Section>

      <Section title="Why choose us">
        <ul className="grid md:grid-cols-2 gap-4 mt-4 list-disc pl-5">
          <li>Certified excellence following NCSC standards and strict ethics</li>
          <li>Extensive experience in both RI State Court and Federal Court</li>
          <li>Rigorous training in various modes of interpreting</li>
          <li>Regional jargon and dialect expertise</li>
          <li>Professional development investment for exceptional service</li>
          <li>Community reputation for professionalism and respect</li>
        </ul>
        <p className="mt-6 text-lg font-medium">
          We strive to exceed client expectations in every assignment.
        </p>
      </Section>

      <Section title="Our expertise">
        <p className="mb-4">
          Our interpreters undergo rigorous training, equipped with knowledge in various modes of interpreting. Prepared to navigate the nuances of language, including regional jargon and dialects, ensuring effective communication.
        </p>
        <p>
          We provide interpreting services across various sectors: community, schools, medical, immigration, and law offices. Your challenges are our solutions; we tailor our services to meet your specific needs.
        </p>
      </Section>

      <Section title="Languages">
        <p>
          Spanish, Haitian Creole, Cape Verdean Creole, Arabic, Cantonese, Mandarin, Italian, French and more
        </p>
        <p className="mt-4">
          Dedicated to providing timely and accurate communication solutions for every client.
        </p>
      </Section>
    </>
  )
}
