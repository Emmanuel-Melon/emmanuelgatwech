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
      <h1>Eman</h1>
      <div style={{ width: "100px", margin: '0 auto' }}>
        <img src="http://thedorkfamily.ca/images/gusIcon.png" alt="" />
      </div>
      <div style={{ width: '70%', margin: '1rem auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: "2rem"}} >Eman is a Software Developer from South Sudan who likes to writes <span className="service">articles,</span> <span className="service">mentors,</span> and contributes to <span className="service">open source.</span></h3>
      </div>
      <CurrentWork />
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <Button>Message Me</Button>
      </div>
      <SocialLinks />
    </section>
    <Background />
    <Portfolio />
    <Articles />
  </Layout>
)

export default IndexPage
