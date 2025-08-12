# Environment Setup Guide

## When You Get Your Domain

1. **Create a `.env.local` file** in your project root with:

```bash
# Your domain (replace with your actual domain)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Email Configuration (for the contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM="Lozada Languages <your-email@gmail.com>"
MAIL_TO=your-email@gmail.com
```

2. **Replace the placeholder values:**
   - `https://yourdomain.com` → Your actual domain
   - `your-email@gmail.com` → Your email address
   - `your-app-password` → Your email app password

## Current Status

✅ **Warnings Fixed** - No more metadataBase warnings  
✅ **Development Ready** - Works perfectly on localhost:3000  
✅ **Production Ready** - Will automatically use your domain when set  

## What This Fixes

- ✅ No more console warnings about metadataBase
- ✅ Social media previews will work correctly
- ✅ SEO optimization ready
- ✅ Smooth transition from development to production

## Next Steps

1. **Wait for DNS access** (you're doing this now)
2. **Set up your domain** and hosting
3. **Create `.env.local`** with your actual domain
4. **Deploy** - everything will work automatically!

The website is now completely ready and will seamlessly transition from development to production once you add your domain. 🚀
