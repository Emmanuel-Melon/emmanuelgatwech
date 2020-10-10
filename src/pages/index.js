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
    <div className="content">
      <div>
        <h1 className="heading">Emmanuel Daniel</h1>
        <div className="profile">
          <div className="profile-image">
            <img
              src={Me}
              alt="damn"
              className="myImage"
            />
          </div>
          <div className="brief">
            <h3 className="sub-heading">Eman and the E is for Energy!</h3>
            <p>
              I wrote my first line of code on September 12th, 2015 & spent 2020 fighting Covid-19 using Code! <br />
            </p>
            <h3 className="sub-heading">Software Engineer @ FreelyFormd</h3>
            <p>
              I like the Backend, cool with the FrontEnd & I'm currently exploring Distributed Systems & Machine Learning.
            </p>
          </div>
        </div>
        <div className="body">
          <h3 className="sub-heading">Interested?</h3>
          <p>My most recent work</p>
          <Link to="/projects/" className="work">
            See My Work <FaArrowAltCircleRight />
          </Link>
          <div className="social">
            <h3 className="sub-heading">Let's Connect</h3>
            <p>Have a chat, share ideas & hopefully work on something :)</p>
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
