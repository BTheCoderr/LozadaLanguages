import { RequestSchema } from '@/lib/schema'
import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = RequestSchema.parse(body)

    const subject = `New request: ${data.service} — ${data.name}`
    const html = `
      <h2>New service request</h2>
      <p><b>Name</b> ${data.name}</p>
      <p><b>Email</b> ${data.email}</p>
      <p><b>Phone</b> ${data.phone || ''}</p>
      <p><b>Organization</b> ${data.organization || ''}</p>
      <p><b>Service</b> ${data.service}</p>
      <p><b>Languages</b> ${data.languages.join(', ')}</p>
      <p><b>Date</b> ${data.date || ''}</p>
      <p><b>Location</b> ${data.location || ''}</p>
      <p><b>Details</b></p>
      <pre>${data.details}</pre>
    `
    await sendMail({ subject, html })
    return NextResponse.json({ ok: true })
  } catch (e:any) {
    console.error(e)
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 })
  }
}
