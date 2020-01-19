import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <h1 className='sub-heading'>An Article</h1>
      <p>
        Really Love doing this shit tbh
      </p>
    </Layout>
  )
}

export default BlogPage
