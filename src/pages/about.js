import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <h1>About Me</h1>
      <p>
        I am a Full-Snack Developer from 🇸🇸South Sudan🇸🇸
        <br /> Friends call me Eman or JunubiMan which literally translates to
        "Southern Guy".{" "}
      </p>
      <h3>What do I do?</h3>
      <ul>
        <li>Web Applications</li>
        <li>Backend & infrastructure</li>
        <li>Software Design & Archiecture</li>
        <li>Messenger & Twitter Bots</li>
      </ul>
    </Layout>
  )
}

export default AboutPage