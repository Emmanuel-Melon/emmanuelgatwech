import React, { useState, useReducer } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { SocialLinks } from "../components/social"

const Message = styled.textarea`
background: var(--content-background);
border: var(--border);
box-shadow: var(--box-shadow);
width: 100%;
padding: 0.5rem;
`;

const Form = styled.form`
  padding: var(--padding);
  width: 75%;
  margin: 0 auto;
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

  }

  const handleEmailChange = e => {
    const regex = new RegExp(types.get('email'));
    const isValid = regex.test(e.target.value);
    setEmail(e.target.value)
  }

  const handleInputChange = e => {
    const regex = new RegExp(types.get('name'));
    const isValid = regex.test(e.target.value);
    setNameValid(isValid)
    setName(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel   Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} 
      />
      <h1 className='heading'>Contact Me</h1>
      <p style={{ textAlign: 'center', width: 'fit-content', margin: '0 auto' }}>Eman is a Software Developer from South Sudan who likes to writes articles, mentors, and contributes to open source.</p>
      <Form method="post" action="https://formspree.io/mzbdqweb" onSubmit={handleSubmit}>
            <div>
                <Input
                    type="text"
                    placeholder="Name"
                    id="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}/>
                <Input type="email" placeholder="Email Address"  id="Email Address" name="_replyto" value={email} onChange={handleEmailChange}/>
            </div>
            <div>
              <Message id="message" placeholder="Your Message" cols="44" rows="5" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
            </div>
            <Button type="submit">Send </Button>
          </Form>
                  <SocialLinks />
    </Layout>
  )
}

export default ContactPage