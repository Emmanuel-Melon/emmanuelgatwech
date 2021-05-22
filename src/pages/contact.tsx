import React, { useState, useReducer } from "react"
import contactStyles from '../components/contact.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import { FaArrowAltCircleRight, FaUserAlt, FaInbox, FaEdit } from "react-icons/fa"

const Header = styled.div`
  background: #222222;
  border-radius: 1.5rem;
  color: #fff;
  display: flex;
  width: 100%;
  border: solid 1px #eee;
  margin: 0 auto 0.5em;
  padding-left: 1.5em;
`


const types = new Map();
types.set('email', /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
types.set('name', /[a-z]/);
types.set('message', /[a-z]/);


const ContactPage = () => {
  const [isEmailValid, setEmailValid] = useState(false)
  const [isNameValid, setNameValid] = useState(false)
  const [isMessageValid, setMessageValid] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formErrors, setFormErrors] = useState({})

  const handleSubmit = e => {
    console.log('handleSubmit')
  }

  const handleEmailChange = e => {
    const regex = new RegExp(types.get('email'));
    const isValid = regex.test(e.target.value);
    console.log(isValid)
    setEmail(e.target.value)
  }

  // conditional style names in styled-components
  const handleInputChange = e => {
    const regex = new RegExp(types.get('name'));
    const isValid = regex.test(e.target.value);
    console.log(isValid)
    setNameValid(isValid)
    setName(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <Header>
        <div>
              <h1 className='sub-heading'>Get In Touch</h1>
      <p className={ (isNameValid) ? 'red' : 'blue' }>
        Let's have a little chat
      </p></div>
      </Header>
      <div className={contactStyles.content}>
          <form className={contactStyles.form} method="post" action="https://formspree.io/mzbdqweb" onSubmit={handleSubmit}>
            <div className={contactStyles.user}>
                <label className={contactStyles.label}>
                  <span className={contactStyles.text}>Your Name <FaUserAlt/> </span>
                  <input
                    type="text"
                    placeholder="Name"
                    id="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}/>
                </label>
                <label className={contactStyles.label}>
                  <span className={contactStyles.text}>Email Address<FaInbox/> </span>
                  <input type="email" placeholder="Email Address"  id="Email Address" name="_replyto" value={email} onChange={handleEmailChange}/>
                </label>
            </div>
            <div>
              <label className={contactStyles.label}>
                <span className={contactStyles.text}>Your Message <FaEdit/> </span>
                <textarea id="message" placeholder="Your Message" cols="30" rows="5" className={contactStyles.message} name="message" value={message} onChange={e => setMessage(e.target.value)}/>
              </label>
            </div>
            <button type="submit" className={contactStyles.submit}>Send! <FaArrowAltCircleRight /> </button>
          </form>
      </div>
    </Layout>
  )
}

export default ContactPage

// use form labels to indicate validity status of inputs and have them light up green or red
