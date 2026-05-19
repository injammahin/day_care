import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ImageTextBlock({
  id,
  eyebrow,
  title,
  text,
  image,
  bullets = [],
  reverse = false,
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14">
      <div
        className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
      >
        <div>
          <img
            src={image}
            alt={title}
            className="h-[430px] w-full rounded-[2.2rem] object-cover shadow-[0_24px_70px_rgba(20,48,71,0.12)]"
          />
        </div>

        <div>
          <Badge variant="teal">{eyebrow}</Badge>

          <h2 className="mt-5 font-['Times_New_Roman',Georgia,serif] text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-[#143047]">
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[#627689]">{text}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-[#24b8a6]"
                />
                <p className="text-sm font-medium leading-6 text-[#43596b]">
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Link to="/contact">
              <Button asChild>
                <span>
                  Ask About This Program
                  <ArrowRight size={16} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}