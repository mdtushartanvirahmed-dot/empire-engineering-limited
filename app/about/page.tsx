import { CheckCircle2, Target, Eye, ShieldCheck } from "lucide-react"

import { InnerPage } from "../../components/inner-page"

export const metadata = {
  title: "আমাদের সম্পর্কে | Empire Engineering Limited",
  description:
    "Empire Engineering Limited সম্পর্কে বিস্তারিত তথ্য।",
}

export default function AboutPage() {
  return (
    <InnerPage
      label="আমাদের সম্পর্কে"
      title="দায়িত্বশীল প্রকৌশল, পরিকল্পিত নির্মাণ"
      description="নির্মাণ ও সিভিল ইঞ্জিনিয়ারিংয়ের বিভিন্ন ক্ষেত্রে পরিকল্পিত ও বাস্তবসম্মত সমাধান প্রদানের লক্ষ্য নিয়ে Empire Engineering Limited কাজ করে।"
    >
      <section className="section">
        <div className="container content-grid">
          <div>
            <span className="section-label">আমাদের পরিচয়</span>

            <h2 className="page-heading">
              নির্মাণকে আমরা দেখি
              <br />
              <span>দায়িত্বের জায়গা থেকে।</span>
            </h2>

            <p className="large-text">
              Empire Engineering Limited নির্মাণ, সিভিল ইঞ্জিনিয়ারিং,
              পরিকল্পনা ও প্রকল্প ব্যবস্থাপনার সঙ্গে সম্পর্কিত বিভিন্ন
              কাজে পেশাদার ও দায়িত্বশীল সেবা প্রদানের লক্ষ্য নিয়ে কাজ করে।
            </p>

            <p>
              একটি প্রকল্প সফল করতে শুধু নির্মাণ করলেই হয় না। প্রয়োজন
              সঠিক পরিকল্পনা, উপযুক্ত উপকরণ, দক্ষ জনবল, মান নিয়ন্ত্রণ,
              নিরাপত্তা এবং সময়ের সঠিক ব্যবস্থাপনা।
            </p>

            <p>
              আমাদের লক্ষ্য হলো প্রকল্পের প্রয়োজন বুঝে বাস্তবসম্মত
              সমাধান প্রদান করা এবং কাজের প্রতিটি গুরুত্বপূর্ণ ধাপে
              দায়িত্বশীলভাবে সহযোগিতা করা।
            </p>
          </div>

          <div className="info-panel">
            <div>
              <Target size={28} />
              <h3>আমাদের লক্ষ্য</h3>
              <p>
                পরিকল্পিত ও মানসম্মত নির্মাণের মাধ্যমে কার্যকর
                ইঞ্জিনিয়ারিং সমাধান প্রদান।
              </p>
            </div>

            <div>
              <Eye size={28} />
              <h3>আমাদের দৃষ্টিভঙ্গি</h3>
              <p>
                আধুনিক প্রযুক্তি ও প্রকৌশল জ্ঞানকে কাজে লাগিয়ে
                নির্ভরযোগ্য সেবা তৈরি করা।
              </p>
            </div>

            <div>
              <ShieldCheck size={28} />
              <h3>আমাদের অঙ্গীকার</h3>
              <p>
                নিরাপত্তা, মান, স্বচ্ছতা ও দায়িত্বশীলতাকে গুরুত্ব দেওয়া।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="center-heading">
            <span className="section-label">আমাদের মূল্যবোধ</span>

            <h2>
              কাজের প্রতিটি ধাপে
              <br />
              <span>কিছু বিষয় গুরুত্বপূর্ণ।</span>
            </h2>
          </div>

          <div className="value-grid">
            {[
              "নিরাপত্তা",
              "মান নিয়ন্ত্রণ",
              "সময়ের প্রতি দায়িত্ব",
              "সঠিক পরিকল্পনা",
              "স্বচ্ছ যোগাযোগ",
              "দীর্ঘস্থায়ী সমাধান",
            ].map((item) => (
              <div className="value-card" key={item}>
                <CheckCircle2 size={21} />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPage>
  )
}