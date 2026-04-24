"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main-content" className="relative z-10 ml-12 mr-12 min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <p className="text-sm text-muted-foreground mb-4">Error</p>
        <h2 className="text-4xl md:text-6xl font-headline mb-6">Something went wrong</h2>
        <p className="text-base md:text-lg font-body text-muted-foreground mb-12 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="link-highlight text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
