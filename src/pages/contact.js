import React from "react"
import contactStyles from '../components/contact.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"




const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <div className='main'>
        <div>
              <h1 className='sub-heading'>Contact Me</h1>
      <p>
        Let's have a little chat
      </p></div>
      </div>
      <div className={contactStyles.content}>
          <form className={contactStyles.form} method="post" action="https://formspree.io/mzbdqweb">
            <div className={contactStyles.user}>
                <label className={contactStyles.label}>
                  <span className={contactStyles.text}>Name</span>
                  <input type="text" placeholder="Name" id="Name" name="name" />
                </label>
                <label className={contactStyles.label}>
                  <span className={contactStyles.text}>Email</span>
                  <input type="email" placeholder="Email Address"  id="Email Address" name="_replyto"/>
                </label>
            </div>
            <div>
              <label className={contactStyles.label}>
                <span className={contactStyles.text}>Message</span>
                <textarea id="message" placeholder="Your Message" cols="30" rows="5" className={contactStyles.message} name="message" />
              </label>
            </div>
            <button type="submit" className={contactStyles.submit}>Send</button>
          </form>
      </div>
    </Layout>
  )
}

export default ContactPage

// use form labels to indicate validity status of inputs and have them light up green or red
