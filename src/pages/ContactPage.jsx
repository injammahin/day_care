import React from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import ContactForm from "@/components/ContactForm"
import PageHero from "@/components/PageHero"
import Seo from "@/components/Seo"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

import { seoPages, siteConfig } from "@/data/siteData"

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Flexible Learning and Care Solutions",
  url: `${siteConfig.baseUrl}/contact`,
  description: seoPages.contact.description,
  mainEntity: {
    "@type": "ChildCare",
    name: siteConfig.name,
    telephone: `+1-${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: siteConfig.country,
    },
  },
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
      name: "Contact",
      item: `${siteConfig.baseUrl}/contact`,
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <Seo {...seoPages.contact} schema={[contactSchema, breadcrumbSchema]} />

      <PageHero
        eyebrow="Contact"
        title="Schedule a tour or ask about childcare availability."
        description="Use the form below to ask about programs, flexible care, tuition details, availability, and enrollment next steps."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
        ctaLabel="Use Contact Form"
      />

      <section className="section-pad">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="section-kicker">
              <MapPin size={15} />
              Visit or Call
            </span>

            <h2 className="section-title">
              Talk with the center about your family’s care needs.
            </h2>

            <p className="section-lead">
              Parents can ask about age groups, flexible care, tuition,
              availability, schedule needs, and tour options.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard
                icon={Phone}
                title="Call Now"
                text={siteConfig.phone}
                href={siteConfig.phoneHref}
              />

              <ContactCard
                icon={MapPin}
                title="Address"
                text={siteConfig.address}
              />

              <ContactCard icon={Mail} title="Email" text={siteConfig.email} />
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#f0ebe6] bg-white shadow-[0_18px_60px_rgba(20,48,71,0.08)]">
              <iframe
                title="Flexible Learning and Care Solutions location map"
                src={siteConfig.mapEmbed}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="border-b border-[#edf2f0] p-7">
              <Badge variant="teal">Tour Request Form</Badge>

              <h3 className="heading-font mt-4 text-3xl text-[#143047]">
                Send a tour or care inquiry.
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#627689]">
                The form is front-end ready. Connect it to Laravel API,
                Web3Forms, Formspree, or another email service before launch.
              </p>
            </div>

            <div className="p-7">
              <ContactForm />
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

function ContactCard({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex items-center mb-3 gap-4 rounded-[2rem] bg-white p-5 shadow-[0_14px_45px_rgba(20,48,71,0.06)] transition hover:-translate-y-1">
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#fff4ec] text-[#ff865c]">
        <Icon size={22} />
      </span>

      <div>
        <p className="text-sm font-medium text-[#7b8e9c]">{title}</p>
        <p className="text-base font-semibold text-[#143047]">{text}</p>
      </div>
    </div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}