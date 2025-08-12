import Section from '@/components/Section'
import Link from 'next/link'

export default function TrainingPage() {
  return (
    <>
      <Section title="Interpreter training curriculum">
        <div className="bg-gradient-to-r from-brand-primary to-brand-accent-green p-8 rounded-2xl text-white mb-8">
          <p className="text-lg text-center text-white">
            We invest in our interpreters' development to deliver exceptional service. Our rigorous training ensures interpreters are prepared to navigate the nuances of language, including regional jargon and dialects.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border-l-4 border-brand-accent-coral shadow-sm mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-lg text-slate-700">
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
        
        <div className="bg-gradient-to-br from-sky-50 to-emerald-50 p-6 rounded-lg text-center border border-slate-200">
          <p className="text-lg text-slate-700 mb-4">Want cohort dates or private coaching? Reach out and we will share the next start date.</p>
          <Link href="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </Section>
    </>
  )
}
