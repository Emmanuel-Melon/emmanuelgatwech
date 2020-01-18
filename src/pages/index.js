import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  FaArrowRight,
  FaTwitter,
  FaGithubAlt,
  FaMediumM,
  FaStackOverflow,
  FaDev,
  FaLinkedinIn,
} from 'react-icons/fa'

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
    <div className="content">
      <div>
        <h1 className='heading'>Full-Snack Developer</h1>
        <p className='intro'>
          Hi there, my name is Emmanuel Daniel<br />
          I am a Freelance Developer from 🇸🇸South Sudan🇸🇸, friends call me Eman
          or JunubiMan which literally translates to "Southern Guy".
        </p>
        <h3 className='sub-heading'>My Journey</h3>
        <p>
          I wrote my first "Hello, World" in C on the 12th of September, 2015.{" "}
          <br />
          This was followed by a very long of making mistakes and learning from
          them to captiously grow to where I am at today.
          <br />A few months later, I got introduced to HTML/CSS and JavaScript
          and I built my very first website; it wasn't so great but that's how I
          fell in love with Web Development.
        </p>
        <h3 className='sub-heading'>What I do now?</h3>
        <ul className='me'>
          <li>Chat Bots</li>
          <li>Single Web Applications, Landing Pages & Static Websites</li>
          <li>API Development & Integration</li>
          <li>WebRTC & Real-Time Applications</li>
        </ul>
        <h3 className='sub-heading'>Wanna know more?</h3>
        <p>A collection of some my favorite projects.</p>
        <button className='work'>
          <Link to="/projects/" className='work-link'>See My Work <FaArrowRight /></Link>
        </button>
        <div className="social">
          <h3 className='sub-heading'>Social Media</h3>
          <p>If you wanna reach out</p>
          <ul>
            <li>
              <a href="https://twitter.com/junubiman" target="_blank">
                <FaTwitter size='2em' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://github.com/Emmanuel-Melon" target="_blank">
                <FaGithubAlt size='2em' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@emmanuelgdaniel" target="_blank">
                <FaMediumM size='2em' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emmanuel-gatwech/" target="_blank">
                <FaLinkedinIn size='2em' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/6583352/emmanuel-gabriel" target="_blank">
                <FaStackOverflow size='2em' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://dev.to/junubiman" target="_blank">
                <FaDev size='2em' className='icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage