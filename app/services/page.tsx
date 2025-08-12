import Section from '@/components/Section'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Section title="Interpreting">
        <p className="mb-4">
          Our interpreters are equipped with knowledge in various modes of interpreting, prepared to navigate the nuances of language including regional jargon and dialects.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Legal courts and immigration (State and Federal)</li>
          <li>Medical and healthcare</li>
          <li>Educational and community settings</li>
          <li>Law office consultations</li>
          <li>In‑person, phone, and video</li>
        </ul>
        <p className="mt-4">
          We provide interpreting services across various sectors: community, schools, medical, immigration, and law offices.
        </p>
      </Section>

      <Section title="Translation">
        <p>Legal, medical, and educational documents with peer review on request</p>
        <p className="mt-2">
          Dedicated to providing timely and accurate communication solutions for every client.
        </p>
      </Section>

      <Section title="Training and certification prep">
        <p>
          Comprehensive course aligned with NCSC standards. Ethics, modes of interpreting, dialect awareness, exam readiness. Certificate of completion and mentoring.
        </p>
        <p className="mt-4">
          We invest in our interpreters' development to deliver exceptional service. Our rigorous training ensures interpreters are prepared to navigate the nuances of language.
        </p>
        <Link href="/training" className="inline-block mt-6 rounded-md bg-brand-navy text-white px-5 py-3">
          View curriculum
        </Link>
      </Section>

      <Section title="Our commitment">
        <p>
          Your challenges are our solutions; we tailor our services to meet your specific needs. We strive to exceed client expectations in every assignment through professional and ethical interpreting services.
        </p>
        <p className="mt-4">
          Most of our interpreters are certified by the National Center for State Courts, adhering to a strict code of ethics for reliability and integrity in every assignment.
        </p>
      </Section>
    </>
  )
}
