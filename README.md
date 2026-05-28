# Yash Grover — Portfolio

Personal portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3B82F6?style=flat&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-818CF8?style=flat&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=flat&logo=vercel)

## 🔗 Live

**[yashgroverportfolio.vercel.app](https://yashgroverportfolio.vercel.app)**

---

## ✨ Features

- Fully responsive — mobile-first design
- Smooth scroll animations with Framer Motion
- Working contact form via Resend API
- Type-safe data layer — all resume data in `src/data/index.ts`
- Zod-validated API route for form submissions
- Dark theme with custom Tailwind v4 `@theme` color tokens

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   ← email API route
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── sections/              ← Navbar, Hero, About, Skills,
│                                 Projects, Experience, Contact
└── data/
    └── index.ts               ← all resume data + TypeScript types
```

---

## 🧠 What I learned building this

- **Next.js App Router** — understanding Server vs Client Components
  and when to use `"use client"`
- **Tailwind CSS v4** — using the new `@theme` block instead of
  `tailwind.config.ts` for custom design tokens
- **Route Handlers** — building a lightweight backend endpoint
  with Zod validation for the contact form
- **Framer Motion** — `whileInView` scroll animations and
  per-item stagger effects
- **TypeScript** — discriminated unions (`"live" | "wip" | "archived"`)
  and utility types for component props

---

## 📬 Contact

**Email:** ygrover178@gmail.com
**LinkedIn:** [yash-grover17](https://linkedin.com/in/yash-grover17)
**GitHub:** [yashgrover25](https://github.com/yashgrover25)