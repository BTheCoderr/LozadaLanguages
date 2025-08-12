export default function Button({ children, ...props }:{
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}
      className="inline-flex items-center justify-center rounded-md bg-brand-orange hover:bg-orange-600 text-white px-5 py-3 disabled:opacity-50 transition-colors">
      {children}
    </button>
  )
}
