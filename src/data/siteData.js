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
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=85",
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
    id: "infants",
    icon: Baby,
    title: "Infants",
    age: "6 Weeks - 18 Months",
    seoTitle: "Infant Care in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A nurturing environment where babies feel safe, loved, and supported through gentle routines, sensory exploration, and caregiver connection.",
    longText:
      "Our infant care program is designed for warmth, responsiveness, and trust. Babies need gentle care, steady routines, and close communication between caregivers and families. The program supports early sensory development, comfort, bonding, and daily rhythm while keeping parents informed.",
    bullets: [
      "Gentle routines and responsive care",
      "Sensory discovery and early development",
      "Warm caregiver connection",
      "Parent communication and daily updates",
    ],
  },
  {
    id: "toddlers",
    icon: Sparkles,
    title: "Toddlers",
    age: "18 Months - 3 Years",
    seoTitle: "Toddler Care in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A playful program for curious learners, supporting movement, language growth, independence, and social development.",
    longText:
      "Toddlers learn by moving, touching, talking, singing, and exploring. This program supports independence, social-emotional growth, early language, creative play, and helpful routines. Potty training support can be aligned with each family through consistency and communication.",
    bullets: [
      "Active play and movement",
      "Language and social growth",
      "Creative hands-on activities",
      "Potty training support with family communication",
    ],
  },
  {
    id: "pre-k1",
    icon: BookOpen,
    title: "Pre-K1",
    age: "3-Year-Olds",
    seoTitle: "Pre-K1 Program in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A balanced program that encourages creativity, confidence, communication, friendship, manners, and early learning concepts.",
    longText:
      "The Pre-K1 program helps three-year-olds build confidence, friendships, communication, manners, and early learning habits. Children explore ideas through play, creative activities, group learning, stories, music, and guided experiences.",
    bullets: [
      "Creative projects and early learning",
      "Friendship and social confidence",
      "Communication and manners",
      "Play-based discovery",
    ],
  },
  {
    id: "pre-k2",
    icon: Star,
    title: "Pre-K2",
    age: "4 - 5 Years",
    seoTitle: "Pre-K2 and Kindergarten Readiness in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A kindergarten-readiness program focused on early academics, collaboration, problem-solving, confidence, and meaningful play.",
    longText:
      "Pre-K2 supports kindergarten readiness through early literacy, numbers, problem-solving, collaboration, classroom routines, fine motor practice, and confidence building. The goal is to help children feel prepared, curious, and capable.",
    bullets: [
      "Early literacy and math readiness",
      "Problem-solving and collaboration",
      "Confidence and classroom routines",
      "Hands-on learning experiences",
    ],
  },
  {
    id: "school-age",
    icon: Users,
    title: "School Age",
    age: "5 - 12 Years",
    seoTitle: "School Age Care in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Before and after school care that blends homework support, creative activities, relaxation time, and safe supervision.",
    longText:
      "The school-age program gives children a safe place to relax, complete homework, enjoy creative activities, and connect with peers before or after school. Transportation details should be added only after the client confirms school pickup or drop-off arrangements.",
    bullets: [
      "Homework support",
      "Creative and group activities",
      "Relaxation after school",
      "Safe, supervised environment",
    ],
  },
  {
    id: "summer-camp",
    icon: Sun,
    title: "Summer Camp",
    age: "Seasonal Program",
    seoTitle: "Summer Camp in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A summer experience with creativity, activity, projects, weekly themes, friendships, and guided discovery.",
    longText:
      "Summer camp keeps children active, curious, and connected through creative projects, weekly themes, group activities, and fun learning experiences. Field trips or special activities should only be listed after confirmation.",
    bullets: [
      "Weekly themes",
      "Creative projects",
      "Active summer fun",
      "Friendship and discovery",
    ],
  },
  {
    id: "flexible-care",
    icon: Clock,
    title: "Flexible & Drop-In Care",
    age: "Subject to Availability",
    seoTitle: "Flexible and Drop-In Childcare in Kemah, TX",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Care designed around real family schedules, including drop-in, evening, overnight, weekend, and 7-day support options when available.",
    longText:
      "Flexible care is one of the strongest differentiators for this center. Families may need care outside traditional schedules because of work, emergencies, appointments, or changing routines. Availability should always be confirmed based on age group, staffing, registration, and space.",
    bullets: [
      "Drop-in care options",
      "Evening and overnight care inquiries",
      "Weekend and 7-day support inquiries",
      "Subject to availability and registration",
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