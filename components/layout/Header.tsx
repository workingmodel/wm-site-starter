"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-[var(--pattern-fg)]">
      <div className="ml-12 mr-12 px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="link-highlight">
            <span className="text-xl font-semibold">{siteConfig.name}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="link-highlight text-sm">
                {item.name}
              </Link>
            ))}
            <Link href="/#get-started">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--pattern-fg)] mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="link-highlight text-sm" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/#get-started" className="w-full">
                <Button size="sm" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

