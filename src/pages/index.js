import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Articles, Portfolio } from "../components/recent"
import { SocialLinks } from "../components/social"
import { CurrentWork } from "../components/experience"
import { Background } from "../components/background"
import { Button } from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Emmanuel Daniel`,
        `Emmanuel Gatwech`,
        `react`,
        `Node.js`,
        `Eman`,
        `Junubiman`,
        `South Sudan`,
        `Juba`,
        `Software Engineer`,
      ]}
    />
    <section>
      <div style={{ width: "100px", margin: '0 auto' }}>
        <img src="http://thedorkfamily.ca/images/gusIcon.png" alt="" />
      </div>
      <h1>Eman</h1>
      <div style={{ margin: '1rem auto', textAlign: 'center' }}>
        <p style={{ fontSize: "2.5rem"}} >I like to craft solid and scalable frontend products with great user experiences.</p>
      </div>
      <CurrentWork />
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <Button>Message Me</Button>
      </div>
    </section>
    <Background />
    <Portfolio />
    <Articles />
  </Layout>
)

export default IndexPage
