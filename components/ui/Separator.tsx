import { cn } from "@/lib/utils"

interface SeparatorProps {
  className?: string
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div 
      className={cn(
        "w-full h-12 border-y border-y-[var(--pattern-fg)] separator-pattern",
        className
      )}
    />
  )
}

