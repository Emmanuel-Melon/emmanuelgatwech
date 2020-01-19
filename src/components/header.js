import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaBars } from 'react-icons/fa'

import styled from 'styled-components'

const Head = styled.header`
  background: rgb(14,4,1);
  background: linear-gradient(9deg, rgba(14,4,1,0.8) 0%, rgba(46,17,8,0.8) 35%, rgba(24,5,1,0.8) 100%);
  margin-bottom: 1.5em;
  padding: 0.5rem;
`

const Nav = styled.nav`
    & ul {
    list-style-type: none;
  }
`

const Navlist = styled.ul`
  display: flex; 
  align-items: center;
`


const Navbrand = styled.h1`
  & a {
    
  }
`

const Hamburger = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
      <Navbrand style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#f83600`,
            textDecoration: `underline`,
          }}
        >
          {siteTitle}
        </Link>
      </Navbrand>
      <Nav>
        <Navlist>
          <li><AniLink to="/projects/"> Projects</AniLink></li>
          <li><Link to="/blog/">Blog</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          <li><Link to="/talks/">Talks</Link></li>
          <li><Link to="/resume/">Resume</Link></li>
        </Navlist>
      </Nav>
      <Hamburger>
        <FaBars size='1.5rem' />
      </Hamburger>
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
