import Section from '@/components/Section'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Your Challenges Are
                  <span className="block text-brand-orange">Our Solutions</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Certified interpreting and training for Rhode Island and Massachusetts with over 20 years of experience
                </p>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                  <span className="text-blue-50">NCSC Certified Interpreters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-magenta rounded-full"></div>
                  <span className="text-blue-50">Federal & State Court Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-green rounded-full"></div>
                  <span className="text-blue-50">Professional Training Programs</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-secondary hover:shadow-xl text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center">
                  Get Started Today
                </Link>
                <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center">
                  View Services
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-secondary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/logo.svg" alt="Lozada Languages" className="w-48 h-48 drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section title="About Us">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark-blue mb-6">Professional Excellence Since 2004</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Our agency stands out by ensuring client satisfaction through professional and ethical interpreting services. Most of our interpreters are certified by the National Center for State Courts, adhering to a strict code of ethics for reliability and integrity in every assignment.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Founded by Julio Alberto Lozada Ramos, we've been bridging language barriers in Rhode Island and Massachusetts for over two decades, building a reputation for excellence and trust.
            </p>
          </div>
          <div className="bg-gradient-accent p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Lozada Languages</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Federal & State Court Experience</h4>
                  <p className="text-blue-100 text-sm">Extensive experience in both RI State Court and Federal Court</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">NCSC Certification</h4>
                  <p className="text-blue-100 text-sm">Rigorous training and National Center for State Courts certification</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Community Trust</h4>
                  <p className="text-blue-100 text-sm">Known in the community for professionalism and respect</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
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

      {/* Expertise Section */}
      <Section title="Our Expertise">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-2xl border-l-4 border-brand-orange shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-dark-blue mb-4">Interpreting Modes</h3>
            <p className="text-gray-600 leading-relaxed">Our interpreters undergo rigorous training, equipped with knowledge in various modes of interpreting including consecutive, simultaneous, and sight translation.</p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl border-l-4 border-brand-magenta shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-magenta to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-dark-blue mb-4">Regional Expertise</h3>
            <p className="text-gray-600 leading-relaxed">Prepared to navigate the nuances of language, including regional jargon and dialects, ensuring effective communication in every context.</p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl border-l-4 border-brand-green shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-dark-blue mb-4">Sector Coverage</h3>
            <p className="text-gray-600 leading-relaxed">We provide interpreting services across various sectors: community, schools, medical, immigration, and law offices with specialized expertise.</p>
          </div>
        </div>
      </Section>

      {/* Languages Section */}
      <Section title="Languages We Serve">
        <div className="bg-gradient-secondary p-12 rounded-3xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">Multilingual Excellence</h3>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
            Offering interpreting and translation services in multiple languages, including Spanish, Haitian Creole, Cape Verdean Creole, Arabic, Cantonese, Mandarin, Italian, French, and more.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            {['Spanish', 'Haitian Creole', 'Cape Verdean Creole', 'Arabic', 'Cantonese', 'Mandarin', 'Italian', 'French'].map((lang) => (
              <div key={lang} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 hover:bg-white/30 transition-colors">
                <span className="font-medium">{lang}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-blue-100 mb-8">
            Your challenges are our solutions; we tailor our services to meet your specific needs. Dedicated to providing timely and accurate communication solutions for every client.
          </p>
          
          <Link href="/contact" className="inline-block bg-white text-brand-dark-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Request Language Services
          </Link>
        </div>
      </Section>
    </>
  )
}
