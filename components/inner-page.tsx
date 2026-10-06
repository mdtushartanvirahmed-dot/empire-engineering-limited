import { ReactNode } from "react"

import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"
import { SiteSearch } from "./site-search"

type InnerPageProps = {
  label: string
  title: string
  description: string
  children: ReactNode
}

export function InnerPage({
  label,
  title,
  description,
  children,
}: InnerPageProps) {
  return (
    <main className="company-site">
      <SiteHeader />

      <section className="inner-hero">
        <div className="inner-hero-grid" />

        <div className="container inner-hero-content">
          <span className="section-label">{label}</span>

          <h1>{title}</h1>

          <p>{description}</p>
        </div>
      </section>

      <section className="inner-search-section">
        <div className="container">
          <SiteSearch />
        </div>
      </section>

      {children}

      <SiteFooter />
    </main>
  )
}