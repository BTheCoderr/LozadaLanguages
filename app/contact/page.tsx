'use client'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RequestSchema, type RequestInput } from '@/lib/schema'
import { FormLabel, Input, Textarea, ErrorText } from '@/components/FormField'
import Button from '@/components/Button'
import { useState } from 'react'

const LANGUAGE_OPTIONS = [
  'Spanish','Haitian Creole','Cape Verdean Creole','Arabic',
  'Cantonese','Mandarin','Italian','French','Portuguese','Other'
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, control, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<RequestInput>({ resolver: zodResolver(RequestSchema), defaultValues: { languages: [] } })

  const onSubmit = async (data: RequestInput) => {
    if (data.honey) return
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    if (res.ok) setSent(true)
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Thank you</h1>
        <p className="mt-4">We received your request and will reach out shortly.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Request services or contact us</h1>
      <p className="mt-3 text-[17px]">
        Tell us what you need. We tailor every assignment and can meet urgent timelines.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid gap-5">
        <div className="hidden">
          <Input placeholder="Leave this empty" {...register('honey')} />
        </div>

        <div>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Full name" {...register('name')} />
          <ErrorText error={errors.name} />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="you@example.com" {...register('email')} />
            <ErrorText error={errors.email} />
          </div>
          <div>
            <FormLabel>Phone</FormLabel>
            <Input placeholder="Optional" {...register('phone')} />
          </div>
        </div>

        <div>
          <FormLabel>Organization</FormLabel>
          <Input placeholder="Court, hospital, school, law office or business" {...register('organization')} />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <FormLabel>Service</FormLabel>
            <select {...register('service')} className="w-full rounded-md border px-3 py-2">
              <option value="interpreting">Interpreting</option>
              <option value="translation">Translation</option>
              <option value="training">Training</option>
            </select>
            <ErrorText error={errors.service as any} />
          </div>
          <div>
            <FormLabel>Preferred date or timeframe</FormLabel>
            <Input placeholder="MM/DD or range" {...register('date')} />
          </div>
        </div>

        <div>
          <FormLabel>Location or modality</FormLabel>
          <Input placeholder="Providence courthouse, Zoom, hospital, school etc." {...register('location')} />
        </div>

        <div>
          <FormLabel>Languages needed</FormLabel>
          <Controller
            control={control}
            name="languages"
            render={({ field }) => (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {LANGUAGE_OPTIONS.map(lang => {
                  const checked = field.value?.includes(lang)
                  return (
                    <label key={lang} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          if (checked) field.onChange(field.value.filter((l:string)=>l!==lang))
                          else field.onChange([...(field.value||[]), lang])
                        }}
                      />
                      <span>{lang}</span>
                    </label>
                  )
                })}
              </div>
            )}
          />
          <ErrorText error={errors.languages as any} />
        </div>

        <div>
          <FormLabel>Details</FormLabel>
          <Textarea placeholder="Type of matter, parties, timeline, any special terminology" {...register('details')} />
          <ErrorText error={errors.details} />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Submit request'}
        </Button>
      </form>
    </div>
  )
}
