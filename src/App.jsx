import React from "react"
import { Route, Routes } from "react-router-dom"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ProgramsPage from "@/pages/ProgramsPage"
import TuitionPage from "@/pages/TuitionPage"
import ContactPage from "@/pages/ContactPage"

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#143047]">
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/tuition" element={<TuitionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}