# Navchaitanya Bahuuddeshiya Vikas Yuva Mandal — Website

A Next.js (App Router) website for the NGO, built around its real story: the
summer clay "paanpoi" water-bowl programme for birds, tree plantation, water
conservation, and rural development work out of Shiroli, Yavatmal.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

Nearly all editable text — org details, stats, focus areas, press mentions,
awards, gallery captions, donation tiers — lives in one file:

```
lib/siteData.js
```

Update that file and the whole site updates. Look for `// placeholder`
comments — those are values you should replace with real figures before
launch (phone, email, exact impact numbers).

## Images

All images are in `public/images/`. Add new ones there and reference them
from `lib/siteData.js` (e.g. `/images/your-photo.jpeg`).

## Forms

`components/VolunteerForm.js` and `components/ContactForm.js` currently only
show a confirmation message on submit — they are **not** wired up to send
email or save anywhere yet. Before launch, connect them to an email service
(e.g. Resend, Formspree) or your own API route.

## Donations

The donate section (`app/involved/page.js`) has placeholder text for
UPI/bank/Razorpay — add your real QR code image, bank details and payment
links there.

## Building for production

```bash
npm run build
npm run start
```

## Project structure

```
app/            pages (Home, About, Our Work, Gallery, Get Involved, Contact)
components/     Header, Footer, forms, ArcDivider (signature shape)
lib/siteData.js all editable content
public/images/  photos, press clippings, award certificates
```
