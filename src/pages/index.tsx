import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Me from "../images/eman.jpg"

import {
  FaArrowRight,
  FaTwitter,
  FaGithubAlt,
  FaMediumM,
  FaStackOverflow,
  FaDev,
  FaLinkedinIn,
  FaArrowAltCircleRight,
} from "react-icons/fa"


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
    <div>
      <div>
        <h1 className="heading">E-Man &amp; the E is for Energy!</h1>
        <div className="profile">
          <div>
            <p>
              I'm a Full-Stack Software Developer who seeks to add value through utilizing technology.
              I like to write code that has impact.
            </p>
            <p>I write Web Apps using React.js, backends in Node.js or Golang.</p>
          </div>
        </div>
        <div className="body">
          <div className="social">
            <h3 className="sub-heading">Social Media</h3>
            <ul>
              <li>
                <a href="https://twitter.com/junubiman" target="_blank">
                  <FaTwitter size="1.5rem" className="icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Emmanuel-Melon" target="_blank">
                  <FaGithubAlt size="1.5rem" className="icon" />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@emmanuelgdaniel" target="_blank">
                  <FaMediumM size="1.5rem" className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/6583352/emmanuel-gabriel"
                  target="_blank"
                >
                  <FaStackOverflow size="1.5rem" className="icon" />
                </a>
              </li>
              <li>
                <a href="https://dev.to/junubiman" target="_blank">
                  <FaDev size="1.5rem" className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
