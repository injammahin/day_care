import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Link, NavLink } from "react-router-dom"
import {
  ArrowRight,
  ChevronRight,
  Menu,
  Phone,
  X,
} from "lucide-react"

import { navItems, siteConfig } from "@/data/siteData"
import { Button } from "@/components/ui/button"

const ENROLLMENT_FORM_URL =
  "https://schools.mybrightwheel.com/sign-in?redirect_path=forms/181f0acb-dcd0-4e1e-ba60-dcbd08e0d094/self-service"

const TUITION_NAV_ITEM = {
  label: "Tuition & Rates",
  href: "/tuition-rates",
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const lastScrollY = useRef(0)

  /*
   * Add Tuition & Rates immediately after Programs.
   * If it already exists in siteData, it will not be duplicated.
   */
const headerNavItems = useMemo(() => {
  /*
   * Remove the old Tuition menu item and prevent duplicates.
   */
  const cleanedNavItems = navItems.filter((item) => {
    const normalizedLabel = item.label
      .trim()
      .toLowerCase()

    const normalizedHref = item.href
      .trim()
      .toLowerCase()

    return (
      normalizedLabel !== "tuition" &&
      normalizedLabel !== "tuition & rates" &&
      normalizedHref !== "/tuition" &&
      normalizedHref !== "/tuition-rates"
    )
  })

  const programsIndex = cleanedNavItems.findIndex(
    (item) =>
      item.label.trim().toLowerCase() === "programs"
  )

  /*
   * Add Tuition & Rates after Programs.
   */
  if (programsIndex === -1) {
    return [
      ...cleanedNavItems,
      TUITION_NAV_ITEM,
    ]
  }

  return [
    ...cleanedNavItems.slice(0, programsIndex + 1),
    TUITION_NAV_ITEM,
    ...cleanedNavItems.slice(programsIndex + 1),
  ]
}, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      setScrolled(currentY > 12)

      /*
       * Do not hide the header while the mobile drawer is open.
       */
      if (isOpen) {
        setIsHidden(false)
        lastScrollY.current = currentY
        return
      }

      if (currentY > lastScrollY.current && currentY > 120) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isOpen])

  /*
   * Prevent the page behind the mobile drawer from scrolling.
   * Also allow the Escape key to close the drawer.
   */
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const openMenu = () => {
    setIsHidden(false)
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-transform duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`border-b border-[#f0ebe6] bg-white transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_14px_40px_rgba(20,48,71,0.08)]"
            : ""
        }`}
      >
        <div className="section-shell flex min-h-[88px] items-center justify-between gap-5">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Flexible Learning and Care Solutions Home"
            className="group flex shrink-0 items-center"
          >
            <img
              src={siteConfig.logo}
              alt="Flexible Learning and Care Solutions logo"
              className="h-[90px] w-[200px] object-contain transition duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center justify-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {headerNavItems.map((item) => (
              <NavLink
                key={`${item.label}-${item.href}`}
                to={item.href}
                className={({ isActive }) =>
                  `relative px-4 py-7 text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#d75c34]"
                      : "text-[#3f5668] hover:text-[#d75c34]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-5 left-1/2 h-1 -translate-x-1/2 rounded-full bg-[#ff865c] transition-all duration-300 ${
                        isActive ? "w-7" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop header actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="min-w-[132px] whitespace-nowrap"
            >
              <a
                href={siteConfig.phoneHref}
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="shrink-0" size={17} aria-hidden="true" />

                <span className="whitespace-nowrap">
                  Call Now
                </span>
              </a>
            </Button>

            <Button
              size="sm"
              asChild
              className="min-w-[150px] whitespace-nowrap px-5"
            >
              <a
                href={ENROLLMENT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">
                  Enroll Now
                </span>

                <ArrowRight
                  className="shrink-0"
                  size={17}
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={openMenu}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[#f3dfd1] bg-white text-[#143047] shadow-[0_10px_26px_rgba(20,48,71,0.08)] lg:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="header-decoration-line" />
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-[#143047]/35 backdrop-blur-sm lg:hidden"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeMenu()
            }
          }}
        >
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-4 top-4 max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-sm overflow-y-auto rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(20,48,71,0.22)]"
          >
            {/* Mobile drawer header */}
            <div className="sticky top-0 z-10 border-b border-[#f3dfd1] bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <Link
                  to="/"
                  onClick={closeMenu}
                  aria-label="Flexible Learning and Care Solutions Home"
                  className="flex min-w-0 items-center"
                >
                  <img
                    src={siteConfig.logo}
                    alt="Flexible Learning and Care Solutions logo"
                    className="h-[76px] w-[170px] object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff0e7] text-[#143047] transition hover:bg-[#ffe5d5]"
                  aria-label="Close menu"
                >
                  <X size={21} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="p-5">
              {/* Mobile information cards */}
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#fffaf4] p-4 text-center">
                  <p className="font-['Times_New_Roman',Georgia,serif] text-xl font-semibold text-[#143047]">
                    6w–12y
                  </p>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7b8e9c]">
                    Ages
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fffaf4] p-4 text-center">
                  <p className="font-['Times_New_Roman',Georgia,serif] text-xl font-semibold text-[#143047]">
                    7 Days
                  </p>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7b8e9c]">
                    Support
                  </p>
                </div>
              </div>

              {/* Mobile navigation */}
              <nav
                className="space-y-2"
                aria-label="Mobile navigation"
              >
                {headerNavItems.map((item) => (
                  <NavLink
                    key={`${item.label}-${item.href}`}
                    to={item.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                        isActive
                          ? "bg-[#fff0e7] text-[#d75c34]"
                          : "bg-[#fffaf4] text-[#143047] hover:bg-[#fff0e7]"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      size={16}
                      aria-hidden="true"
                    />
                  </NavLink>
                ))}
              </nav>

              {/* Mobile actions */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full bg-white"
                  asChild
                >
                  <a href={siteConfig.phoneHref}>
                    <Phone size={16} aria-hidden="true" />
                    Call
                  </a>
                </Button>

                <Button className="w-full" asChild>
                  <a
                    href={ENROLLMENT_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Enroll Now
                  </a>
                </Button>
              </div>

              {/* Mobile tuition shortcut */}
              <Link
                to="/tuition-rates"
                onClick={closeMenu}
                className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#ff865c] bg-[#fffaf4] px-5 text-sm font-bold text-[#d75c34] transition hover:bg-[#fff0e7]"
              >
                View Tuition & Rates
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}