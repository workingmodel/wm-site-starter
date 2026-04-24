"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface UseGSAPOptions {
  scope?: string
  dependencies?: any[]
  revertOnUpdate?: boolean
}

export function useGSAP(
  callback: (context: gsap.Context) => void | (() => void),
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [] } = options
  const scopeRef = useRef<HTMLElement | null>(null)
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    const element = scope ? scopeRef.current : document.body
    if (!element) return

    const ctx = gsap.context(() => {
      const cleanup = callback(ctx)
      return cleanup
    }, element)

    ctxRef.current = ctx

    return () => {
      ctx.revert()
      ctxRef.current = null
    }
  }, dependencies)

  return scopeRef
}

