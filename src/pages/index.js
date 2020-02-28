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
              src="https://pbs.twimg.com/profile_images/1178793207418757120/tNrpT5qa_400x400.jpg"
              alt="damn"
              className="myImage"
            />
          </div>
          <div className="intro">
            <p>
              I'm Eman &amp; I have been writing professional code for almost 3
              years now.
              <br />I like to build creative, fun and simple apps and I also
              hold performance, scalability and maintaiblity at a very high
              regard.
            </p>
          </div>
        </div>
        <div className="body">
          <h3 className="sub-heading">Eman</h3>
          <p>
            I specialize in building and integrating APIs, web and mobile
            application development and sometimes Chatbots.
          </p>
          <p>
            When I'm not writing any code, I spend my time learning about
            Machine Learning, Distributed Systems &amp; other Programming
            Languages.
          </p>
          <h3 className="sub-heading">Interested?</h3>
          <p>
            Sample of some of my favorite & most recent work if you'd like to
            take a look at what I have done & what I can do
          </p>

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
