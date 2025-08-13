import Section from '@/components/Section'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Section title="About Lozada Languages">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Professional Excellence Since 2004</h3>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Our agency stands out by ensuring client satisfaction through professional and ethical interpreting services. Most of our interpreters are certified by the National Center for State Courts, adhering to a strict code of ethics for reliability and integrity in every assignment.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Founded by Julio Alberto Lozada Ramos, we've been bridging language barriers in Rhode Island and Massachusetts for over two decades, building a reputation for excellence and trust.
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-primary to-brand-accent-green p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Lozada Languages</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Federal & State Court Experience</h4>
                  <p className="text-blue-100 text-sm">Extensive experience in both RI State Court and Federal Court</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">NCSC Certification</h4>
                  <p className="text-blue-100 text-sm">Rigorous training and National Center for State Courts certification</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Community Trust</h4>
                  <p className="text-blue-100 text-sm">Known in the community for professionalism and respect</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-primary text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Exceeding Expectations</h4>
                  <p className="text-blue-100 text-sm">We strive to exceed client expectations in every assignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Mission">
        <div className="bg-slate-50 p-8 rounded-2xl">
          <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto">
            To provide exceptional language access services that bridge communication barriers,
            ensuring equal access to justice, healthcare, education, and community services
            for Limited English Proficient (LEP) individuals in Rhode Island and Massachusetts.
          </p>
        </div>
      </Section>

      <Section title="Professional Experience & Expertise">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Court Interpreting Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">All Court Levels</h4>
                  <p className="text-slate-600 text-sm">Supreme, Superior, District, Family, Juvenile, and Worker's Compensation Courts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">High-Profile Trials</h4>
                  <p className="text-slate-600 text-sm">Extensive experience in complex, high-stakes legal proceedings</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Expert Witness Interpretation</h4>
                  <p className="text-slate-600 text-sm">Specialized interpreting for Forensic experts, Medical Examiners, and Ballistic Experts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Prison Interpreting</h4>
                  <p className="text-slate-600 text-sm">ACI prison interpreting at both State and Federal facilities with attorneys and investigators</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Federal & Specialized Experience</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Federal Court Experience</h4>
                  <p className="text-slate-600 text-sm">Extensive work in Federal Court proceedings and investigations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Federal Bureau of Investigations</h4>
                  <p className="text-slate-600 text-sm">Direct experience working with FBI cases and investigations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Attorney Collaboration</h4>
                  <p className="text-slate-600 text-sm">Close work with attorneys throughout Rhode Island</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-brand-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Remote Capabilities</h4>
                  <p className="text-slate-600 text-sm">Video conferencing via WebEx and Zoom platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Get Started">
        <div className="text-center">
          <p className="text-lg text-slate-600 mb-6">
            Ready to experience professional interpreting services? Contact us today.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Services
          </Link>
        </div>
      </Section>
    </>
  )
}
