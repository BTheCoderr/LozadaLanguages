import Section from '@/components/Section'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Section title="Interpreting">
        <div className="bg-gradient-accent p-6 rounded-lg text-white mb-6">
          <p className="text-lg">
            Our interpreters are equipped with knowledge in various modes of interpreting, prepared to navigate the nuances of language including regional jargon and dialects.
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Legal courts and immigration (State and Federal)</li>
          <li>Medical and healthcare</li>
          <li>Educational and community settings</li>
          <li>Law office consultations</li>
          <li>In‑person, phone, and video</li>
        </ul>
        <p className="mt-4 text-lg">
          We provide interpreting services across various sectors: community, schools, medical, immigration, and law offices.
        </p>
      </Section>

      <Section title="Translation">
        <div className="bg-white p-6 rounded-lg border-l-4 border-brand-orange shadow-sm">
          <p className="text-lg">Legal, medical, and educational documents with peer review on request</p>
        </div>
      </Section>

      <Section title="Training and certification prep">
        <div className="bg-white p-6 rounded-lg border-l-4 border-brand-magenta shadow-sm">
          <p className="text-lg mb-4">
            Comprehensive course aligned with NCSC standards. Ethics, modes of interpreting, dialect awareness, exam readiness. Certificate of completion provided.
          </p>
          <Link href="/training" className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
            View Curriculum
          </Link>
        </div>
      </Section>

      <Section title="Why Choose Our Services">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-green shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Professional Standards</h3>
            <p>Most of our interpreters are certified by the National Center for State Courts, adhering to a strict code of ethics for reliability and integrity in every assignment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-light-blue shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Client Satisfaction</h3>
            <p>Our agency stands out by ensuring client satisfaction through professional and ethical interpreting services. We strive to exceed client expectations.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
