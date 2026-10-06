import { ArrowRight } from "lucide-react"

import { InnerPage } from "../../components/inner-page"

const projects = [
  {
    title: "আধুনিক আবাসিক ভবন",
    category: "ভবন নির্মাণ",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description:
      "আবাসিক ভবনের পরিকল্পনা ও নির্মাণের একটি উদাহরণ।",
  },
  {
    title: "বাণিজ্যিক ভবন প্রকল্প",
    category: "বাণিজ্যিক নির্মাণ",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description:
      "বাণিজ্যিক স্থাপনার পরিকল্পনা ও নির্মাণ ব্যবস্থাপনার উদাহরণ।",
  },
  {
    title: "নির্মাণ পরিকল্পনা ও সাইট",
    category: "ইঞ্জিনিয়ারিং সেবা",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    description:
      "সাইট পরিকল্পনা ও নির্মাণ কার্যক্রমের একটি নমুনা।",
  },
]

export const metadata = {
  title: "প্রকল্পসমূহ | Empire Engineering Limited",
  description: "নির্মাণ ও প্রকৌশল প্রকল্পসমূহ।",
}

export default function ProjectsPage() {
  return (
    <InnerPage
      label="প্রকল্পসমূহ"
      title="পরিকল্পনা থেকে বাস্তবায়ন"
      description="বিভিন্ন ধরনের নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং প্রকল্পের কাজের ধরন সম্পর্কে ধারণা নিন।"
    >
      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span>০{index + 1}</span>
                </div>

                <div className="project-info">
                  <small>{project.category}</small>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <a href="/contact">
                    প্রকল্প নিয়ে আলোচনা করুন
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </InnerPage>
  )
}