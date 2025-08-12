import nodemailer from 'nodemailer'

const from = process.env.MAIL_FROM as string
const to = process.env.MAIL_TO as string

export async function sendMail({ subject, html }:{ subject: string; html: string }) {
  // Option A SMTP
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })
  await transport.sendMail({ from, to, subject, html })
}
