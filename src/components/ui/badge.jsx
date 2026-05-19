import React from "react"
import { cn } from "@/lib/utils"

const variants = {
  default: "bg-[#fff1e8] text-[#c65425] border-[#ffd7c4]",
  teal: "bg-[#e8fffb] text-[#08796f] border-[#b8f1e8]",
  blue: "bg-[#eaf6ff] text-[#186493] border-[#c8e9ff]",
  purple: "bg-[#f4efff] text-[#7352b6] border-[#e1d5ff]",
}

export function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em]",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}