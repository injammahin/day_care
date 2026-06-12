import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import overnightCareImg from "@/assets/img/Overnight-Care.webp"
import Kindergarten from "@/assets/img/Kindergarten Readiness Academy.webp"
import Homeschool from "@/assets/img/Homeschool-Enrichment.webp"
import DropInCare from "@/assets/img/Drop-In-Care.webp"
import Seo from "@/components/Seo"
import CTASection from "@/components/CTASection"
import { Accordion } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  faqs,
  flexibleOptions,
  galleryImages,
  heroSlides,
  programs,
  safetyItems,
  seoPages,
  siteConfig,
  trustItems,
} from "@/data/siteData"

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [])
}

const childcareSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  telephone: `+1-${siteConfig.phone}`,
  description:
    "A family-owned childcare and learning center in Kemah, Texas serving children from 6 weeks to 12 years with flexible care options.",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.zip,
    addressCountry: siteConfig.country,
  },
  areaServed: ["Kemah TX", "Clear Lake TX", "League City TX", "Seabrook TX"],
  serviceType: programs.map((program) => program.title),
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  useRevealOnScroll()

  return (
    <>
      <Seo {...seoPages.home} schema={[childcareSchema, websiteSchema, faqSchema]} />

      <Hero />
      <ProgramsPreview />
      <FlexibleCarePreview />
      <TrustSafetyPreview />
      <ParentToolsPreview />
      <GalleryPreview />
      <FaqPreview />
      <CTASection />
    </>
  )
}

