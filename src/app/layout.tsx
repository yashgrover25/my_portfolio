import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/sections/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Yash Grover — Software Developer",
    template: "%s | Yash Grover",
  },
  description:
    "Portfolio of Yash Grover — software developer specializing in Flutter, React, Next.js, and AI/LLM integrations. Building production-grade apps with clean architecture.",
  keywords: [
    "Yash Grover",
    "software developer",
    "Flutter developer",
    "React developer",
    "Next.js",
    "portfolio",
    "AI engineer",
    "LLM",
    "full stack developer",
  ],
  authors: [{ name: "Yash Grover" }],
  creator: "Yash Grover",
  metadataBase: new URL("https://yashgroverportfolio.vercel.app"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yash Grover — Software Developer",
    description:
      "Software developer specializing in Flutter, React, Next.js, and AI/LLM integrations.",
    siteName: "Yash Grover Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Grover — Software Developer",
    description:
      "Software developer specializing in Flutter, React, Next.js, and AI/LLM integrations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-text-primary antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
