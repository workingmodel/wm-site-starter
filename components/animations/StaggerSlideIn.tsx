"use client"

import { ReactNode, useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface StaggerSlideInProps {
  children: ReactNode[]
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  stagger?: number
  className?: string
}

export function StaggerSlideIn({ 
  children, 
  direction = "up", 
  delay = 0,
  stagger = 0.1,
  className = "" 
}: StaggerSlideInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.registerPlugin(ScrollTrigger)

    const items = Array.from(element.children)

    // Set initial position based on direction
    const initialPosition: Record<string, { x?: number; y?: number; opacity: number }> = {
      left: { x: -50, opacity: 0 },
      right: { x: 50, opacity: 0 },
      up: { y: 50, opacity: 0 },
      down: { y: -50, opacity: 0 },
    }

    const animation = gsap.fromTo(
      items,
      initialPosition[direction],
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        stagger,
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
  }, [direction, delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

