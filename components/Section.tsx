export default function Section({ title, children }:{
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 text-[17px] leading-7">{children}</div>
    </section>
  )
}
