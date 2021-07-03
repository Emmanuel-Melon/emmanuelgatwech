import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Recent from "../components/recent"
import { SocialLinks } from "../components/social"
import { CurrentWork, Education, PreviousExperience } from "../components/experience"
import { Button } from "../components/button"
import { Icon } from "../components/icon"
import { FiSend } from "react-icons/fi"
import mentor from "../images/mentor.png"

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
      <h1>Emmanuel Daniel</h1>
      <div style={{ padding: '1rem'}}>
      <p style={{ textAlign: 'center'}}>Call me Eman, and the E is for Energy</p>
      <p  style={{ textAlign: 'center', width: '60%', margin: '0 auto' }}> I am a Full-Stack Software Developer with nearly 3 years of relevant experience and a proven track record of success in achieving extraordinary results.</p>
      </div>
      <CurrentWork />
      <div className="mentor">
        <div style={{ flex: '2', marginLeft: '1rem' }}>
          <h4>Mentorship Available</h4>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <p>Available for mentoring on Coding Coach</p>
          <Button>Message Me!</Button>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
    <section>
      <h1>Background</h1>
      <p style={{ textAlign: 'center' }}>I wrote my first line of code on the 12th of September 2015, in the C language!</p>
      <div className="mentor">
        <div style={{ flex: '2', marginLeft: '1rem' }}>
        <h3>Work Experience</h3>
          <PreviousExperience />
          <div style={{ display: 'flex', alignItems: 'center'}}>
          </div>
        </div>
      </div>      
      <div className="mentor">
        <div style={{ flex: '2', marginLeft: '1rem' }}>
        <h3>Education</h3>
          <Education />
          <div style={{ display: 'flex', alignItems: 'center'}}>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Recent />
    </section>
  </Layout>
)

export default IndexPage
