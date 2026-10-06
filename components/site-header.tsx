"use client"

import { useState } from "react"
import {
  ArrowRight,
  Building2,
  Menu,
  Search,
  X,
} from "lucide-react"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং সেবা</span>

          <div className="topbar-contact">
            <a href="tel:01622823107">01622823107</a>
            <a href="mailto:shamimhiader12@gmail.com">
              shamimhiader12@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="/" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <Building2 size={23} />
            </span>

            <span>
              <strong>Empire Engineering</strong>
              <small>Limited</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/" onClick={closeMenu}>হোম</a>
            <a href="/about" onClick={closeMenu}>আমাদের সম্পর্কে</a>
            <a href="/services" onClick={closeMenu}>সেবাসমূহ</a>
            <a href="/projects" onClick={closeMenu}>প্রকল্পসমূহ</a>
            <a href="/knowledge" onClick={closeMenu}>জ্ঞানভান্ডার</a>
            <a href="/resources" onClick={closeMenu}>রিসোর্স</a>
            <a href="/contact" onClick={closeMenu}>যোগাযোগ</a>
          </nav>

          <a href="/knowledge" className="nav-cta">
            <Search size={17} />
            খুঁজুন
            <ArrowRight size={17} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="মেনু"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>
    </>
  )
}