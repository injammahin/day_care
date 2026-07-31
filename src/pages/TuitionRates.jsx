import React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CalendarDays,
  Download,
  GraduationCap,
  Mail,
  Moon,
  Sparkles,
} from "lucide-react"

import { siteConfig } from "@/data/siteData"
import { Button } from "@/components/ui/button"

const ENROLLMENT_FORM_URL =
  "https://schools.mybrightwheel.com/sign-in?redirect_path=forms/181f0acb-dcd0-4e1e-ba60-dcbd08e0d094/self-service"

const CONTACT_EMAIL = "jc@flexiblelearning-solutions.com"

/*
 * Upload the tuition PDF to:
 * public/documents/fls-tuition-rates.pdf
 */
const TUITION_FLYER_URL = "/documents/fls-tuition-rates.pdf"

const overnightRates = [
  {
    age: "1–2 years old",
    fullTime: "$360/week",
    partTime: "Unavailable",
  },
  {
    age: "3–4 years old",
    fullTime: "$350/week",
    partTime: "$250/week",
  },
  {
    age: "5-year schoolers",
    fullTime: "$335/week",
    partTime: "$240/week",
  },
]

const weekdayDropInRates = [
  {
    hours: "1–3 hours",
    singleChild: "$42",
    additionalChildren: "$31",
  },
  {
    hours: "3–6 hours",
    singleChild: "$55",
    additionalChildren: "$42",
  },
  {
    hours: "7–9 hours",
    singleChild: "$65",
    additionalChildren: "$48",
  },
  {
    hours: "10–12 hours",
    singleChild: "$75",
    additionalChildren: "$56",
  },
]

