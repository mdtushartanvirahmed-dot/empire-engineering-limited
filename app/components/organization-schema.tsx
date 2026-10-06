export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Empire Engineering Limited",
    url: "https://empire-engineering-limited.vercel.app",
    email: "shamimhiader12@gmail.com",
    telephone: "+8801622823107",
    description:
      "Empire Engineering Limited is a civil engineering and construction services company.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}