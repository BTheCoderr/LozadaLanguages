import Section from '@/components/Section'
import Link from 'next/link'

export default function TrainingPage() {
  return (
    <>
      <Section title="Interpreter training curriculum">
        <div className="bg-gradient-primary p-8 rounded-lg text-white mb-8">
          <p className="text-lg text-center">
            We invest in our interpreters' development to deliver exceptional service. Our rigorous training ensures interpreters are prepared to navigate the nuances of language, including regional jargon and dialects.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border-l-4 border-brand-orange shadow-sm mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-lg">
            <li>Foundations of court and medical interpreting</li>
            <li>Code of ethics and standards of practice</li>
            <li>Modes: consecutive, simultaneous, sight translation</li>
            <li>Terminology toolkit for legal and healthcare</li>
            <li>Dialect and regional variation strategies</li>
            <li>Memory, note‑taking, and accuracy drills</li>
            <li>Simulated hearings, IEPs, intakes, ER scenarios</li>
            <li>NCSC exam prep and pathway to certification</li>
          </ol>
        </div>
        
        <div className="bg-gradient-accent p-6 rounded-lg text-white text-center">
          <p className="text-lg mb-4">Want cohort dates or private coaching? Reach out and we will share the next start date.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-dark-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
            Get Started Today
          </Link>
        </div>
      </Section>
    </>
  )
}
