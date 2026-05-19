import React from "react"
import { useEffect, useRef, useState } from "react"
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      setScrolled(currentY > 12)

      if (currentY > lastScrollY.current && currentY > 120) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-transform duration-500 ${isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div
        className={`border-b border-[#f0ebe6] bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_14px_40px_rgba(20,48,71,0.08)]" : ""
          }`}
      >
        <div className="section-shell flex min-h-[88px] items-center justify-between gap-5">
          {/* Logo only */}
          <Link
            to="/"
            aria-label="Flexible Learning and Care Solutions Home"
            className="group flex shrink-0 items-center"
          >
            <img
              src={siteConfig.logo}
              alt="Flexible Learning and Care Solutions logo"
              className="h-[90px] w-[200px] rounded-full object-contain transition duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `relative px-4 py-7 text-[15px] font-medium transition-colors duration-300 ${isActive
                    ? "text-[#d75c34]"
                    : "text-[#3f5668] hover:text-[#d75c34]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute bottom-5 left-1/2 h-1 -translate-x-1/2 rounded-full bg-[#ff865c] transition-all duration-300 ${isActive ? "w-7" : "w-0"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header actions */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a href={siteConfig.phoneHref}>
              <Button variant="outline" size="sm">
                <Phone size={15} />
                Call Now
              </Button>
            </a>

            <Link to="/contact">
              <Button asChild size="sm" className="px-5">
                <span>
                  Schedule a Tour
                  <ArrowRight size={15} />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="grid size-11 place-items-center rounded-full border border-[#f3dfd1] bg-white text-[#143047] shadow-[0_10px_26px_rgba(20,48,71,0.08)] lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>

        <div className="header-decoration-line" />
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#143047]/35 backdrop-blur-sm lg:hidden">
          <div className="absolute right-4 top-4 w-[calc(100%-32px)] max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(20,48,71,0.22)]">
            <div className="border-b border-[#f3dfd1] bg-white p-5">
              <div className="flex items-center justify-between">
                {/* Mobile logo only */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  aria-label="Flexible Learning and Care Solutions Home"
                  className="flex items-center"
                >
                  <img
                    src={siteConfig.logo}
                    alt="Flexible Learning and Care Solutions logo"
                    className="h-[90px] w-[200px] rounded-full object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="grid size-10 place-items-center rounded-full bg-[#fff0e7] text-[#143047]"
                  aria-label="Close menu"
                >
                  <X size={21} />
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#fffaf4] p-4 text-center">
                  <p className="font-['Times_New_Roman',Georgia,serif] text-xl font-semibold text-[#143047]">
                    6w-12y
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

              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className="flex w-full items-center justify-between rounded-2xl bg-[#fffaf4] px-4 py-3 text-left text-sm font-medium text-[#143047] transition hover:bg-[#fff0e7]"
                  >
                    {item.label}
                    <ChevronRight size={16} />
                  </Link>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href={siteConfig.phoneHref}>
                  <Button variant="outline" className="w-full bg-white">
                    <Phone size={16} />
                    Call
                  </Button>
                </a>

                <Link to="/contact" onClick={closeMenu}>
                  <Button asChild className="w-full">
                    <span>Tour</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}