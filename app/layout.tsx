import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/favicons/favicon.ico" />
      </head>
      <body className={inter.className}>
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  )
}