function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[active]

  return (
    <section className="relative min-h-screen overflow-hidden pt-36 lg:pt-40">
      {/* <div className="absolute left-[-8rem] top-28 size-72 rounded-full bg-[#ffd6c2] blur-3xl" />
      <div className="absolute right-[-10rem] top-36 size-96 rounded-full bg-[#b7f3ea] blur-3xl" /> */}

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-9rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <Badge variant="teal" className="mb-5">
            <Sparkles size={13} />
            Family-Owned Childcare Center
          </Badge>

          <h1 className="display-title">
            Flexible childcare for{" "}
            <span className="gradient-text">modern family life.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#627689]">
            Flexible Learning and Care Solutions provides dependable childcare
            and learning programs in Kemah, TX for children ages 6 weeks to 12
            years, including flexible care options for real family schedules.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <span>
                  Schedule a Tour
                  <ArrowRight size={17} />
                </span>
              </Button>
            </Link>

            <Link to="/programs#flexible-care">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>
                  Ask About Flexible Care
                  <MessageCircle size={17} />
                </span>
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["6mo-12y", "Age Range"],
              ["7 Days", "Support"],
              ["Drop-In", "Option"],
              ["NCI", "Accepted"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_14px_46px_rgba(20,48,71,0.07)]"
              >
                <p className="heading-font text-2xl text-[#143047]">{value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7a8d9a]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -left-4 top-12 z-20 hidden rounded-[1.5rem] bg-white p-4 shadow-[0_16px_50px_rgba(20,48,71,0.12)] md:block float-soft">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#fff4ec] text-[#ff865c]">
                <HeartHandshake size={21} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#143047]">
                  Parent-Friendly Care
                </p>
                <p className="text-xs font-medium text-[#7a8d9a]">
                  Clear communication
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border-[9px] border-white bg-white shadow-[0_26px_80px_rgba(20,48,71,0.16)]">
            <img
              key={slide.image}
              src={slide.image}
              alt="Overnight care program for toddlers at daycare in Kemah TX"
              className="banner-fade h-[570px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#143047]/45 via-transparent to-transparent" />

            {/* <div className="absolute inset-x-5 bottom-5 rounded-[1.8rem] bg-white/90 p-5 shadow-[0_16px_50px_rgba(20,48,71,0.15)] backdrop-blur-xl">
              <Badge variant="blue" className="mb-3">
                {slide.eyebrow}
              </Badge>

              <h2 className="heading-font text-2xl leading-tight text-[#143047]">
                {slide.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#627689]">
                {slide.text}
              </p>

              <div className="mt-4 flex gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`h-2.5 rounded-full transition-all ${active === index
                      ? "w-8 bg-[#ff865c]"
                      : "w-2.5 bg-[#dbe5e8]"
                      }`}
                    aria-label={`Show banner ${index + 1}`}
                  />
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <TrustStrip />
    </section>
  )
}

function TrustStrip() {
  const items = [...trustItems, ...trustItems]

  return (
    <div className="relative z-10 overflow-hidden border-y border-[#ffe1d2] bg-white/80 py-4 backdrop-blur-md">
      <div className="marquee-track flex w-max items-center gap-4">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 rounded-full bg-[#fff4ec] px-5 py-3 text-sm font-semibold text-[#143047]"
          >
            <CheckCircle2 size={17} className="text-[#24b8a6]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgramsPreview() {
  const homePrograms = [
    {
      id: "overnight-care",
      title: "Overnight Care",
      subtitle: "Ages 6 Months-12 Years",
      description:
        "Flexible Learning Solutions offers safe, nurturing overnight care for infants, toddlers, preschoolers, and school-age children. Whether parents work night shifts, extended hours, or simply need dependable care, children enjoy a comforting evening routine, supervised sleep, and a calm, home-like environment.",
      image: overnightCareImg,
      icon: HeartHandshake,
      badge: "Evening & Overnight Support",
    },
    {
      id: "kindergarten-readiness",
      title: "Kindergarten Readiness Academy",
      subtitle: "Designed for 5-Year-Olds",
      description:
        "Our Kindergarten Readiness Academy is ideal for children who missed the kindergarten cutoff date or would benefit from an additional year in a smaller, more personalized learning environment. Through hands-on instruction, children build confidence in early reading, writing, math, and social-emotional skills to ensure they are fully prepared for kindergarten success.",
      image: Kindergarten,
      icon: BookOpen,
      badge: "Early Learning Preparation",
    },
    {
      id: "homeschool-enrichment",
      title: "Homeschool Enrichment Program",
      subtitle: "For Homeschool Families",
      description:
        "Our Homeschool Support Program provides a welcoming and engaging learning space where children can explore, create, and grow alongside peers. Guided by experienced educators, students participate in hands-on activities that encourage curiosity, creativity, and individualized learning.",
      image: Homeschool,
      icon: Sparkles,
      badge: "Creative Learning Space",
    },
    {
      id: "drop-in-care",
      title: "Drop-In Care",
      subtitle: "Flexible Care When You Need It Most",
      description:
        "Life does not always follow a schedule. Our drop-in care option offers families convenient, high-quality childcare on an as-needed basis, providing peace of mind whenever unexpected appointments, errands, or work commitments arise.",
      image: DropInCare,
      icon: CalendarCheck,
      badge: "As-Needed Childcare",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#fffaf4] py-20 lg:py-28">
      <div className="pointer-events-none absolute left-[-8rem] top-12 size-72 rounded-full bg-[#b7f3ea]/45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-9rem] top-32 size-80 rounded-full bg-[#ffd6c2]/55 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-9rem] left-1/2 size-96 -translate-x-1/2 rounded-full bg-[#fff0d8]/70 blur-3xl" />

      <div className="section-shell relative z-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="section-kicker mx-auto">
            <BookOpen size={15} />
            Our Programs
          </span>

          <h2 className="section-title mx-auto mt-5">
            Clear programs for every stage of childhood.
          </h2>

          <p className="section-lead mx-auto">
            Supportive care options for overnight needs, kindergarten readiness,
            homeschool enrichment, and flexible drop-in childcare.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.6rem] border border-[#ffe1d2] bg-white/80 shadow-[0_24px_80px_rgba(20,48,71,0.08)] backdrop-blur-xl">
          {homePrograms.map((program, index) => {
            const Icon = program.icon
            const isReverse = index % 2 === 1

            return (
              <div
                key={program.id}
                className="reveal border-b border-[#e9eeee] p-5 last:border-b-0 md:p-7 lg:p-8"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div
                    className={`group relative h-[320px] overflow-hidden rounded-[2.2rem] border border-white bg-[#f8fbfb] shadow-[0_18px_55px_rgba(20,48,71,0.1)] md:h-[390px] ${isReverse ? "lg:order-2" : ""
                      }`}
                  >
                    <img
                      src={program.image}
                      alt={`${program.title} childcare program`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#143047]/60 via-[#143047]/8 to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#ff865c] shadow-[0_12px_35px_rgba(20,48,71,0.16)]">
                        <Icon size={23} />
                      </span>

                      <Badge variant="teal">{program.badge}</Badge>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="heading-font text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75">
                        Program 0{index + 1}
                      </p>
                    </div>
                  </div>

                  <div className={`${isReverse ? "lg:order-1" : ""}`}>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-full bg-[#fff4ec] text-sm font-bold text-[#ff865c]">
                        0{index + 1}
                      </span>

                      <span className="h-px flex-1 bg-[#e9eeee]" />
                    </div>

                    <p className="mb-4 heading-font text-[12px] font-semibold uppercase tracking-[0.2em] text-[#24b8a6]">
                      {program.subtitle}
                    </p>

                    <h3 className="heading-font max-w-3xl text-[clamp(2rem,4vw,4.2rem)] leading-[1.02] tracking-[-0.045em] text-[#143047]">
                      {program.title}
                    </h3>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#627689] md:text-[17px]">
                      {program.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {["Safe Care", "Flexible Support", "Child Growth"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#d9f3ef] bg-[#f2fffc] px-4 py-2 text-xs font-semibold text-[#158477]"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button asChild size="lg">
                        <Link to={`/programs#${program.id}`}>
                          Learn More
                          <ArrowRight size={17} />
                        </Link>
                      </Button>

                      <Button asChild variant="secondary" size="lg">
                        <Link to="/contact">
                          Ask About This Program
                          <MessageCircle size={17} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FlexibleCarePreview() {
  return (
    <section className="section-pad bg-[#143047] text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <span className="section-kicker border-white/15 bg-white/10 text-white">
              <CalendarCheck size={15} />
              Flexible & Drop-In Care
            </span>

            <h2 className="heading-font max-w-xl text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.02] text-white">
              Care built around real family schedules.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
              Flexible care options may include drop-in care, evenings,
              overnights, weekends, and 7-day support. Final availability
              depends on age group, staffing, schedule, registration, and center
              confirmation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button asChild size="lg">
                  <span>
                    Ask About Flexible Care
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

          <div className="reveal grid gap-5 md:grid-cols-3">
            {flexibleOptions.map((item, index) => {
              const Icon = item.icon

              return (
                <Card
                  key={item.title}
                  className="group bg-white p-6 transition duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#fff4ec] text-[#ff865c] transition group-hover:rotate-3 group-hover:scale-110">
                    <Icon size={25} />
                  </div>

                  <h3 className="heading-font text-2xl leading-tight text-[#143047]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#627689]">
                    {item.text}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustSafetyPreview() {
  return (
    <section className="section-pad bg-white/70">
      <div className="section-shell">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-kicker">
            <ShieldCheck size={15} />
            Trust, Safety & Communication
          </span>

          <h2 className="section-title mx-auto">
            Designed to help parents feel confident from the first visit.
          </h2>

          <p className="section-lead mx-auto">
            Parents need fast answers about safety, communication, programs, and
            availability. This section builds trust while avoiding unconfirmed
            claims.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {safetyItems.map((item, index) => {
            const Icon = item.icon

            return (
              <Card
                key={item.title}
                className="reveal group p-7 transition duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="mb-6 grid size-16 place-items-center rounded-[1.5rem] bg-[#fff4ec] text-[#ff865c] transition group-hover:rotate-3 group-hover:scale-110">
                  <Icon size={29} />
                </div>

                <h3 className="heading-font text-2xl text-[#143047]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#627689]">
                  {item.text}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ParentToolsPreview() {
  const tools = [
    {
      title: "New Family Sign Up",
      text: "Start the enrollment process through the confirmed family sign-up link when available.",
      cta: "Start Sign Up",
    },
    {
      title: "Pay Online with MyProcare",
      text: "Add the official MyProcare payment portal link after the client confirms the final URL.",
      cta: "Payment Portal",
    },
    {
      title: "Ask About Flexible Care",
      text: "Parents can share their schedule need, child age, and preferred start date.",
      cta: "Ask Now",
    },
  ]

  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="section-kicker">
              <CalendarCheck size={15} />
              Parent Tools
            </span>

            <h2 className="section-title">
              Fast actions for enrollment, payment, and inquiries.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-[#627689]">
            Keep the important parent actions visible and easy to use. Replace
            placeholder links after the client provides final URLs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              className="reveal relative overflow-hidden p-7 transition duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="absolute right-[-2rem] top-[-2rem] size-28 rounded-full bg-[#fff4ec]" />

              <div className="relative">
                <p className="heading-font text-4xl text-[#ff865c]">
                  0{index + 1}
                </p>

                <h3 className="heading-font mt-5 text-2xl text-[#143047]">
                  {tool.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#627689]">
                  {tool.text}
                </p>

                <Link to="/contact" className="mt-6 inline-flex">
                  <Button asChild variant={index === 1 ? "teal" : "default"}>
                    <span>
                      {tool.cta}
                      <ArrowRight size={16} />
                    </span>
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Flexible Learning and Care Solutions is amazing! My toddler feels safe, happy, and engaged every day. The staff is incredibly caring.",
  },
  {
    name: "James L.",
    rating: 5,
    text: "I love the flexibility offered. Overnight and drop-in care have been lifesavers for my work schedule. Highly recommend for families in Kemah, TX!",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Our preschooler has thrived here. The learning programs are thoughtful, creative, and age-appropriate. The staff communicates very well with parents.",
  },
  {
    name: "Daniel P.",
    rating: 5,
    text: "A warm, nurturing environment with excellent programs. I feel confident leaving my child in their care. Truly a parent-friendly daycare!",
  },
]

function ReviewsSection() {
  return (
    <section className="section-pad bg-[#fffaf4]">
      <div className="section-shell max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">What Parents Are Saying</h2>
          <p className="mt-3 text-base text-[#627689] max-w-2xl mx-auto">
            Real feedback from families in Kemah, TX who trust Flexible Learning and Care Solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <Card
              key={review.name}
              className="p-6 rounded-[2rem] shadow-[0_18px_50px_rgba(20,48,71,0.1)] bg-white transition hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(20,48,71,0.15)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#ffb74d]" />
                ))}
              </div>

              <p className="text-sm text-[#627689]">{review.text}</p>

              <p className="mt-4 font-semibold text-[#143047]">- {review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  return (
    <section className="section-pad overflow-hidden bg-[#fff4ec]">
      <div className="section-shell">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-kicker">
            <Sparkles size={15} />
            Gallery Preview
          </span>

          <h2 className="section-title mx-auto">
            Modern visual banners ready for real daycare photos.
          </h2>

          <p className="section-lead mx-auto">
            These are free placeholder-style images. Replace them later with
            real facility, classroom, playground, and activity photos after
            permission is confirmed.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className="reveal group relative h-80 overflow-hidden rounded-[2rem] shadow-[0_22px_65px_rgba(20,48,71,0.12)]"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#143047]/68 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="heading-font text-xl text-white">
                  {image.title}
                </p>
                <p className="mt-1 text-sm font-medium text-white/80">
                  Replace with approved photo
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqPreview() {
  return (
    <section className="section-pad">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <span className="section-kicker">
            <MessageCircle size={15} />
            Parent Questions
          </span>

          <h2 className="section-title">
            Clear answers before parents contact you.
          </h2>

          <p className="section-lead">
            FAQ content reduces repeated questions and helps parents understand
            programs, flexible care, tuition inquiry, assistance wording,
            location, and the tour process.
          </p>

          <Link to="/contact" className="mt-7 inline-flex">
            <Button asChild>
              <span>
                Still have questions?
                <ArrowRight size={16} />
              </span>
            </Button>
          </Link>
        </div>

        <div className="reveal">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}