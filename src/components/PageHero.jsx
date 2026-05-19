import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "Schedule a Tour",
  ctaHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf4] pt-36 lg:pt-40">
      {/* <div className="absolute left-[-8rem] top-24 size-72 rounded-full bg-[#ffd6c2] blur-3xl" /> */}
      {/* <div className="absolute right-[-10rem] top-28 size-96 rounded-full bg-[#b7f3ea] blur-3xl" /> */}

      <div className="section-shell relative z-10 grid gap-10 pb-20 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="section-kicker">
            <Sparkles size={14} />
            {eyebrow}
          </span>

          <h1 className="page-title">{title}</h1>

          <p className="section-lead">{description}</p>

          <div className="mt-7">
            <Link to={ctaHref}>
              <Button asChild size="lg">
                <span>
                  {ctaLabel}
                  <ArrowRight size={17} />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-[460px] w-full rounded-[1.2rem] object-cover shadow-[0_26px_80px_rgba(20,48,71,0.14)]"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] bg-white/90 p-5 backdrop-blur-md">
            <p className="font-['Times_New_Roman',Georgia,serif] text-2xl font-semibold tracking-[-0.04em] text-[#143047]">
              Warm, flexible, family-focused care.
            </p>
            <p className="mt-2 text-sm leading-7 text-[#627689]">
              Built for parents who need clarity, trust, and simple next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}