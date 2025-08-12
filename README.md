# Lozada Languages, LLC

A modern, professional website for Lozada Languages, LLC - certified interpreting, translation, and interpreter training services for Rhode Island and Massachusetts.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for premium styling with custom brand colors
- **Comprehensive contact form** with service request capabilities
- **Server-side email** via SMTP (configurable)
- **Responsive design** optimized for all devices
- **SEO optimized** with structured metadata

## Brand Colors

- **Primary Navy**: #0A2540
- **Accent Gold**: #F5B700  
- **Neutral Background**: #F8FAFC

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   SMTP_HOST=smtp.zoho.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   MAIL_FROM="Lozada Languages <your-email@gmail.com>"
   MAIL_TO=your-email@gmail.com
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lozadalanguages/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── training/          # Training page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── Button.tsx         # Button component
│   ├── FormField.tsx      # Form field components
│   └── Section.tsx        # Section layout component
├── lib/                    # Utility functions
│   ├── email.ts           # Email functionality
│   └── schema.ts          # Form validation schema
├── public/                 # Static assets
│   └── logo.svg           # Company logo
└── styles/                 # Global styles
    └── globals.css        # Tailwind + custom CSS
```

## Form Features

The contact form includes:
- **Service selection** (Interpreting, Translation, Training)
- **Language selection** with checkboxes
- **Comprehensive fields** for all necessary information
- **Form validation** using Zod schema
- **Honeypot protection** against spam
- **Server-side processing** with email delivery

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

## Email Configuration

The site uses **nodemailer** for server-side email delivery. You can configure:

- **SMTP providers** (Gmail, Zoho, SendGrid, etc.)
- **Email templates** in the API route
- **Recipient addresses** via environment variables

## Customization

- **Colors**: Update `tailwind.config.ts` brand colors
- **Content**: Modify page content in respective `.tsx` files
- **Styling**: Adjust Tailwind classes or add custom CSS
- **Form fields**: Update schema and form components as needed

## Support

For questions or customization requests, contact the development team.

---

Built with Next.js, Tailwind CSS, and TypeScript for Lozada Languages, LLC.
