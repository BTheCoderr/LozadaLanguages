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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) setSent(true)
    } catch (error) {
      console.error('Failed to send:', error)
    }
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="bg-gradient-accent p-8 rounded-lg text-white">
          <h1 className="text-3xl font-semibold mb-4">Thank you!</h1>
          <p className="text-lg">We've received your request and will get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-brand-dark-blue mb-4">Request Our Services</h1>
        <p className="text-xl text-gray-600">Tell us about your language access needs</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input type="text" name="honey" className="hidden" {...register('honey')} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <FormLabel>Name *</FormLabel>
            <Input {...register('name')} placeholder="Your full name" />
            <ErrorText error={errors.name} />
          </div>
          <div>
            <FormLabel>Email *</FormLabel>
            <Input {...register('email')} type="email" placeholder="your@email.com" />
            <ErrorText error={errors.email} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <FormLabel>Phone</FormLabel>
            <Input {...register('phone')} placeholder="(555) 123-4567" />
            <ErrorText error={errors.phone} />
          </div>
          <div>
            <FormLabel>Organization</FormLabel>
            <Input {...register('organization')} placeholder="Company or organization" />
            <ErrorText error={errors.organization} />
          </div>
        </div>

        <div>
          <FormLabel>Service Type *</FormLabel>
          <div className="grid md:grid-cols-3 gap-4 mt-2">
            {['interpreting', 'translation', 'training'].map(service => (
              <label key={service} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value={service}
                  {...register('service')}
                  className="text-brand-orange focus:ring-brand-orange"
                />
                <span className="capitalize">{service}</span>
              </label>
            ))}
          </div>
          <ErrorText error={errors.service} />
        </div>

        <div>
          <FormLabel>Languages *</FormLabel>
          <div className="grid md:grid-cols-3 gap-3 mt-2">
            {LANGUAGE_OPTIONS.map(lang => (
              <label key={lang} className="flex items-center space-x-2 cursor-pointer">
                <Controller
                  name="languages"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      value={lang}
                      checked={field.value.includes(lang)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([...field.value, lang])
                        } else {
                          field.onChange(field.value.filter((l: string) => l !== lang))
                        }
                      }}
                      className="text-brand-orange focus:ring-brand-orange"
                    />
                  )}
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>
          <ErrorText error={errors.languages} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <FormLabel>Preferred Date</FormLabel>
            <Input {...register('date')} type="date" />
            <ErrorText error={errors.date} />
          </div>
          <div>
            <FormLabel>Location</FormLabel>
            <Input {...register('location')} placeholder="City, State or specific address" />
            <ErrorText error={errors.location} />
          </div>
        </div>

        <div>
          <FormLabel>Project Details *</FormLabel>
          <Textarea
            {...register('details')}
            placeholder="Please describe your specific needs, including any special requirements, context, or questions you have..."
          />
          <ErrorText error={errors.details} />
        </div>

        <div className="text-center">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  )
}
