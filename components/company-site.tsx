"use client"

import { useState } from "react"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  X,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "ভবন নির্মাণ",
    text: "আবাসিক, বাণিজ্যিক ও অন্যান্য ভবনের পরিকল্পনা থেকে নির্মাণ পর্যন্ত সমন্বিত সেবা।",
  },
  {
    icon: Ruler,
    title: "নকশা ও পরিকল্পনা",
    text: "প্রকল্পের প্রয়োজন অনুযায়ী বাস্তবসম্মত ও পরিকল্পিত সিভিল ইঞ্জিনিয়ারিং সমাধান।",
  },
  {
    icon: Layers3,
    title: "স্ট্রাকচারাল কাজ",
    text: "ভবনের কাঠামোগত নিরাপত্তা ও স্থায়িত্বকে গুরুত্ব দিয়ে কাজের পরিকল্পনা।",
  },
  {
    icon: HardHat,
    title: "নির্মাণ ব্যবস্থাপনা",
    text: "সময়, উপকরণ ও কাজের মান নিয়ন্ত্রণ করে প্রকল্প ব্যবস্থাপনায় সহযোগিতা।",
  },
  {
    icon: ShieldCheck,
    title: "মান নিয়ন্ত্রণ",
    text: "নির্মাণকাজের প্রতিটি গুরুত্বপূর্ণ ধাপে মান ও নিরাপত্তার বিষয়গুলো পর্যবেক্ষণ।",
  },
  {
    icon: MapPin,
    title: "সাইট উন্নয়ন",
    text: "ভূমি উন্নয়ন, সাইট প্রস্তুতি, ড্রেনেজ ও প্রয়োজনীয় অবকাঠামোগত কাজে সহায়তা।",
  },
]

const projects = [
  {
    title: "আধুনিক আবাসিক ভবন",
    category: "ভবন নির্মাণ",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "বাণিজ্যিক ভবন প্রকল্প",
    category: "বাণিজ্যিক নির্মাণ",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "নির্মাণ পরিকল্পনা ও সাইট",
    category: "ইঞ্জিনিয়ারিং সেবা",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  },
]

const process = [
  {
    number: "০১",
    title: "আলোচনা",
    text: "আপনার প্রয়োজন ও প্রকল্পের লক্ষ্য সম্পর্কে বিস্তারিত আলোচনা।",
  },
  {
    number: "০২",
    title: "পরিকল্পনা",
    text: "প্রকল্পের জন্য প্রয়োজনীয় পরিকল্পনা ও কাজের পরিধি নির্ধারণ।",
  },
  {
    number: "০৩",
    title: "প্রস্তুতি",
    text: "সাইট, উপকরণ, জনবল ও কাজের সময়সূচি প্রস্তুত করা।",
  },
  {
    number: "০৪",
    title: "বাস্তবায়ন",
    text: "পরিকল্পনা অনুযায়ী পেশাদারভাবে নির্মাণকাজ সম্পন্ন করা।",
  },
  {
    number: "০৫",
    title: "হস্তান্তর",
    text: "কাজ যাচাই করে প্রয়োজনীয় সমন্বয়ের পর প্রকল্প হস্তান্তর।",
  },
]

export function CompanySite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <main className="company-site">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং সেবা</span>

          <div className="topbar-contact">
            <a href="tel:01622823107">
              <Phone size={14} />
              01622823107
            </a>

            <a href="mailto:shamimhiader12@gmail.com">
              <Mail size={14} />
              shamimhiader12@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <Building2 size={23} />
            </span>

            <span>
              <strong>Empire Engineering</strong>
              <small>Limited</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
  <a href="/" onClick={closeMenu}>
    হোম
  </a>

  <a href="/about" onClick={closeMenu}>
    আমাদের সম্পর্কে
  </a>

  <a href="/services" onClick={closeMenu}>
    সেবাসমূহ
  </a>

  <a href="/projects" onClick={closeMenu}>
    প্রকল্পসমূহ
  </a>

  <a href="/knowledge" onClick={closeMenu}>
    জ্ঞানভান্ডার
  </a>

  <a href="/resources" onClick={closeMenu}>
    রিসোর্স
  </a>

  <a href="/contact" onClick={closeMenu}>
    যোগাযোগ
  </a>
