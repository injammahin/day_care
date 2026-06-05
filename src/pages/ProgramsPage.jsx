import React from "react"
import { BookOpen } from "lucide-react"

import CTASection from "@/components/CTASection"
import ImageTextBlock from "@/components/ImageTextBlock"
import PageHero from "@/components/PageHero"
import Seo from "@/components/Seo"

import overnightCareImg from "@/assets/img/Overnight-Care.webp"
import kindergartenImg from "@/assets/img/Kindergarten Readiness Academy.webp"
import homeschoolImg from "@/assets/img/Homeschool-Enrichment.webp"
import dropInCareImg from "@/assets/img/Drop-In-Care.webp"

import { seoPages, siteConfig } from "@/data/siteData"

const pagePrograms = [
  {
    id: "overnight-care",
    age: "Ages 6 Months-12 Years",
    title: "Overnight Care",
    summary:
      "Safe, nurturing overnight care for infants, toddlers, preschoolers, and school-age children.",
    longText:
      "Flexible Learning Solutions offers safe, nurturing overnight care for infants, toddlers, preschoolers, and school-age children. Whether parents work night shifts, extended hours, or simply need dependable care, children enjoy a comforting evening routine, supervised sleep, and a calm, home-like environment.",
    image: overnightCareImg,
    bullets: [
      "Designed for families who need evening or overnight childcare support.",
      "Children enjoy a calm, home-like environment with supervised rest.",
      "Helpful for night shifts, extended work hours, or dependable backup care.",
    ],
  },
  {
    id: "kindergarten-readiness",
    age: "Designed for 5-Year-Olds",
    title: "Kindergarten Readiness Academy",
    summary:
      "A focused readiness program for children preparing for kindergarten success.",
    longText:
      "Our Kindergarten Readiness Academy is ideal for children who missed the kindergarten cutoff date or would benefit from an additional year in a smaller, more personalized learning environment. Through hands-on instruction, children build confidence in early reading, writing, math, and social-emotional skills to ensure they are fully prepared for kindergarten success.",
    image: kindergartenImg,
    bullets: [
      "Supports early reading, writing, math, and classroom readiness.",
      "Ideal for children who missed the kindergarten cutoff date.",
      "Smaller, more personalized learning environment for confidence building.",
    ],
  },
  {
    id: "homeschool-enrichment",
    age: "For Homeschool Families",
    title: "Homeschool Enrichment Program",
    summary:
      "A welcoming learning space for homeschool children to explore, create, and grow.",
    longText:
      "Our Homeschool Support Program provides a welcoming and engaging learning space where children can explore, create, and grow alongside peers. Guided by experienced educators, students participate in hands-on activities that encourage curiosity, creativity, and individualized learning.",
    image: homeschoolImg,
    bullets: [
      "Provides a structured enrichment option for homeschool families.",
      "Encourages curiosity, creativity, and hands-on learning.",
      "Gives children the opportunity to learn and socialize with peers.",
    ],
  },
  {
    id: "drop-in-care",
    age: "Flexible Care When You Need It Most",
    title: "Drop-In Care",
    summary:
      "Flexible childcare support for unexpected appointments, errands, or changing schedules.",
    longText:
      "Life does not always follow a schedule. Our drop-in care option offers families convenient, high-quality childcare on an as-needed basis, providing peace of mind whenever unexpected appointments, errands, or work commitments arise.",
    image: dropInCareImg,
    bullets: [
      "Convenient childcare for unexpected schedule changes.",
      "Helpful for appointments, errands, work needs, or backup care.",
      "Available as an as-needed option based on center availability.",
    ],
  },
]

const programsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Childcare Programs",
  url: `${siteConfig.baseUrl}/programs`,
  description: seoPages.programs.description,
  hasPart: pagePrograms.map((program) => ({
    "@type": "Service",
    name: program.title,
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
        description="Explore overnight care, kindergarten readiness, homeschool enrichment, and flexible drop-in childcare options in Kemah, TX."
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
              Explore care options designed for overnight support, school
              readiness, homeschool enrichment, and flexible drop-in needs.
            </p>
          </div>

          <div className="mt-10">
            {pagePrograms.map((program, index) => (
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