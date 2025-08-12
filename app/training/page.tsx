import Section from '@/components/Section'
import Link from 'next/link'

export default function TrainingPage() {
  return (
    <Section title="Interpreter training curriculum">
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
      <p className="mt-6">Want cohort dates or private coaching? Reach out and we will share the next start date.</p>
      <Link href="/contact" className="inline-block mt-6 rounded-md bg-brand-navy text-white px-5 py-3">
        Ask about the next cohort
      </Link>
    </Section>
  )
}
