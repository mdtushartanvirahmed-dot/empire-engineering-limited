import { notFound } from "next/navigation"

import { InnerPage } from "../../../components/inner-page"
import { knowledgeArticles } from "../../lib/knowledge-data"
type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function KnowledgeDetailPage({
  params,
}: PageProps) {
  const { slug } = await params

  const article = knowledgeArticles.find(
    (item) => item.slug === slug
  )

  if (!article) {
    notFound()
  }

  return (
    <InnerPage
      label={article!.category}
      title={article!.title}
      description={article!.description}
    >
      <section className="section">
        <div className="container knowledge-detail">
          <div className="knowledge-detail-main">
            {article!.sections.map((section) => (
              <article
                className="knowledge-detail-card"
                key={section.title}
              >
                <h2>{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.points && (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="knowledge-sidebar">
            <div className="info-panel">
              <span className="section-label">
                গুরুত্বপূর্ণ তথ্য
              </span>

              <h3>প্রকৌশলগত বিষয়</h3>

              <p>
                বাস্তব নির্মাণকাজে যেকোনো পরীক্ষা, ডিজাইন
                বা সিদ্ধান্ত নেওয়ার ক্ষেত্রে অনুমোদিত
                কোড, প্রকল্পের specification এবং যোগ্য
                প্রকৌশলীর পরামর্শ অনুসরণ করা উচিত।
              </p>
            </div>
          </aside>
        </div>
      </section>
    </InnerPage>
  )
}