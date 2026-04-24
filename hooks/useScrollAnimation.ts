"use client"

import { useEffect, useRef } from "react"
import { ScrollTrigger } from "@/lib/gsap"

interface UseScrollAnimationOptions {
  trigger?: string | Element | null
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  once?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

export function useScrollAnimation(
  animation: gsap.core.Tween | gsap.core.Timeline,
  options: UseScrollAnimationOptions = {}
) {
  const {
    trigger,
    start = "top 80%",
    end = "top 20%",
    scrub = false,
    markers = false,
    once = false,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  } = options

  const triggerRef = useRef<Element | null>(null)

  useEffect(() => {
    const element = trigger 
      ? (typeof trigger === "string" ? document.querySelector(trigger) : trigger)
      : triggerRef.current

    if (!element) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      markers,
      once,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
      animation,
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [trigger, start, end, scrub, markers, once, animation, onEnter, onLeave, onEnterBack, onLeaveBack])

  return triggerRef
}

