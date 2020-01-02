import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <h1>About</h1>
      <p>
        I'm a very laid back fella, I respond quickly but don't bother
        contacting me on weekends.
      </p>
      <h3>Leave a Message</h3>
      <form>
        <div>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Organization" />
          </div>
        </div>
        <div>
          <input type="text" placeholder="Subject" />
        </div>
        <div>
          <textarea placeholder="Your Message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default ContactPage
