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
          I'm a Software Developer from South Sudan, friends call me Eman
          or JunubiMan which literally translates to "Southern Guy". <br />
          I like jogging, video games & playing chess.
        </p>
        <h3 className='sub-heading'>About Me</h3>
        <p>
          I wrote my first "Hello, World" in C on the 12th of September, 2015.{" "}
          <br />
          This was followed by a very long of making mistakes and learning from
          them to captiously grow to where I am at today.
        </p>
        <h3 className='sub-heading'>What can I do for you?</h3>
        <p>
          I can help you build accessible, performant and scalable applications using software's practices.
        </p>
        <ul className='me'>
          <li><Link to='api'>API Development & Integration</Link></li>
          <li><Link to='web'>Web &amp; Mobile Development</Link></li>
          <li><Link to='bot'>Chat Bots</Link></li>
          <li><Link to='other'>Custom Software</Link></li>
        </ul>
        <h3 className='sub-heading'>Wanna know more?</h3>
        <p>Sample of some of my favorite & most recent work if you'd like to take a look at what I have done & what I can do</p>
        <button className='work'>
          <Link to="/projects/" className='work-link'>See My Work <FaArrowRight /></Link>
        </button>
        <div className="social">
          <h3 className='sub-heading'>Find Me</h3>
          <p>Let's connect & hopefully work on something</p>
          <ul>
            <li>
              <a href="https://twitter.com/junubiman" target="_blank">
                <FaTwitter size='2rem' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://github.com/Emmanuel-Melon" target="_blank">
                <FaGithubAlt size='2rem' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@emmanuelgdaniel" target="_blank">
                <FaMediumM size='2rem' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emmanuel-gatwech/" target="_blank">
                <FaLinkedinIn size='2rem' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/6583352/emmanuel-gabriel" target="_blank">
                <FaStackOverflow size='2rem' className='icon' />
              </a>
            </li>
            <li>
              <a href="https://dev.to/junubiman" target="_blank">
                <FaDev size='2rem' className='icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
