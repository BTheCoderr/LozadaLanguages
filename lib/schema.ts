import { z } from 'zod'

export const RequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).optional().or(z.literal('')),
  organization: z.string().optional().or(z.literal('')),
  service: z.enum(['interpreting','translation','training']),
  languages: z.array(z.string()).min(1),
  date: z.string().optional().or(z.literal('')),
  location: z.string().optional().or(z.literal('')),
  details: z.string().min(10),
  honey: z.string().optional() // honeypot
})
export type RequestInput = z.infer<typeof RequestSchema>
