import React from "react"
import contactStyles from '../components/contact.module.css'

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
      <div className={contactStyles.content}>
        <div className={contactStyles.leftPane}>
          <h3>Leave a Message</h3>
          <form className={contactStyles.form}>
            <div className={contactStyles.user}>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Organization" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Subject" className={contactStyles.subject} />
            </div>
            <div>
              <textarea placeholder="Your Message" cols="30" rows="5" className={contactStyles.message} />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
