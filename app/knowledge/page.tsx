import {
  ArrowRight,
  BookOpen,
  Building2,
  Compass,
  Droplets,
  Layers3,
  Mountain,
  Ruler,
  Truck,
} from "lucide-react"

import { InnerPage } from "../../components/inner-page"
import { knowledgeArticles } from "../lib/knowledge-data"

const icons = {
  "building-construction": Building2,
  "slump-test": Layers3,
  "mix-design": Ruler,
  "field-test": Mountain,
  leveling: Compass,
  "2d": Ruler,
  costing: BookOpen,
  highway: Truck,
  "water-drainage": Droplets,
}

export default function KnowledgePage() {
  return (
    <InnerPage
      label="জ্ঞানভাণ্ডার"
      title="সিভিল ইঞ্জিনিয়ারিং জ্ঞানভাণ্ডার"
      description="নির্মাণ, কংক্রিট, সার্ভেয়িং, হাইওয়ে, পানি নিষ্কাশন ও অন্যান্য গুরুত্বপূর্ণ বিষয়ে সহজ ও ব্যবহারিক তথ্য।"
    >
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">বিষয়সমূহ</span>

            <h2>প্রকৌশল বিষয়ভিত্তিক জ্ঞান</h2>

            <p>
              প্রয়োজনীয় বিষয় নির্বাচন করে বিস্তারিত তথ্য,
              ব্যবহারিক নির্দেশনা ও প্রকৌশলগত ধারণা দেখুন।
            </p>
          </div>

          <div className="knowledge-grid">
            {knowledgeArticles.map((article) => {
              const Icon =
                icons[article.slug as keyof typeof icons] || BookOpen

              return (
                <article
                  className="knowledge-card"
                  key={article.slug}
                >
                  <div className="knowledge-card-icon">
                    <Icon size={26} />
                  </div>

                  <span className="knowledge-category">
                    {article.category}
                  </span>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <a href={`/knowledge/${article.slug}`}>
                    বিস্তারিত পড়ুন
                    <ArrowRight size={17} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </InnerPage>
  )
}