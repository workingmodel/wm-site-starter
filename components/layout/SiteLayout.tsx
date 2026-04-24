import { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

