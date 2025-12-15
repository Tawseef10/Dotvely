## Dotvely — Modern Web Agency Landing Page

Dotvely is a modern, high-conversion web agency landing page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS via CDN**.  
It is designed for local businesses and agencies that want a fast, polished marketing site with smooth scrolling, a portfolio section, and a working contact form (via FormSubmit).

### Features

- **Hero section** with animated background, clear primary and secondary CTAs.
- **Sticky navbar** with smooth-scroll navigation between sections.
- **About & Services sections** tailored to local business needs.
- **Portfolio & All Projects views** with responsive cards and hover effects.
- **Contact section** with:
  - Direct call and email links.
  - Address block.
  - Contact form wired to FormSubmit (`DotvelyTY@gmail.com`).
- **Polished visuals** using Tailwind utility classes from the CDN.

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended, e.g. 20.x)
- **npm** (bundled with Node) or **pnpm/yarn** if you prefer.

### Install Dependencies

From the project root:

```bash
npm install
```

### Run the App in Development

```bash
npm run dev
```

Then open the printed local URL (by default `http://localhost:3000`) in your browser.

### Build for Production

```bash
npm run build
```

This will create an optimized static build in the `dist` folder, which you can deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## Deploying / Hosting

Because this is a standard Vite + React app that outputs static files, you can:

- Deploy the `dist` folder to any static host.
- Or connect the GitHub repository to a platform like Vercel/Netlify and let them handle builds automatically.

The Tailwind CDN is configured in `index.html`, so you don’t need an extra build step for Tailwind.

---

## Contact Form Notes

The contact form uses **FormSubmit** to send inquiries to:

- `DotvelyTY@gmail.com`

If you want to change the receiving email, update the endpoint in `components/Contact.tsx`:

- `https://formsubmit.co/ajax/DotvelyTY@gmail.com` → replace with your own FormSubmit address.

---

## GitHub Setup (Overview)

Once this folder is in a Git repository, a typical first-time setup is:

```bash
git init
git add .
git commit -m "Initial commit: Dotvely modern web agency site"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

I can adapt these steps for your exact GitHub repository once you share the URL or repo name.
