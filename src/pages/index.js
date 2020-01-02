import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Hi 🖐🏾, I'm</p>
    <h1>Emmanuel Daniel</h1>
    <p>
      I'm a Full-Stack Software Developer with experience in React/Node. <br />{" "}
      I enjoy building fast and highly scalable web applications.
    </p>
    <Link to="/projects/">
      <button>See My Work!</button>
    </Link>
  </Layout>
)

export default IndexPage
