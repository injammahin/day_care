import {
  Baby,
  BookOpen,
  CalendarCheck,
  Clock,
  HeartHandshake,
  Home,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
} from "lucide-react"
import gruppenbesuch from "@/assets/img/gruppenbesuch.webp"
import overnightCareImg from "@/assets/img/Overnight-Care.webp"
import kindergartenImg from "@/assets/img/Kindergarten Readiness Academy.webp"
import homeschoolImg from "@/assets/img/Homeschool-Enrichment.webp"
import dropInCareImg from "@/assets/img/Drop-In-Care.webp"
export const siteConfig = {
  logo: "/images/logo1.png",
  name: "Flexible Learning and Care Solutions",
  shortName: "Flexible Learning",
  tagline: "Care Solutions",
  baseUrl: "https://www.flexiblelearningcaresolutions.com",
  phone: "832-890-9665",
  phoneHref: "tel:8328909665",
  email: "To be provided by client",
  address: "2020 Anders Lane, Kemah, TX 77565",
  streetAddress: "2020 Anders Lane",
  city: "Kemah",
  state: "TX",
  zip: "77565",
  country: "US",
  latitude: "",
  longitude: "",
  ageRange: "6 weeks to 12 years",
  mapEmbed:
    "https://www.google.com/maps?q=2020%20Anders%20Lane,%20Kemah,%20TX%2077565&output=embed",
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Tuition", href: "/tuition" },
  { label: "Contact", href: "/contact" },
]

export const seoPages = {
  home: {
    title: "Daycare in Kemah, TX | Flexible Learning and Care Solutions",
    description:
      "Flexible Learning and Care Solutions provides safe, nurturing childcare in Kemah, TX for children ages 6 weeks to 12 years, including flexible, drop-in, evening, overnight, weekend, and 7-day care options.",
    keywords:
      "daycare in Kemah TX, childcare in Kemah TX, preschool in Kemah TX, infant care Kemah TX, toddler care Kemah TX, drop-in childcare Kemah TX, overnight childcare Kemah TX, weekend childcare Kemah TX, flexible childcare Kemah TX",
    path: "/",
  },
  about: {
    title: "About Our Childcare Center in Kemah, TX | Flexible Learning",
    description:
      "Learn about Flexible Learning and Care Solutions, a family-owned childcare and learning center in Kemah, TX focused on safe care, discovery, creativity, and family partnership.",
    keywords:
      "about daycare Kemah TX, family owned childcare Kemah TX, childcare center Kemah TX, learning center Kemah TX, child development Kemah TX",
    path: "/about",
  },
  programs: {
    title: "Childcare Programs in Kemah, TX | Infants, Toddlers, Pre-K",
    description:
      "Explore infant care, toddler care, Pre-K, school-age care, summer camp, and flexible drop-in childcare programs at Flexible Learning and Care Solutions in Kemah, TX.",
    keywords:
      "infant care Kemah TX, toddler care Kemah TX, Pre-K Kemah TX, preschool Kemah TX, school age care Kemah TX, summer camp Kemah TX, drop-in childcare Kemah TX",
    path: "/programs",
  },
  tuition: {
    title: "Tuition and Child Care Assistance in Kemah, TX | Flexible Learning",
    description:
      "Request tuition information for childcare programs in Kemah, TX. Ask about age-based care, flexible schedules, drop-in care, and child care assistance options.",
    keywords:
      "daycare tuition Kemah TX, childcare tuition Kemah TX, NCI accepted daycare Kemah TX, child care assistance Kemah TX, daycare pricing Kemah TX",
    path: "/tuition",
  },
  contact: {
    title: "Contact and Schedule a Tour | Daycare in Kemah, TX",
    description:
      "Contact Flexible Learning and Care Solutions in Kemah, TX to schedule a tour, ask about childcare availability, flexible care, tuition, and enrollment.",
    keywords:
      "schedule daycare tour Kemah TX, contact daycare Kemah TX, childcare tour Kemah TX, daycare near me Kemah TX",
    path: "/contact",
  },
}

export const heroSlides = [
  {
    eyebrow: "Flexible childcare in Kemah, TX",
    title: "Flexible childcare for modern family life.",
    text: "Dependable childcare and learning programs for children ages 6 weeks to 12 years, with flexible care options for real family schedules.",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1600&q=85",
  },
  {
    eyebrow: "Learning through discovery",
    title: "A warm place to learn, play, and grow.",
    text: "Age-appropriate programs help children build confidence, creativity, communication, and early learning skills.",
    image: gruppenbesuch,
  },
  {
    eyebrow: "Support for real schedules",
    title: "Care options when families need support.",
    text: "Ask about drop-in, weekend, evening, overnight, and 7-day care options, subject to availability and registration.",
    image:
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1600&q=85",
  },
]

export const trustItems = [
  "Ages 6 Weeks - 12 Years",
  "Drop-In Care",
  "Evening Care",
  "Overnight Care",
  "Weekend Support",
  "Open 7 Days",
  "NCI Accepted",
  "Family-Owned Center",
]