const weekendDropInRates = [
  {
    hours: "1–3 hours",
    singleChild: "$55",
    additionalChildren: "$41",
  },
  {
    hours: "3–6 hours",
    singleChild: "$75",
    additionalChildren: "$56",
  },
  {
    hours: "7–9 hours",
    singleChild: "$85",
    additionalChildren: "$63",
  },
  {
    hours: "10–12 hours",
    singleChild: "$95",
    additionalChildren: "$71",
  },
]

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  iconBackground = "bg-[#fff0e7]",
  iconColor = "text-[#ff865c]",
}) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div
        className={`grid size-12 shrink-0 place-items-center rounded-2xl ${iconBackground} ${iconColor}`}
      >
        <Icon size={23} aria-hidden="true" />
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d75c34]">
          {eyebrow}
        </p>

        <h2 className="font-['Times_New_Roman',Georgia,serif] text-3xl font-bold leading-tight text-[#143047] md:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#647987]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function KindergartenPriceCard({
  title,
  price,
  featured = false,
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[1.75rem] border p-7 transition duration-300 hover:-translate-y-1 md:p-8 ${
        featured
          ? "border-[#ff865c] bg-[#ff865c] text-white shadow-[0_22px_50px_rgba(255,134,92,0.24)]"
          : "border-[#f1ddd0] bg-white text-[#143047] shadow-[0_18px_50px_rgba(20,48,71,0.07)]"
      }`}
    >
      <div
        className={`absolute -right-10 -top-10 size-32 rounded-full ${
          featured
            ? "bg-white/10"
            : "bg-[#fff5ee]"
        }`}
      />

      <div className="relative">
        <p
          className={`text-sm font-bold uppercase tracking-[0.14em] ${
            featured ? "text-white/80" : "text-[#d75c34]"
          }`}
        >
          {title}
        </p>

        <div className="mt-5 flex items-end gap-2">
          <strong className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {price}
          </strong>

          <span
            className={`pb-1 text-sm font-semibold ${
              featured ? "text-white/80" : "text-[#718694]"
            }`}
          >
            / week
          </span>
        </div>

        <p
          className={`mt-5 text-sm leading-6 ${
            featured ? "text-white/85" : "text-[#647987]"
          }`}
        >
          Private Kindergarten tuition option.
        </p>
      </div>
    </article>
  )
}

function OvernightTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#eadfd7] bg-white shadow-[0_18px_50px_rgba(20,48,71,0.07)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-[#143047] text-white">
              <th className="px-6 py-5 text-sm font-bold uppercase tracking-[0.1em]">
                Age
              </th>

              <th className="px-6 py-5 text-sm font-bold uppercase tracking-[0.1em]">
                Full-Time
              </th>

              <th className="px-6 py-5 text-sm font-bold uppercase tracking-[0.1em]">
                Part-Time
              </th>
            </tr>
          </thead>

          <tbody>
            {overnightRates.map((rate, index) => (
              <tr
                key={rate.age}
                className={
                  index !== overnightRates.length - 1
                    ? "border-b border-[#eee5df]"
                    : ""
                }
              >
                <td className="px-6 py-5 font-semibold text-[#143047]">
                  {rate.age}
                </td>

                <td className="px-6 py-5 text-lg font-extrabold text-[#d75c34]">
                  {rate.fullTime}
                </td>

                <td
                  className={`px-6 py-5 font-bold ${
                    rate.partTime === "Unavailable"
                      ? "text-[#94a3ad]"
                      : "text-[#143047]"
                  }`}
                >
                  {rate.partTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DropInTable({
  rates,
  accentClass = "bg-[#ff865c]",
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#eadfd7] bg-white shadow-[0_18px_50px_rgba(20,48,71,0.07)]">
      <div className={`h-1.5 w-full ${accentClass}`} />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="bg-[#fffaf4]">
              <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#718694]">
                Hours
              </th>

              <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#718694]">
                Single Child
              </th>

              <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#718694]">
                Additional Children
              </th>
            </tr>
          </thead>

          <tbody>
            {rates.map((rate, index) => (
              <tr
                key={rate.hours}
                className={
                  index !== rates.length - 1
                    ? "border-b border-[#eee5df]"
                    : ""
                }
              >
                <td className="px-6 py-5 font-semibold text-[#143047]">
                  {rate.hours}
                </td>

                <td className="px-6 py-5 text-xl font-extrabold text-[#d75c34]">
                  {rate.singleChild}
                </td>

                <td className="px-6 py-5 text-lg font-bold text-[#143047]">
                  {rate.additionalChildren}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function TuitionRates() {
  return (
    <main className="min-h-screen bg-[#fffdfb] pt-[88px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#f1e4db] bg-white">
        <div className="absolute left-[-80px] top-[-100px] size-72 rounded-full bg-[#fff0e7] blur-3xl" />
        <div className="absolute bottom-[-130px] right-[-60px] size-80 rounded-full bg-[#e8f6ed] blur-3xl" />

        <div className="section-shell relative py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4d9c8] bg-[#fffaf4] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d75c34]">
                <Sparkles size={15} aria-hidden="true" />
                Tuition and Care Rates
              </div>

              <h1 className="max-w-3xl font-['Times_New_Roman',Georgia,serif] text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[#143047] sm:text-5xl lg:text-6xl">
                Flexible care options for your family’s schedule.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#647987]">
                Review our Private Kindergarten, overnight care, weekday
                drop-in, and weekend drop-in tuition options.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="min-h-13 rounded-full px-7"
                >
                  <a
                    href={ENROLLMENT_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Enroll Now
                    <ArrowRight
                      className="shrink-0"
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="min-h-13 rounded-full bg-white px-7"
                >
                  <a
                    href={TUITION_FLYER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Download
                      className="shrink-0"
                      size={18}
                      aria-hidden="true"
                    />
                    Download Flyer
                  </a>
                </Button>
              </div>
            </div>

            {/* Logo panel */}
            <div className="relative">
              <div className="absolute inset-5 rounded-[2.5rem] bg-[#fff0e7] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#f1ddd0] bg-white p-6 shadow-[0_24px_70px_rgba(20,48,71,0.10)]">
                <img
                  src={siteConfig.logo}
                  alt="Flexible Learning and Care Solutions"
                  className="mx-auto h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Kindergarten */}
      <section className="py-16 md:py-20">
        <div className="section-shell">
          <SectionHeading
            icon={GraduationCap}
            eyebrow="Private Kindergarten"
            title="Choose the schedule that works for your family."
            description="Weekly Private Kindergarten tuition is available for both full-time and part-time enrollment."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <KindergartenPriceCard
              title="Full-Time"
              price="$275"
              featured
            />

            <KindergartenPriceCard
              title="Part-Time"
              price="$190"
            />
          </div>
        </div>
      </section>

      {/* Overnight Care */}
      <section className="border-y border-[#eee4dd] bg-[#fffaf4] py-16 md:py-20">
        <div className="section-shell">
          <SectionHeading
            icon={Moon}
            eyebrow="Overnight Care"
            title="Dependable overnight care by age group."
            description="Review the available full-time and part-time weekly overnight care rates."
            iconBackground="bg-[#eaf2ff]"
            iconColor="text-[#2563c5]"
          />

          <OvernightTable />
        </div>
      </section>

      {/* Weekday drop-ins */}
      <section className="py-16 md:py-20">
        <div className="section-shell">
          <SectionHeading
            icon={CalendarDays}
            eyebrow="Weekday Drop-Ins"
            title="Flexible weekday care when you need it."
            description="Rates are organized by the number of hours and include separate pricing for a single child and additional children."
            iconBackground="bg-[#e8f6ed]"
            iconColor="text-[#49935f]"
          />

          <DropInTable
            rates={weekdayDropInRates}
            accentClass="bg-[#77ad72]"
          />
        </div>
      </section>

      {/* Weekend drop-ins */}
      <section className="border-y border-[#eee4dd] bg-[#f7fbff] py-16 md:py-20">
        <div className="section-shell">
          <SectionHeading
            icon={Sparkles}
            eyebrow="Weekend Drop-Ins"
            title="Weekend support for busy families."
            description="Select the care duration that fits your weekend schedule."
            iconBackground="bg-[#eaf2ff]"
            iconColor="text-[#2563c5]"
          />

          <DropInTable
            rates={weekendDropInRates}
            accentClass="bg-[#4f89d7]"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#143047] px-6 py-10 text-white shadow-[0_24px_70px_rgba(20,48,71,0.20)] md:px-12 md:py-14">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-[#ff865c]/20 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 size-56 rounded-full bg-[#77ad72]/20 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ffad8f]">
                  Need more information?
                </p>

                <h2 className="max-w-2xl font-['Times_New_Roman',Georgia,serif] text-3xl font-bold leading-tight md:text-4xl">
                  Let’s find the best care option for your family.
                </h2>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-white/85 transition hover:text-white"
                >
                  <Mail size={18} aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  size="lg"
                  asChild
                  className="min-h-13 rounded-full bg-[#ff865c] px-7 text-white hover:bg-[#f3754d]"
                >
                  <a
                    href={ENROLLMENT_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Start Enrollment
                    <ArrowRight
                      className="shrink-0"
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="min-h-13 rounded-full border-white/30 bg-white/10 px-7 text-white hover:bg-white hover:text-[#143047]"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}