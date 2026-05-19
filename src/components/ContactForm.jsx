import React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { programs } from "@/data/siteData"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("")
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childAge: "",
    program: "",
    scheduleNeed: "",
    preferredDate: "",
    message: "",
    consent: false,
    company: "",
  })

  const scheduleOptions = [
    "Full-time care",
    "Part-time care",
    "Drop-in care",
    "Evening care",
    "Overnight care",
    "Weekend care",
    "School age care",
    "Summer camp",
  ]

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.company) {
      return
    }

    if (
      !formData.parentName ||
      !formData.phone ||
      !formData.email ||
      !formData.childAge ||
      !formData.scheduleNeed ||
      !formData.consent
    ) {
      setFormStatus(
        "Please complete the required fields and accept the consent checkbox."
      )
      return
    }

    setFormStatus(
      "Thank you. This demo form is ready. Connect it to Laravel API, Web3Forms, Formspree, or another email service before launch."
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent Name *">
          <input
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="form-field"
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone *">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-field"
            placeholder="Phone number"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email *">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-field"
            placeholder="Email address"
          />
        </Field>

        <Field label="Child Age *">
          <input
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            className="form-field"
            placeholder="Example: 2 years"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Program Interest">
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="form-field"
          >
            <option value="">Select program</option>
            {programs.map((program) => (
              <option key={program.id} value={program.title}>
                {program.title}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Schedule Need *">
          <select
            name="scheduleNeed"
            value={formData.scheduleNeed}
            onChange={handleChange}
            className="form-field"
          >
            <option value="">Select schedule</option>
            {scheduleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Preferred Tour Date / Time">
        <input
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="form-field"
          placeholder="Example: Monday morning"
        />
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-field min-h-32 resize-y"
          placeholder="Tell us about your childcare need"
        />
      </Field>

      <label className="flex items-start gap-3 rounded-2xl bg-[#fffaf4] p-4">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 size-4 accent-[#ff865c]"
        />

        <span className="text-sm font-medium leading-6 text-[#627689]">
          I agree that Flexible Learning and Care Solutions may contact me about
          my inquiry. Please do not submit sensitive child records through this
          public form.
        </span>
      </label>

      {formStatus && (
        <div className="rounded-2xl border border-[#ffd7c4] bg-[#fff4ec] px-4 py-3 text-sm font-medium leading-6 text-[#9d431c]">
          {formStatus}
        </div>
      )}

      <Button size="lg" className="w-full">
        Submit Tour Request
        <ArrowRight size={17} />
      </Button>
    </form>
  )
}

function Field({ label, children }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#143047]">{label}</span>
      {children}
    </label>
  )
}