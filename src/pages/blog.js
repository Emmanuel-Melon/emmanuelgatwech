import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSummary from '../components/ArticleSummary'

const articles = [
  {
    id: 1,
    title: "How #100DaysOfCode helped me achieve my goals",
    summary: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
    timestamp: Date.now(),
    tags: ["development", "lessons"]
  },
  {
    id: 2,
    title: "How #100DaysOfCode helped me achieve my goals",
    summary: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
    timestamp: Date.now(),
    tags: ["development", "lessons"]
  },
  {
    id: 3,
    title: "How #100DaysOfCode helped me achieve my goals",
    summary: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
    timestamp: Date.now(),
    tags: ["development", "lessons"]
  },
  {
    id: 4,
    title: "How #100DaysOfCode helped me achieve my goals",
    summary: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
    timestamp: Date.now(),
    tags: ["development", "lessons"]
  }
]


const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <h1>My Blog</h1>
      <p>
        Where I share my experiences and my thoughts
      </p>
      {
        articles.map(article => {
          return <ArticleSummary article={article} key={article.id} />
        })
      }
    </Layout>
  )
}

export default BlogPage
