import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaBars } from 'react-icons/fa'

import styled from 'styled-components'

const Head = styled.header`
background: rgba(14, 4, 5, 0.5);
  margin-bottom: 1.5rem;
`

const Nav = styled.nav`
    & ul {
    list-style-type: none;
  }
  
  & a {
    margin-right: 1rem;
  }
`

const Navbrand = styled.h3`
  & a {
    color: #fff;
    font-size: 1.5rem;
    transform: rotate(90deg);
  }
`

const Hamburger = styled.div`
  display: none;
`


const Navbar = styled.div`
        margin: 0 auto;
        max-width: 960px;
        padding: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
        color: #f83600;
`


const Header = ({ siteTitle }) => (
  <Head
    title={siteTitle}
  >
    <Navbar>
      <Navbrand style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `underline`,
          }}
        >
          {siteTitle}
        </Link>
      </Navbrand>
      <Nav>
        <AniLink to="/projects/"> Projects</AniLink>
         <Link to="/blog/">Blog</Link>
          <Link to="/contact/">Contact</Link>
          <Link to="/talks/">Talks</Link>
      </Nav>
    </Navbar><title></title>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Eman`,
}

export default Header
