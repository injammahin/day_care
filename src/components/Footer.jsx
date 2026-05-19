import React from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone, Sparkles } from "lucide-react"

import { navItems, programs, siteConfig } from "@/data/siteData"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#0d273a] py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#ff9a6c] to-[#24b8a6] text-white">
                <Sparkles size={24} />
              </span>

              <div>
                <p className="font-['Times_New_Roman',Georgia,serif] text-xl font-semibold tracking-[-0.03em]">
                  {siteConfig.shortName}
                </p>
                <p className="text-sm font-medium text-white/60">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              A family-owned childcare and learning center in Kemah, TX serving
              children from 6 weeks to 12 years with flexible care options.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.phoneHref}>
                <Button variant="secondary">
                  <Phone size={16} />
                  Call Now
                </Button>
              </a>

              <Link to="/contact">
                <Button asChild>
                  <span>Schedule a Tour</span>
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-4 font-semibold">Quick Links</p>
            <div className="space-y-3 text-sm font-medium text-white/65">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} className="block">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-semibold">Programs</p>
            <div className="space-y-3 text-sm font-medium text-white/65">
              {programs.slice(0, 6).map((program) => (
                <Link
                  key={program.id}
                  to={`/programs#${program.id}`}
                  className="block"
                >
                  {program.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-semibold">Contact</p>

            <div className="space-y-4 text-sm font-medium leading-6 text-white/65">
              <p className="flex gap-2">
                <MapPin size={17} className="mt-1 shrink-0 text-[#ff865c]" />
                {siteConfig.address}
              </p>

              <a href={siteConfig.phoneHref} className="flex gap-2">
                <Phone size={17} className="mt-1 shrink-0 text-[#24b8a6]" />
                {siteConfig.phone}
              </a>

              <p>Email: {siteConfig.email}</p>
              <p>Exact hours to be confirmed by client.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm font-medium text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/accessibility">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}