import React from "react"
import { cn } from "@/lib/utils"

const variants = {
  default:
    "bg-[#ff865c] text-white shadow-[0_12px_28px_rgba(255,134,92,0.24)] hover:bg-[#f17449]",
  secondary:
    "bg-white text-[#143047] shadow-[0_12px_30px_rgba(20,48,71,0.1)] hover:bg-[#fff7f1]",
  outline:
    "border border-[#ffd7c5] bg-white text-[#143047] hover:bg-[#fff7f1]",
  ghost: "bg-transparent text-[#143047] hover:bg-[#fff4ec]",
  teal:
    "bg-[#24b8a6] text-white shadow-[0_12px_28px_rgba(36,184,166,0.22)] hover:bg-[#179d8e]",
}

const sizes = {
  default: "h-10 px-4 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
  icon: "h-10 w-10",
}

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}) {
  const Comp = asChild ? "span" : "button"

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ffb899]/35 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}