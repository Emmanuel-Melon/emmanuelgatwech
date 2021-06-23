import React, { useState, useReducer } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

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

  }

  const handleEmailChange = e => {
    const regex = new RegExp(types.get('email'));
    const isValid = regex.test(e.target.value);
    console.log(isValid)
    setEmail(e.target.value)
  }

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
      <div className="up">
        <div>
        <h1 className='heading'>Contact Me<span className="period">.</span></h1>
        <p>
        Send me a message or two and I will most likely reply!
        </p>
        </div>
      </div>
      <div>
        <div>
        <form method="post" action="https://formspree.io/mzbdqweb" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    id="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}/>
                <input type="email" placeholder="Email Address"  id="Email Address" name="_replyto" value={email} onChange={handleEmailChange}/>
            </div>
            <div>
              <textarea id="message" placeholder="Your Message" cols="30" rows="5" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
            </div>
            <button type="submit">Send </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage