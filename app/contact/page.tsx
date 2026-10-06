"use client"

import { useState } from "react"

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"

import { InnerPage } from "../../components/inner-page"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <InnerPage
      label="যোগাযোগ"
      title="আপনার প্রকল্প নিয়ে কথা বলি"
      description="আপনার প্রয়োজন, প্রকল্পের ধরন অথবা নির্মাণসংক্রান্ত যেকোনো বিষয়ে আমাদের সাথে যোগাযোগ করুন।"
    >
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">
              সরাসরি যোগাযোগ
            </span>

            <h2>
              আপনার প্রয়োজন
              <br />
              <span>আমাদের জানান।</span>
            </h2>

            <p>
              প্রকল্প শুরু করার আগে আপনার প্রয়োজনীয় তথ্য,
              কাজের ধরন এবং সম্ভাব্য পরিকল্পনা নিয়ে আমাদের সাথে
              আলোচনা করতে পারেন।
            </p>

            <div className="contact-details">
              <a
                href="tel:01622823107"
                className="contact-detail"
              >
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
                  <strong>
                    shamimhiader12@gmail.com
                  </strong>
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
                  <option value="">
                    নির্বাচন করুন
                  </option>

                  <option>
                    আবাসিক ভবন
                  </option>

                  <option>
                    বাণিজ্যিক ভবন
                  </option>

                  <option>
                    স্ট্রাকচারাল কাজ
                  </option>

                  <option>
                    সাইট উন্নয়ন
                  </option>

                  <option>
                    অন্যান্য
                  </option>
                </select>
              </label>

              <label>
                আপনার প্রয়োজন

                <textarea
                  name="message"
                  rows={6}
                  placeholder="আপনার প্রকল্প সম্পর্কে লিখুন..."
                />
              </label>

              <button
                type="submit"
                className="submit-btn"
              >
                বার্তা পাঠান
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
    </InnerPage>
  )
}