</nav>

          <a className="nav-cta" href="/knowledge">
  সার্চ করুন
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

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-image" />

        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="hero-badge">
            <span />
            পেশাদার সিভিল ইঞ্জিনিয়ারিং সেবা
          </div>

          <h1>
            পরিকল্পনা থেকে নির্মাণ,
            <br />
            <span>নির্ভরতার সাথে।</span>
          </h1>

          <p>
            আধুনিক নির্মাণ প্রযুক্তি, দক্ষতা ও পরিকল্পনার সমন্বয়ে
            আপনার স্বপ্নের প্রকল্পকে বাস্তবে রূপ দিতে আমরা পাশে আছি।
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              আমাদের সেবাসমূহ
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-light">
              প্রকল্প নিয়ে কথা বলুন
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <CheckCircle2 size={18} />
              <span>পরিকল্পিত কাজ</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>মানসম্মত সেবা</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>নিরাপত্তাকে অগ্রাধিকার</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>EMPIRE ENGINEERING LIMITED</span>
            <span>EST. ENGINEERING & CONSTRUCTION</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
              alt="নির্মাণ কাজ"
            />

            <div className="experience-card">
              <span className="experience-number">EE</span>
              <div>
                <strong>প্রকৌশল</strong>
                <small>নির্মাণে আস্থা</small>
              </div>
            </div>

            <div className="blueprint-label">
              <span>PROJECT</span>
              <strong>PLAN / 01</strong>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">আমাদের সম্পর্কে</span>

            <h2>
              সঠিক পরিকল্পনাই
              <br />
              <span>সফল নির্মাণের ভিত্তি।</span>
            </h2>

            <p className="lead">
              <strong>Empire Engineering Limited</strong> নির্মাণ ও
              সিভিল ইঞ্জিনিয়ারিংয়ের বিভিন্ন কাজে পরিকল্পিত ও
              দায়িত্বশীল সেবা প্রদানের লক্ষ্য নিয়ে কাজ করে।
            </p>

            <p>
              একটি প্রকল্পের শুরু থেকে শেষ পর্যন্ত পরিকল্পনা, নির্মাণ
              ব্যবস্থাপনা, মান নিয়ন্ত্রণ এবং সময়ের প্রতি গুরুত্ব রেখে
              আমরা কার্যকর সমাধান দিতে চেষ্টা করি।
            </p>

            <div className="about-points">
              <div>
                <CheckCircle2 size={19} />
                <span>প্রকল্পের প্রয়োজন অনুযায়ী সমাধান</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>কাজের মান ও নিরাপত্তায় গুরুত্ব</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>স্বচ্ছ ও দায়িত্বশীল কাজের পদ্ধতি</span>
              </div>
            </div>

            <a href="#contact" className="text-link">
              আমাদের সাথে কথা বলুন
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">আমাদের সেবাসমূহ</span>

              <h2>
                আপনার প্রকল্পের জন্য
                <br />
                <span>প্রয়োজনীয় সমাধান।</span>
              </h2>
            </div>

            <p>
              ছোট থেকে বড়—প্রতিটি প্রকল্পের প্রয়োজন অনুযায়ী
              পরিকল্পিত ও বাস্তবসম্মত ইঞ্জিনিয়ারিং সেবা দেওয়াই আমাদের লক্ষ্য।
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">
                    <Icon size={25} />
                  </div>

                  <span className="service-number">০{services.indexOf(service) + 1}</span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="#contact">
                    বিস্তারিত জানুন
                    <ArrowRight size={16} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="feature-strip">
        <div className="container feature-grid">
          <div className="feature-item">
            <ShieldCheck size={28} />
            <div>
              <strong>নিরাপত্তা</strong>
              <span>কাজের গুরুত্বপূর্ণ অংশ</span>
            </div>
          </div>

          <div className="feature-item">
            <Ruler size={28} />
            <div>
              <strong>নির্ভুলতা</strong>
              <span>পরিকল্পনায় গুরুত্ব</span>
            </div>
          </div>

          <div className="feature-item">
            <Clock3 size={28} />
            <div>
              <strong>সময়</strong>
              <span>পরিকল্পিত সময়সূচি</span>
            </div>
          </div>

          <div className="feature-item">
            <HardHat size={28} />
            <div>
              <strong>দক্ষতা</strong>
              <span>অভিজ্ঞতার সমন্বয়</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">প্রকল্প</span>

              <h2>
                কাজের মাধ্যমে
                <br />
                <span>বিশ্বাস তৈরি করি।</span>
              </h2>
            </div>

            <p>
              আমাদের কাজের ধরন ও প্রকল্পের বৈচিত্র্য সম্পর্কে
              একটি ধারণা পেতে নিচের উদাহরণগুলো দেখুন।
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />

                 <span>০{index + 1}</span>
                </div>

                <div className="project-info">
                  <small>{project.category}</small>
                  <h3>{project.title}</h3>

                  <a href="#contact">
                    প্রকল্প সম্পর্কে জানুন
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-section">
        <div className="container why-grid">
          <div className="why-content">
            <span className="section-label">কেন আমাদের বেছে নেবেন</span>

            <h2>
              শুধু নির্মাণ নয়,
              <br />
              <span>দায়িত্ব নিয়ে কাজ।</span>
            </h2>

            <p>
              একটি নির্মাণ প্রকল্পে ভালো ফলাফল পেতে প্রয়োজন সঠিক
              পরিকল্পনা, দক্ষতা, সমন্বয় এবং দায়িত্বশীলতা। আমরা প্রতিটি
              বিষয়কে গুরুত্ব দিয়ে কাজ করার চেষ্টা করি।
            </p>

            <div className="why-list">
              <div>
                <span>০১</span>
                <div>
                  <strong>পরিকল্পিত পদ্ধতি</strong>
                  <p>কাজ শুরুর আগে প্রয়োজনীয় পরিকল্পনা ও প্রস্তুতি।</p>
                </div>
              </div>

              <div>
                <span>০২</span>
                <div>
                  <strong>মানের প্রতি গুরুত্ব</strong>
                  <p>কাজের প্রতিটি ধাপে মান বজায় রাখার চেষ্টা।</p>
                </div>
              </div>

              <div>
                <span>০৩</span>
                <div>
                  <strong>যোগাযোগ ও সমন্বয়</strong>
                  <p>ক্লায়েন্টের প্রয়োজন বুঝে নিয়মিত যোগাযোগ।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-visual">
            <div className="technical-box">
              <span>ENGINEERING</span>
              <strong>BUILD<br />BETTER</strong>

              <div className="technical-lines">
                <i />
                <i />
                <i />
                <i />
              </div>

              <small>PLAN • DESIGN • BUILD</small>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section process-section">
        <div className="container">
          <div className="center-heading">
            <span className="section-label">কাজের প্রক্রিয়া</span>

            <h2>
              একটি প্রকল্প,
              <br />
              <span>একটি পরিষ্কার পরিকল্পনা।</span>
            </h2>

            <p>
              আপনার প্রকল্পকে সহজ ও সংগঠিতভাবে এগিয়ে নিতে
              আমরা ধাপে ধাপে কাজ করি।
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <div className="process-item" key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="section-label">আপনার প্রকল্প প্রস্তুত?</span>

            <h2>
              আপনার পরিকল্পনাকে
              <br />
              বাস্তবে রূপ দিন।
            </h2>

            <p>
              প্রকল্পের বিস্তারিত জানাতে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <a href="#contact" className="btn btn-white">
            আলোচনা শুরু করুন
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">যোগাযোগ</span>

            <h2>
              আপনার প্রকল্প নিয়ে
              <br />
              <span>কথা বলি।</span>
            </h2>

            <p>
              আপনার প্রয়োজন, প্রকল্পের ধরন অথবা নির্মাণসংক্রান্ত
              যেকোনো বিষয়ে আমাদের সাথে যোগাযোগ করতে পারেন।
            </p>

            <div className="contact-details">
              <a href="tel:01622823107" className="contact-detail">
                <span>
                  <Phone size={20} />
                </span>

                <div>
                  <small>ফোন</small>
                  <strong>01622823107</strong>
                </div>
              </a>

              <a
                href="mailto:shamimhiader12@gmail.com"
                className="contact-detail"
              >
                <span>
                  <Mail size={20} />
                </span>

                <div>
                  <small>ইমেইল</small>
                  <strong>shamimhiader12@gmail.com</strong>
                </div>
              </a>

              <div className="contact-detail">
                <span>
                  <MapPin size={20} />
                </span>

                <div>
                  <small>ঠিকানা</small>
                  <strong>বাংলাদেশ</strong>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/8801622823107"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={20} />
              WhatsApp-এ যোগাযোগ করুন
            </a>
          </div>

          <div className="contact-form-wrap">
            <div className="form-header">
              <span>প্রকল্প সম্পর্কে জানান</span>
              <ChevronDown size={18} />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  আপনার নাম
                  <input
                    type="text"
                    name="name"
                    placeholder="আপনার নাম লিখুন"
                    required
                  />
                </label>

                <label>
                  ফোন নম্বর
                  <input
                    type="tel"
                    name="phone"
                    placeholder="01XXXXXXXXX"
                    required
                  />
                </label>
              </div>

              <label>
                ইমেইল
                <input
                  type="email"
                  name="email"
                  placeholder="আপনার ইমেইল"
                />
              </label>

              <label>
                প্রকল্পের ধরন
                <select name="project">
                  <option value="">নির্বাচন করুন</option>
                  <option>আবাসিক ভবন</option>
                  <option>বাণিজ্যিক ভবন</option>
                  <option>স্ট্রাকচারাল কাজ</option>
                  <option>সাইট উন্নয়ন</option>
                  <option>অন্যান্য</option>
                </select>
              </label>

              <label>
                আপনার প্রয়োজন
                <textarea
                  name="message"
                  rows={5}
                  placeholder="আপনার প্রকল্প সম্পর্কে সংক্ষেপে লিখুন..."
                />
              </label>

              <button type="submit" className="submit-btn">
                <span>বার্তা পাঠান</span>
                <ArrowRight size={18} />
              </button>

              {submitted && (
                <div className="success-message">
                  <CheckCircle2 size={19} />
                  আপনার বার্তা গ্রহণ করা হয়েছে। ধন্যবাদ।
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-icon">
                <Building2 size={23} />
              </span>

              <span>
                <strong>Empire Engineering</strong>
                <small>Limited</small>
              </span>
            </a>

            <p>
              পরিকল্পিত নির্মাণ, দায়িত্বশীল প্রকৌশল এবং
              দীর্ঘস্থায়ী সমাধানের প্রত্যয়ে।
            </p>
          </div>

          <div className="footer-column">
            <h4>দ্রুত লিংক</h4>
            <a href="#home">হোম</a>
            <a href="#about">আমাদের সম্পর্কে</a>
            <a href="#services">সেবাসমূহ</a>
            <a href="#projects">প্রকল্প</a>
          </div>

          <div className="footer-column">
            <h4>সেবা</h4>
            <a href="#services">ভবন নির্মাণ</a>
            <a href="#services">নকশা ও পরিকল্পনা</a>
            <a href="#services">স্ট্রাকচারাল কাজ</a>
            <a href="#services">সাইট উন্নয়ন</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>যোগাযোগ</h4>

            <a href="tel:01622823107">
              <Phone size={16} />
              01622823107
            </a>

            <a href="mailto:shamimhiader12@gmail.com">
              <Mail size={16} />
              shamimhiader12@gmail.com
            </a>

            <span>
              <MapPin size={16} />
              বাংলাদেশ
            </span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Empire Engineering Limited. সর্বস্বত্ব সংরক্ষিত।
          </span>

          <span>Professional Engineering & Construction</span>
        </div>
      </footer>
    </main>
  )
}