import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anuj Jain - Full-Stack Developer & Future Founder",
  description:
    "Portfolio of Anuj Jain - Building fast, scalable web products and startup ideas. Developer, Founder, Problem Solver.",
  keywords: "Anuj Jain, Full-Stack Developer, React, Next.js, TypeScript, Startup Founder, Web Development",
  authors: [{ name: "Anuj Jain" }],
  openGraph: {
    title: "Anuj Jain - Full-Stack Developer & Future Founder",
    description: "Building fast, scalable web products and startup ideas",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
