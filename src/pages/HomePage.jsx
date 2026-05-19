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
              ["6w-12y", "Age Range"],
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
              alt="Children learning and playing in a childcare setting"
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
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="section-kicker">
              <BookOpen size={15} />
              Age-Based Programs
            </span>
            <h2 className="section-title">
              Clear programs for every stage of childhood.
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-8 text-[#627689]">
              From infants to school-age children, each program supports safety,
              confidence, creativity, social growth, and age-appropriate
              learning.
            </p>

            <Link
              to="/programs"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d75c34]"
            >
              View all programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.slice(0, 6).map((program, index) => {
            const Icon = program.icon

            return (
              <Card
                key={program.id}
                className="reveal group overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(20,48,71,0.13)]"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={`${program.title} childcare program`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#143047]/52 to-transparent" />

                  <div className="absolute left-5 top-5 grid size-13 place-items-center rounded-2xl bg-white text-[#ff865c] shadow-lg">
                    <Icon size={24} />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <Badge variant="teal">{program.age}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.summary}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Link
                    to={`/programs#${program.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#d75c34]"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
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