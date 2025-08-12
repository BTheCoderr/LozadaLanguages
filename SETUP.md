# Setup Guide

## Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```bash
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=lozadalanguages@gmail.com
SMTP_PASS=your_app_password
MAIL_FROM="Lozada Languages <lozadalanguages@gmail.com>"
MAIL_TO=lozadalanguages@gmail.com
```

## Email Provider Options

### Option 1: Gmail
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Option 2: Zoho
```bash
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=your-email@zoho.com
SMTP_PASS=your-app-password
```

### Option 3: SendGrid
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## Getting App Passwords

- **Gmail**: Enable 2FA, then generate app password
- **Zoho**: Enable 2FA, then generate app password  
- **SendGrid**: Use API key as password

## Testing the Form

1. Start the dev server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the submission
5. Check the terminal for any errors
