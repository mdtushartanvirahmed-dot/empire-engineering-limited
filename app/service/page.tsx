import {
  Building2,
  HardHat,
  Layers3,
  MapPin,
  Ruler,
  ShieldCheck,
} from "lucide-react"

import { InnerPage } from "../../components/inner-page"

const services = [
  {
    icon: Building2,
    title: "ভবন নির্মাণ",
    text: "আবাসিক, বাণিজ্যিক ও অন্যান্য ভবনের পরিকল্পনা থেকে নির্মাণ পর্যন্ত প্রয়োজনীয় সহযোগিতা।",
  },
  {
    icon: Ruler,
    title: "নকশা ও পরিকল্পনা",
    text: "প্রকল্পের প্রয়োজন অনুযায়ী পরিকল্পনা, ড্রইং এবং বাস্তবায়নযোগ্য প্রকৌশল সমাধান।",
  },
  {
    icon: Layers3,
    title: "স্ট্রাকচারাল কাজ",
    text: "ভবনের কাঠামো, লোড এবং নিরাপত্তা সম্পর্কিত প্রয়োজনীয় প্রকৌশল সহায়তা।",
  },
  {
    icon: HardHat,
    title: "নির্মাণ ব্যবস্থাপনা",
    text: "সময়, উপকরণ, শ্রমিক এবং কাজের অগ্রগতি সমন্বয়ের মাধ্যমে প্রকল্প ব্যবস্থাপনা।",
  },
  {
    icon: ShieldCheck,
    title: "মান নিয়ন্ত্রণ",
    text: "নির্মাণকাজের গুরুত্বপূর্ণ ধাপে উপকরণ ও কাজের মান পর্যবেক্ষণ।",
  },
  {
    icon: MapPin,
    title: "সাইট উন্নয়ন",
    text: "ভূমি উন্নয়ন, সাইট প্রস্তুতি, ড্রেনেজ ও অন্যান্য অবকাঠামোগত কাজ।",
  },
]

export const metadata = {
  title: "সেবাসমূহ | Empire Engineering Limited",
  description: "Empire Engineering Limited-এর সিভিল ইঞ্জিনিয়ারিং সেবাসমূহ।",
}

export default function ServicesPage() {
  return (
    <InnerPage
      label="সেবাসমূহ"
      title="আপনার প্রকল্পের জন্য প্রয়োজনীয় প্রকৌশল সমাধান"
      description="প্রকল্পের ধরন ও প্রয়োজন অনুযায়ী পরিকল্পনা, নির্মাণ এবং প্রকৌশল সহায়তা।"
    >
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">
                    <Icon size={25} />
                  </div>

                  <span className="service-number">
                    ০{index + 1}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="/contact">
                    আলোচনা করুন
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container content-grid">
          <div>
            <span className="section-label">প্রকৌশল সহায়তা</span>

            <h2 className="page-heading">
              কাজ শুরু করার আগে
              <br />
              <span>সঠিক তথ্য জানা গুরুত্বপূর্ণ।</span>
            </h2>

            <p>
              নির্মাণের আগে মাটির অবস্থা, ভবনের ধরন, প্রয়োজনীয় উপকরণ,
              কাঠামোগত প্রয়োজন এবং কাজের পরিধি সম্পর্কে সঠিক ধারণা
              থাকা প্রয়োজন।
            </p>
          </div>

          <div className="check-list">
            <div>
              <ShieldCheck size={20} />
              <span>প্রকল্পের প্রয়োজন বিশ্লেষণ</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>প্রাথমিক পরিকল্পনা</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>কাজের পরিধি নির্ধারণ</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>মান ও নিরাপত্তা বিবেচনা</span>
            </div>
          </div>
        </div>
      </section>
    </InnerPage>
  )
}