export const programs = [
  {
    id: "overnight-care",
    icon: HeartHandshake,
    title: "Overnight Care",
    age: "Ages 6 Months - 12 Years",
    seoTitle: "Overnight Childcare in Kemah, TX",
    image: overnightCareImg,
    summary:
      "Safe, nurturing overnight care for infants, toddlers, preschoolers, and school-age children.",
    longText:
      "Flexible Learning Solutions offers safe, nurturing overnight care for infants, toddlers, preschoolers, and school-age children. Whether parents work night shifts, extended hours, or simply need dependable care, children enjoy a comforting evening routine, supervised sleep, and a calm, home-like environment.",
    bullets: [
      "Designed for families who need evening or overnight childcare support",
      "Children enjoy a calm, home-like environment with supervised rest",
      "Helpful for night shifts, extended work hours, or dependable backup care",
      "Available based on age group, registration, staffing, and space",
    ],
  },
  {
    id: "kindergarten-readiness",
    icon: BookOpen,
    title: "Kindergarten Readiness Academy",
    age: "Designed for 5-Year-Olds",
    seoTitle: "Kindergarten Readiness Program in Kemah, TX",
    image: kindergartenImg,
    summary:
      "A focused readiness program for children preparing for kindergarten success.",
    longText:
      "Our Kindergarten Readiness Academy is ideal for children who missed the kindergarten cutoff date or would benefit from an additional year in a smaller, more personalized learning environment. Through hands-on instruction, children build confidence in early reading, writing, math, and social-emotional skills to ensure they are fully prepared for kindergarten success.",
    bullets: [
      "Supports early reading, writing, math, and classroom readiness",
      "Ideal for children who missed the kindergarten cutoff date",
      "Smaller, more personalized learning environment",
      "Builds confidence, independence, and social-emotional skills",
    ],
  },
  {
    id: "homeschool-enrichment",
    icon: Sparkles,
    title: "Homeschool Enrichment Program",
    age: "For Homeschool Families",
    seoTitle: "Homeschool Enrichment Program in Kemah, TX",
    image: homeschoolImg,
    summary:
      "A welcoming learning space for homeschool children to explore, create, and grow.",
    longText:
      "Our Homeschool Support Program provides a welcoming and engaging learning space where children can explore, create, and grow alongside peers. Guided by experienced educators, students participate in hands-on activities that encourage curiosity, creativity, and individualized learning.",
    bullets: [
      "Provides a structured enrichment option for homeschool families",
      "Encourages curiosity, creativity, and hands-on learning",
      "Gives children the opportunity to learn and socialize with peers",
      "Guided by experienced educators in a supportive environment",
    ],
  },
  {
    id: "drop-in-care",
    icon: CalendarCheck,
    title: "Drop-In Care",
    age: "Flexible Care When You Need It Most",
    seoTitle: "Drop-In Childcare in Kemah, TX",
    image: dropInCareImg,
    summary:
      "Flexible childcare support for unexpected appointments, errands, or changing schedules.",
    longText:
      "Life does not always follow a schedule. Our drop-in care option offers families convenient, high-quality childcare on an as-needed basis, providing peace of mind whenever unexpected appointments, errands, or work commitments arise.",
    bullets: [
      "Convenient childcare for unexpected schedule changes",
      "Helpful for appointments, errands, work needs, or backup care",
      "Available as an as-needed option based on center availability",
      "A flexible option for families who need dependable short-term care",
    ],
  },
]

export const flexibleOptions = [
  {
    icon: Clock,
    title: "Drop-In Care",
    text: "Helpful support for families with changing schedules, subject to space and registration requirements.",
  },
  {
    icon: Moon,
    title: "Evening & Overnight",
    text: "Support for nontraditional work schedules when availability, age group, and staffing requirements are met.",
  },
  {
    icon: CalendarCheck,
    title: "Weekend & 7-Day Support",
    text: "Flexible options for families who may need care beyond a regular weekday schedule.",
  },
]

export const safetyItems = [
  {
    icon: ShieldCheck,
    title: "Safety-First Mindset",
    text: "A careful approach to supervision, cleanliness, communication, and child comfort.",
  },
  {
    icon: HeartHandshake,
    title: "Family Partnership",
    text: "Clear parent communication helps families stay informed and confident.",
  },
  {
    icon: Home,
    title: "Warm Local Center",
    text: "A family-owned childcare center serving Kemah families with a caring environment.",
  },
]

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85",
    title: "Creative learning spaces",
  },
  {
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=85",
    title: "Hands-on discovery",
  },
  {
    src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1000&q=85",
    title: "Group activities",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    title: "Play-based learning",
  },
]

export const faqs = [
  {
    question: "What ages do you serve?",
    answer:
      "We serve children from 6 weeks to 12 years old through infant care, toddler care, Pre-K programs, school-age care, summer camp, and flexible care options.",
  },
  {
    question: "Do you offer drop-in childcare?",
    answer:
      "Yes. Flexible and drop-in care is part of the service model. Availability may depend on age group, schedule, staffing, and registration requirements.",
  },
  {
    question: "Do you offer overnight or weekend care?",
    answer:
      "The client notes state that overnight care and 7-day care are available. Exact hours and availability should be confirmed before publishing the final website.",
  },
  {
    question: "Do you accept NCI or child care assistance?",
    answer:
      "The client notes state that NCI is accepted. Final wording should be verified by the client and aligned with the applicable Texas child care assistance program.",
  },
  {
    question: "How can I get tuition information?",
    answer:
      "Parents can request tuition information by calling the center or submitting the tuition inquiry form. Pricing may depend on age, schedule, program, and availability.",
  },
  {
    question: "How do I schedule a tour?",
    answer:
      "Parents can use the Schedule a Tour form, call the center, or submit a contact request. A team member should follow up with available tour options.",
  },
  {
    question: "Where are you located?",
    answer:
      "Flexible Learning and Care Solutions is located at 2020 Anders Lane, Kemah, Texas 77565.",
  },
]