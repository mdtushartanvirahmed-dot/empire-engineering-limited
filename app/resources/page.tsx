import {
  Calculator,
  FileText,
  Ruler,
  Scale,
} from "lucide-react"

import { InnerPage } from "../../components/inner-page"

const resources = [
  {
    icon: Calculator,
    title: "কংক্রিট ক্যালকুলেটর",
    text: "প্রয়োজনীয় কংক্রিটের পরিমাণ সম্পর্কে দ্রুত হিসাব করার জন্য।",
  },
  {
    icon: Scale,
    title: "রডের ওজন",
    text: "রডের ব্যাস ও দৈর্ঘ্যের ভিত্তিতে আনুমানিক ওজন নির্ণয়ের সহায়তা।",
  },
  {
    icon: Ruler,
    title: "ইউনিট কনভার্টার",
    text: "প্রকৌশল কাজে ব্যবহৃত বিভিন্ন এককের মধ্যে দ্রুত রূপান্তর।",
  },
  {
    icon: FileText,
    title: "নোট ও গাইড",
    text: "সিভিল ইঞ্জিনিয়ারিংয়ের প্রয়োজনীয় বিষয় সহজভাবে পড়ার জন্য।",
  },
]

export const metadata = {
  title: "রিসোর্স | Empire Engineering Limited",
  description:
    "সিভিল ইঞ্জিনিয়ারিং ক্যালকুলেটর, গাইড ও প্রয়োজনীয় রিসোর্স।",
}

export default function ResourcesPage() {
  return (
    <InnerPage
      label="রিসোর্স"
      title="প্রকৌশল কাজের প্রয়োজনীয় সহায়ক উপকরণ"
      description="শিক্ষা ও দৈনন্দিন প্রকৌশল কাজের জন্য প্রয়োজনীয় কিছু সহায়ক টুল ও তথ্য।"
    >
      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {resources.map((resource) => {
              const Icon = resource.icon

              return (
                <article className="resource-card" key={resource.title}>
                  <div className="knowledge-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.text}</p>

                  <button type="button">
                    শীঘ্রই আসছে
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </InnerPage>
  )
}