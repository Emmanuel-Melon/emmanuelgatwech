import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from 'styled-components'

const Head = styled.header`
    background: rgb(14,4,1);
  background: linear-gradient(9deg, rgba(14,4,1,0.8) 0%, rgba(46,17,8,0.8) 35%, rgba(24,5,1,0.8) 100%);
  margin-bottom: 1.5em;
  padding: 1rem;
 
`

const Header = ({ siteTitle }) => (
  <Head
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
        display: `flex`,
        justifyContent: `space-between`,
        color: `#f83600`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#f83600`,
            textDecoration: `underline`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <AniLink to="/projects/"> Projects</AniLink>
        <Link to="/blog/">Blog</Link>
        <Link to="/contact/">Contact</Link>
        <Link to="/talks/">Talks</Link>
        <Link to="/resume/">Resume</Link>
      </div>
    </div>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
