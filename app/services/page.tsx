import Section from '@/components/Section'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Section title="Interpreting">
        <ul className="list-disc pl-5 space-y-2">
          <li>Legal courts and immigration</li>
          <li>Medical and healthcare</li>
          <li>Educational and community settings</li>
          <li>Law office consultations</li>
          <li>In‑person, phone, and video</li>
        </ul>
      </Section>

      <Section title="Translation">
        <p>Legal, medical, and educational documents with peer review on request</p>
      </Section>

      <Section title="Training and certification prep">
        <p>
          Comprehensive course aligned with NCSC standards. Ethics, modes of interpreting, dialect awareness, exam readiness. Certificate of completion and mentoring.
        </p>
        <Link href="/training" className="inline-block mt-6 rounded-md bg-brand-navy text-white px-5 py-3">
          View curriculum
        </Link>
      </Section>
    </>
  )
}
