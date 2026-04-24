'use client'

import { ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface StaggerSlideInProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
  delay?: number
  stagger?: number
  className?: string
}

const initialPositions = {
  left: (d: number) => ({ x: -d, opacity: 0 }),
  right: (d: number) => ({ x: d, opacity: 0 }),
  up: (d: number) => ({ y: d, opacity: 0 }),
  down: (d: number) => ({ y: -d, opacity: 0 }),
}

export function StaggerSlideIn({
  children,
  direction = 'up',
  distance = 50,
  delay = 0,
  stagger = 0.1,
  className = '',
}: StaggerSlideInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const items = Array.from(ref.current?.children ?? [])
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(items, initialPositions[direction](distance), {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            stagger,
            ease: 'power3.out',
          })
        },
        once: true,
      })
      return () => trigger.kill()
    },
    { scope: ref, dependencies: [direction, distance, delay, stagger] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
