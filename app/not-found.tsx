import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function NotFound() {
  return (
    <main id="main-content" className="relative z-10 ml-12 mr-12 min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <p className="text-sm text-muted-foreground mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-headline mb-6">Page not found</h1>
        <p className="text-base md:text-lg font-body text-muted-foreground mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="link-highlight text-sm font-medium"
        >
          Back to {siteConfig.name}
        </Link>
      </div>
    </main>
  )
}
