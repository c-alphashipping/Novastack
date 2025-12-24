import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Chatbot } from "@/components/chatbot"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NovaStack - AI-Integrated Website Development | High-Converting Websites",
  description:
    "Professional AI-integrated website development by NovaStack. From simple landing pages to large AI-powered platforms — built for speed, scale, and results.",
  keywords: [
    "AI websites",
    "web development",
    "AI integration",
    "chatbots",
    "automation",
    "SEO",
    "Next.js",
    "NovaStack",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        <ScrollProgress />
        <Header />
        <div className="pt-16">{children}</div>
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
