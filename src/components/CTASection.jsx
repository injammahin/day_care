import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Phone, Sparkles } from "lucide-react"

import { siteConfig } from "@/data/siteData"
import { Button } from "@/components/ui/button"

export default function CTASection({
  title = "Ready to find the right care option for your family?",
  text = "Schedule a tour, ask about availability, or speak with the center about flexible childcare options.",
}) {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#143047] p-8 text-white shadow-[0_28px_80px_rgba(20,48,71,0.14)] md:p-12">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-[#ff865c]/25 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 size-72 rounded-full bg-[#24b8a6]/25 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="section-kicker border-white/15 bg-white/10 text-white">
                <Sparkles size={14} />
                Next Step
              </span>

              <h2 className="font-['Times_New_Roman',Georgia,serif] text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                {title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                {text}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/contact">
                <Button asChild size="lg">
                  <span>
                    Contact the Center
                    <ArrowRight size={17} />
                  </span>
                </Button>
              </Link>

              <a href={siteConfig.phoneHref}>
                <Button variant="secondary" size="lg">
                  <Phone size={17} />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}