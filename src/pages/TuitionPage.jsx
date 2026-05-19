import React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  Mail,
} from "lucide-react"

import CTASection from "@/components/CTASection"
import PageHero from "@/components/PageHero"
import Seo from "@/components/Seo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { seoPages, siteConfig } from "@/data/siteData"

const tuitionSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tuition and Child Care Assistance",
  url: `${siteConfig.baseUrl}/tuition`,
  description: seoPages.tuition.description,
  about: [
    "Daycare tuition in Kemah TX",
    "Child care assistance",
    "Flexible childcare schedule",
    "NCI accepted daycare inquiry",
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tuition",
      item: `${siteConfig.baseUrl}/tuition`,
    },
  ],
}

export default function TuitionPage() {
  return (
    <>
      <Seo {...seoPages.tuition} schema={[tuitionSchema, breadcrumbSchema]} />

      <PageHero
        eyebrow="Tuition & Assistance"
        title="Tuition details based on your child and schedule."
        description="Request tuition information based on age group, care schedule, start date, flexible care needs, and availability."
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85"
        ctaLabel="Request Tuition Details"
      />

      <section className="section-pad">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="section-kicker">
              <Mail size={15} />
              How Tuition Works
            </span>

            <h2 className="section-title">
              Pricing should be confirmed through a parent inquiry.
            </h2>

            <p className="section-lead">
              This page intentionally does not publish prices because childcare
              rates may depend on age, schedule, availability, flexible care
              type, start date, and final client approval.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Full-time, part-time, flexible, and drop-in care may have different pricing.",
                "Infant, toddler, Pre-K, school-age, and summer programs may have different rates.",
                "Evening, overnight, and weekend care should be confirmed based on availability.",
                "NCI or child care assistance wording should be finalized by the client.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-3xl bg-white p-4 shadow-[0_14px_45px_rgba(20,48,71,0.06)]"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#24b8a6]"
                  />
                  <p className="text-sm font-medium leading-7 text-[#43596b]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-[#143047] to-[#1b5660] p-7 text-white">
              <Badge className="border-white/20 bg-white/10 text-white">
                Tuition Inquiry
              </Badge>

              <h3 className="heading-font mt-4 text-3xl text-white">
                Request pricing and availability.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Use the contact page to collect all required information
                clearly and safely.
              </p>
            </div>

            <div className="grid gap-4 p-7">
              {[
                {
                  icon: CalendarCheck,
                  title: "Care Schedule",
                  text: "Full-time, part-time, drop-in, weekend, evening, or overnight care.",
                },
                {
                  icon: HelpCircle,
                  title: "Child Age",
                  text: "Age group affects program placement and pricing.",
                },
                {
                  icon: CreditCard,
                  title: "Payment Portal",
                  text: "MyProcare link should be added when the final URL is confirmed.",
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-[#fffaf4] p-4"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-[#ff865c]">
                      <Icon size={21} />
                    </span>

                    <div>
                      <p className="font-semibold text-[#143047]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#627689]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}

              <Link to="/contact">
                <Button asChild className="w-full" size="lg">
                  <span>
                    Continue to Contact Form
                    <ArrowRight size={17} />
                  </span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">
              <CheckCircle2 size={15} />
              Parent-Friendly Tuition Page
            </span>

            <h2 className="section-title mx-auto">
              What parents should know before asking for tuition.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Rates May Vary",
                text: "Pricing may depend on program, age, schedule, and availability.",
              },
              {
                title: "Assistance May Apply",
                text: "NCI or child care assistance wording should be verified before final launch.",
              },
              {
                title: "Simple Next Step",
                text: "Parents should submit a contact form or call to request accurate details.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-7">
                <h3 className="heading-font text-2xl text-[#143047]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#627689]">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need tuition details for your child?"
        text="Contact the center with your child's age, schedule need, preferred start date, and care type."
      />
    </>
  )
}