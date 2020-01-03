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
      <div className="center">
        <div className="left">
          <div>
            <h3>What do I do?</h3>
            <ul>
              <li>Web Applications</li>
              <li>Backend & infrastructure</li>
              <li>Software Design & Archiecture</li>
              <li>Messenger & Twitter Bots</li>
            </ul>
          </div>
          <div>
            <h3>What do I do?</h3>
            <ul className='skills'>
              <li>Web Applications</li>
              <li>Backend & infrastructure</li>
              <li>Software Design & Archiecture</li>
              <li>Messenger & Twitter Bots</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="background">
            <h3>Background</h3>
            <p>
              A failed reporter is bonded to an alien entity, one of many
              entities who have invaded Earth. But the entity takes a liking
              to Earth and decides to protect it.
            </p>
          </div>
          <div className="background">
            <h3>Skills & Interests</h3>
            <p>
              A failed reporter is bonded to an alien entity, one of many
              entities who have invaded Earth. But the entity takes a liking
              to Earth and decides to protect it.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage