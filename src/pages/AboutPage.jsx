import React from "react"
import { CheckCircle2, HeartHandshake, Home, ShieldCheck } from "lucide-react"

import CTASection from "@/components/CTASection"
import PageHero from "@/components/PageHero"
import Seo from "@/components/Seo"
import { Card } from "@/components/ui/card"

import { seoPages, siteConfig } from "@/data/siteData"

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Flexible Learning and Care Solutions",
  url: `${siteConfig.baseUrl}/about`,
  description: seoPages.about.description,
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
      name: "About Us",
      item: `${siteConfig.baseUrl}/about`,
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <Seo {...seoPages.about} schema={[aboutSchema, breadcrumbSchema]} />

      <PageHero
        eyebrow="About Us"
        title="A caring childcare center built around families."
        description="Flexible Learning and Care Solutions is a family-owned childcare and learning center in Kemah, Texas, created to support families with both traditional and nontraditional schedules."
        image="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1400&q=85"
      />

      <section className="section-pad">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85"
              alt="Children learning in a warm daycare environment"
              className="h-[540px] w-full rounded-[2.5rem] object-cover shadow-[0_26px_80px_rgba(20,48,71,0.13)]"
            />
          </div>

          <div>
            <span className="section-kicker">
              <Home size={15} />
              Our Story
            </span>

            <h2 className="section-title">
              A warm place where children feel safe, supported, and seen.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#627689]">
              <p>
                Flexible Learning and Care Solutions was created to support real
                families with real schedules. The center provides a dependable,
                nurturing, and parent-friendly environment for children from 6
                weeks to 12 years old.
              </p>

              <p>
                The care approach is rooted in exploration, creativity,
                discovery, group activities, and age-appropriate guidance. Each
                child is encouraged to grow socially, emotionally, cognitively,
                and physically at their own pace.
              </p>

              <p>
                The website should remain honest and careful by avoiding
                unconfirmed claims about exact hours, ratios, licensing,
                pricing, or transportation until the client verifies those
                details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">
              <HeartHandshake size={15} />
              Our Philosophy
            </span>

            <h2 className="section-title mx-auto">
              Care, learning, communication, and flexibility working together.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Nurturing Care",
                text: "Children need warmth, safety, routine, and caring adults who help them feel secure.",
              },
              {
                icon: CheckCircle2,
                title: "Learning Through Discovery",
                text: "Children learn through play, exploration, creativity, stories, movement, and guided experiences.",
              },
              {
                icon: ShieldCheck,
                title: "Family Partnership",
                text: "Parents should feel informed, welcomed, and confident about their child's daily care.",
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <Card key={item.title} className="p-7">
                  <div className="mb-6 grid size-16 place-items-center rounded-[1.5rem] bg-[#fff4ec] text-[#ff865c]">
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

      <CTASection
        title="Want to see if this center is the right fit?"
        text="Use the contact page to schedule a tour, ask about programs, or discuss flexible care options for your family."
      />
    </>
  )
}