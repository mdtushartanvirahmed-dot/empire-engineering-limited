import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="/" className="brand">
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
          <a href="/">হোম</a>
          <a href="/about">আমাদের সম্পর্কে</a>
          <a href="/services">সেবাসমূহ</a>
          <a href="/projects">প্রকল্পসমূহ</a>
        </div>

        <div className="footer-column">
          <h4>জ্ঞানভান্ডার</h4>
          <a href="/knowledge">সিভিল ইঞ্জিনিয়ারিং</a>
          <a href="/knowledge?category=concrete">কংক্রিট</a>
          <a href="/knowledge?category=soil">মাটি পরীক্ষা</a>
          <a href="/knowledge?category=surveying">সার্ভেয়িং</a>
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
          © {new Date().getFullYear()} Empire Engineering Limited.
          সর্বস্বত্ব সংরক্ষিত।
        </span>

        <span>Professional Engineering & Construction</span>
      </div>
    </footer>
  )
}