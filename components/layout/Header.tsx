"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-[var(--pattern-fg)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-16 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="ml-12 mr-12 px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/imgs/wm-logo-blk.svg"
              alt="Working Model"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold link-highlight">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="link-highlight text-sm">
                {item.name}
              </Link>
            ))}
            <Link href={siteConfig.cta.href}>
              <Button size="sm">{siteConfig.cta.label}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
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
              <Link href={siteConfig.cta.href} className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full">{siteConfig.cta.label}</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
