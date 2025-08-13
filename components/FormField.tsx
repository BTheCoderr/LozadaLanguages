import { FieldError } from 'react-hook-form'

export function FormLabel({ children }:{children: React.ReactNode}) {
  return <label className="block text-sm font-medium mb-1 text-brand-dark-blue">{children}</label>
}
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors" />
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="w-full rounded-md border px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors" />
}
export function ErrorText({ error }:{ error?: any }) {
  if (!error) return null
  
  // Handle array of errors (for array fields)
  if (Array.isArray(error)) {
    const firstError = error.find((err: any) => err?.message)
    if (!firstError) return null
    return <p className="text-sm text-brand-magenta mt-1">{firstError.message}</p>
  }
  
  // Handle single error
  return <p className="text-sm text-brand-magenta mt-1">{error.message}</p>
}
