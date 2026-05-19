import React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/80 bg-white shadow-[0_22px_70px_rgba(20,48,71,0.08)]",
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("p-6 pb-3", className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn(
        "font-['Times_New_Roman',Georgia,serif] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#143047]",
        className
      )}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("mt-2 text-sm leading-7 text-[#627689]", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6 pt-3", className)} {...props} />
}