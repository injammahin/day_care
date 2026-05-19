import React from "react"
import { BookOpen } from "lucide-react"

import CTASection from "@/components/CTASection"
import ImageTextBlock from "@/components/ImageTextBlock"
import PageHero from "@/components/PageHero"
import Seo from "@/components/Seo"

import { programs, seoPages, siteConfig } from "@/data/siteData"

const programsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Childcare Programs",
  url: `${siteConfig.baseUrl}/programs`,
  description: seoPages.programs.description,
  hasPart: programs.map((program) => ({
    "@type": "Service",
    name: program.seoTitle,
    description: program.summary,
    provider: {
      "@type": "ChildCare",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "City",
      name: "Kemah",
    },
  })),
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
      name: "Programs",
      item: `${siteConfig.baseUrl}/programs`,
    },
  ],
}

export default function ProgramsPage() {
  return (
    <>
      <Seo {...seoPages.programs} schema={[programsSchema, breadcrumbSchema]} />

      <PageHero
        eyebrow="Programs"
        title="Childcare programs for every age and schedule."
        description="Explore infant care, toddler care, Pre-K, school-age care, summer camp, and flexible drop-in childcare options in Kemah, TX."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=85"
      />

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">
              <BookOpen size={15} />
              Program Details
            </span>

            <h2 className="section-title mx-auto">
              Every program has a clear purpose and parent-friendly next step.
            </h2>

            <p className="section-lead mx-auto">
              This page uses alternating left-image and right-text sections so
              each program feels unique, easy to scan, and more professional
              than simple cards.
            </p>
          </div>

          <div className="mt-10">
            {programs.map((program, index) => (
              <ImageTextBlock
                key={program.id}
                id={program.id}
                eyebrow={program.age}
                title={program.title}
                text={program.longText}
                image={program.image}
                bullets={program.bullets}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which program fits your child?"
        text="Contact the center and share your child's age, schedule need, preferred start date, and care expectations."
      />
    </>
  )
}