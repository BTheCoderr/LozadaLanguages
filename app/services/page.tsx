import Section from '@/components/Section'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Section title="Professional Interpreting Services">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Court Interpreting Excellence</h3>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Our lead interpreter brings over 20 years of experience as a Deputy Clerk Court Interpreter for the Rhode Island Judiciary, serving all levels of the court system.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">All Court Levels</h4>
                  <p className="text-slate-600">Supreme, Superior, District, Family, Juvenile, and Worker's Compensation Courts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">High-Profile Trials</h4>
                  <p className="text-slate-600">Extensive experience in complex, high-stakes legal proceedings</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Expert Witness Interpretation</h4>
                  <p className="text-slate-600">Specialized interpreting for Forensic experts, Medical Examiners, and Ballistic Experts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Prison Interpreting</h4>
                  <p className="text-slate-600">ACI prison interpreting at both State and Federal facilities with attorneys and investigators</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-primary to-brand-accent-green p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Federal & State Experience</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Federal Court Experience</h4>
                  <p className="text-blue-100 text-sm">Extensive work in Federal Court proceedings and investigations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Federal Bureau of Investigations</h4>
                  <p className="text-blue-100 text-sm">Direct experience working with FBI cases and investigations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Attorney Collaboration</h4>
                  <p className="text-blue-100 text-sm">Close work with attorneys throughout Rhode Island</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Interpreting Modes & Capabilities">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Simultaneous</h3>
            <p className="text-slate-600">Real-time interpretation for court proceedings, depositions, and live events</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-brand-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">C</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Consecutive</h3>
            <p className="text-slate-600">Accurate interpretation with pauses for complex legal and medical terminology</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-brand-accent-coral rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">ST</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Sight Translation</h3>
            <p className="text-slate-600">Immediate translation of documents, forms, and affidavits</p>
          </div>
        </div>
      </Section>

      <Section title="Additional Services">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Document Translation</h3>
            <p className="text-slate-700 mb-4">
              Accurate translation of court documents, legal forms, affidavits, and official paperwork. 
              Our expertise ensures legal accuracy and cultural sensitivity.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Court documents and legal forms</li>
              <li>• Affidavits and sworn statements</li>
              <li>• Immigration paperwork</li>
              <li>• Medical and educational documents</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Remote & On-Site</h3>
            <p className="text-slate-700 mb-4">
              Flexible interpretation services available both in-person and remotely via video conferencing platforms.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• In-person court appearances</li>
              <li>• Remote interpretation via WebEx/Zoom</li>
              <li>• Prison facility visits</li>
              <li>• Attorney office consultations</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Languages & Dialects">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 mb-8">
            We provide interpreting services in multiple languages, with expertise in regional dialects and legal terminology.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Spanish</h4>
              <p className="text-sm text-slate-600">All regional dialects</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Haitian Creole</h4>
              <p className="text-sm text-slate-600">Standard & regional variations</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Cape Verdean Creole</h4>
              <p className="text-sm text-slate-600">Cultural & linguistic expertise</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Additional Languages</h4>
              <p className="text-sm text-slate-600">Arabic, Cantonese, Mandarin, Italian, French</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Professional Standards">
        <div className="bg-gradient-to-r from-brand-primary to-brand-accent-green p-8 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-semibold mb-4">NCSC Standards & Ethics</h3>
          <p className="text-xl text-blue-100 mb-6">
            All our interpreters adhere to the National Center for State Courts standards, ensuring professional excellence, 
            confidentiality, and ethical conduct in every assignment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Confidentiality</h4>
              <p className="text-blue-100">Complete privacy and discretion in all matters</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Accuracy</h4>
              <p className="text-blue-100">Precise interpretation maintaining legal integrity</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Impartiality</h4>
              <p className="text-blue-100">Neutral interpretation without bias or influence</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
