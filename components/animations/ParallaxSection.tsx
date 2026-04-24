"use client"

import { ReactNode, useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = "" 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.registerPlugin(ScrollTrigger)

    const animation = gsap.to(element, {
      y: (_i, _el) => {
        return -(window.innerHeight * speed)
      },
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
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

