"use client"

import { ReactNode, useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface ParallaxTextProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxText({ 
  children, 
  speed = 0.3,
  className = "" 
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.registerPlugin(ScrollTrigger)

    const animation = gsap.to(element, {
      y: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element.parentElement) {
          trigger.kill()
        }
      })
    }
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

