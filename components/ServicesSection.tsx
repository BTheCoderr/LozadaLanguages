export default function ServicesSection() {
  const items = [
    {
      title: "Court Interpreting",
      text: "State and Federal proceedings, depositions, arraignments, probation and pretrial.",
    },
    {
      title: "Medical Interpreting",
      text: "Hospitals, clinics, HIPAA-aware sessions, in-person and remote.",
    },
    {
      title: "Community & Schools",
      text: "IEP meetings, parent conferences, community services and outreach.",
    },
    {
      title: "Immigration",
      text: "USCIS interviews, attorney consults, affidavits and certifications.",
    },
    {
      title: "Remote Simultaneous",
      text: "Zoom and hybrid events with professional RSI workflows.",
    },
    {
      title: "Training Programs",
      text: "Interpreter training aligned to NCSC standards and ethics.",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Services
          </h2>
          <p className="mt-3 text-slate-600">
            Professional interpreting across legal, medical, education, immigration and community settings.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-sky-200 to-emerald-200" />
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              <a
                href="/contact"
                className="mt-4 inline-flex text-sm font-medium text-sky-700 hover:underline"
              >
                Book now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
