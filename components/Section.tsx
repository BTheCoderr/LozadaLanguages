export default function Section({ title, children }:{
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-brand-dark-blue mb-6">{title}</h2>
      <div className="text-[17px] leading-7">{children}</div>
    </section>
  )
}
