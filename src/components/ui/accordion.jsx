import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items = [], className }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-[#e8efe9] bg-white shadow-[0_16px_50px_rgba(20,48,71,0.06)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold tracking-[-0.02em] text-[#143047]">
                {item.question}
              </span>

              <span
                className={cn(
                  "grid size-9 shrink-0 place-items-center rounded-full bg-[#fff4ec] text-[#ff865c] transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              >
                <ChevronDown size={18} />
              </span>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-[#627689]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}