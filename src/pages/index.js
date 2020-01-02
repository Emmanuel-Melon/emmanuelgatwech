import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="content">
      <div>
        <p>Hi 🖐🏾, I'm</p>
        <h1>Emmanuel Daniel</h1>
        <p>
          I'm a Full-Stack Software Developer with experience in React/Node.
        </p>

        <p>
          Ever since I wrote my first "Hello World" 5 years ago, I've done
          remote work for agencies, consulted for startups, and collaborated
          with talented people to create digital products for both business and
          consumer use. I'm quietly confident, naturally curious, and
          perpetually working on improving my chops one design problem at a
          time.
        </p>
        <button>
          <Link to="/projects/">See My Work</Link>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
