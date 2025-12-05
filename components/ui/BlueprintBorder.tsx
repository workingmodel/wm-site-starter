import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"

interface BlueprintBorderProps {
  children: ReactNode
  className?: string
}

export const BlueprintBorder = forwardRef<HTMLDivElement, BlueprintBorderProps>(
  ({ children, className = "" }, ref) => {
    return (
      <div ref={ref} className={cn("blueprint-border", className)}>
        <div className="blueprint-corner blueprint-corner-top-left-v"></div>
        <div className="blueprint-corner blueprint-corner-top-left-h"></div>
        <div className="blueprint-corner blueprint-corner-top-right-v"></div>
        <div className="blueprint-corner blueprint-corner-top-right-h"></div>
        <div className="blueprint-corner blueprint-corner-bottom-left-v"></div>
        <div className="blueprint-corner blueprint-corner-bottom-left-h"></div>
        <div className="blueprint-corner blueprint-corner-bottom-right-v"></div>
        <div className="blueprint-corner blueprint-corner-bottom-right-h"></div>
        {children}
      </div>
    )
  }
)

BlueprintBorder.displayName = "BlueprintBorder"

