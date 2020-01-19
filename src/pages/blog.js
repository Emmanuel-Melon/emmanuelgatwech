import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSummary from '../components/ArticleSummary'

const articles = [
  {
    id: 1,
    title: "My #100DaysOfCode Journey",
    subtitle: "Don't hold back yourself, realise your full potential",
    summary: "But that's the thing about tech, you can't know everything and you don't have to; Just learn enough to become productive and you'll eventually become really good at what you do because learning is a continuous process.",
    timestamp: Date.now(),
    tags: ["Development", "Self-Reflection", "Career Goals"]
  }
]


const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <div className='main'>
      <div>
      <h1 className='sub-heading'>My Blog</h1>
      <p>
        Where I share my experiences and my thoughts
      </p>
      </div>
      </div>
      {
        articles.map(article => {
          return <ArticleSummary article={article} key={article.id} />
        })
      }
    </Layout>
  )
}

export default BlogPage
