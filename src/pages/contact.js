import React from "react"
import contactStyles from '../components/contact.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <h1>About</h1>
      <p>
        I'm a very laid back fella, I respond quickly but don't bother
        contacting me on weekends.
      </p>
      <div className={contactStyles.content}>
        <div className={contactStyles.leftPane}>
          <h3>Leave a Message</h3>
          <form className={contactStyles.form} method="post" action="https://formspree.io/mzbdqweb">
            <div className={contactStyles.user}>
                <label className={contactStyles.label}>
                  Name
                  <input type="text" placeholder="Name" id="Name" name="name" />
                </label>
                <label className={contactStyles.label}>
                  Email
                  <input type="text" placeholder="Email Address"  id="Email Address" name="_replyto"/>
                </label>
            </div>
            <div>
              <label className={contactStyles.label}>
                Subject
                <input type="text" placeholder="Subject" id="subject" className={contactStyles.subject} name="subject" />
              </label>
              <label className={contactStyles.label}>
                Message
                <textarea id="message" placeholder="Your Message" cols="30" rows="5" className={contactStyles.message} name="message" />
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
