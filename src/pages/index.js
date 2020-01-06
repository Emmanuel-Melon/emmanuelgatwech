import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <h1>Emmanuel Daniel</h1>
        <p>
          I am a Full-Snack Developer from 🇸🇸South Sudan🇸🇸 Friends call me Eman
          or JunubiMan which literally translates to "Southern Guy".
        </p>
        <h3>The Beginnings</h3>
        <p>
          I wrote my first "Hello, World" in C on the 12th of September, 2015.{" "}
          <br />
          This was followed by a very long of making mistakes and learning from
          them to captiously grow to where I am at today.
          <br />A few months later, I got introduced to HTML/CSS and JavaScript
          and I built my very first website; it wasn't so great but that's how I
          fell in love with Web Development.
        </p>
        <h4>Wanna know more?</h4>
        <button>
          <Link to="/projects/">See My Work</Link>
        </button>
        <div className="social">
          <h3>Find Me</h3>
          <ul>
            <li>
              <a href="https://twitter.com/junubiman" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/Emmanuel-Melon" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://medium.com/@emmanuelgdaniel" target="_blank">
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
