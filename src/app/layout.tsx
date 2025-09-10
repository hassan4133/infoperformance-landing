import type React from "react"
import type { Metadata } from "next"
import { Rajdhani } from "next/font/google"
import "./globals.css"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Infoperformance - Pay Per Call Marketing",
  description: "Accelerate your Company's Pay Per Call advertising with Infoperformance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} font-rajdhani`}>
      <body className="antialiased overflow-x-hidden"
      cz-shortcut-listen="true">{children}</body>
    </html>
  )
}
