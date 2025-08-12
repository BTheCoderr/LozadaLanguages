import Section from '@/components/Section'
import Link from 'next/link'

export default function TrainingPage() {
  return (
    <>
      <Section title="Interpreter training curriculum">
        <p className="mb-6">
          We invest in our interpreters' development to deliver exceptional service. Our rigorous training ensures interpreters are prepared to navigate the nuances of language, including regional jargon and dialects.
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Foundations of court and medical interpreting</li>
          <li>Code of ethics and standards of practice</li>
          <li>Modes: consecutive, simultaneous, sight translation</li>
          <li>Terminology toolkit for legal and healthcare</li>
          <li>Dialect and regional variation strategies</li>
          <li>Memory, note‑taking, and accuracy drills</li>
          <li>Simulated hearings, IEPs, intakes, ER scenarios</li>
          <li>NCSC exam prep and pathway to certification</li>
        </ol>
        <p className="mt-6">
          Our interpreters undergo rigorous training, equipped with knowledge in various modes of interpreting. Prepared to navigate the nuances of language, ensuring effective communication in every assignment.
        </p>
        <p className="mt-4">
          Want cohort dates or private coaching? Reach out and we will share the next start date.
        </p>
        <Link href="/contact" className="inline-block mt-6 rounded-md bg-brand-navy text-white px-5 py-3">
          Ask about the next cohort
        </Link>
      </Section>

      <Section title="Professional development">
        <p>
          We invest in our interpreters' development to deliver exceptional service. Known in the community for our professionalism and respect, we strive to exceed client expectations through continuous learning and improvement.
        </p>
        <p className="mt-4">
          Our training programs are designed to ensure interpreters are not only technically proficient but also ethically grounded, maintaining the highest standards of professional conduct.
        </p>
      </Section>
    </>
  )
}
