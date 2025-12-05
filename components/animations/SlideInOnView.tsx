"use client"

import { ReactNode, useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface SlideInOnViewProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
  distance?: number
}

export function SlideInOnView({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "",
  distance = 50
}: SlideInOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.registerPlugin(ScrollTrigger)

    // Set initial position based on direction
    const initialPosition: Record<string, { x?: number; y?: number; opacity: number }> = {
      left: { x: -distance, opacity: 0 },
      right: { x: distance, opacity: 0 },
      up: { y: distance, opacity: 0 },
      down: { y: -distance, opacity: 0 },
    }

    const animation = gsap.fromTo(
      element,
      initialPosition[direction],
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [direction, delay, distance])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

