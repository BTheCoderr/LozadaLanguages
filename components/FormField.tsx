import { FieldError } from 'react-hook-form'

export function FormLabel({ children }:{children: React.ReactNode}) {
  return <label className="block text-sm font-medium mb-1">{children}</label>
}
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="w-full rounded-md border px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
}
export function ErrorText({ error }:{ error?: FieldError }) {
  if (!error) return null
  return <p className="text-sm text-red-600 mt-1">{error.message}</p>
}
