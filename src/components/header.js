import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Head = styled.header`
  margin: 0rem auto;
  background: var(--content-background);
  padding: 1rem;
  display: flex;
  justify-content: center;
`

const Nav = styled.nav`
  & ul {
    list-style-type: none;
  }
  
  & a {
    margin-right: 1rem;
  }
`

const Navbrand = styled.span`
  & a {
  width: fit-content;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  color: var(--accent-color);
  }
`

const Hamburger = styled.div`
  display: none;
`

const Navbar = styled.div`
        max-width: 1024px;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        display: flex;
        align-items:center;
`

const Header = ({ siteTitle }) => (
  <Head title={siteTitle}>
    <Navbar>
      <Navbrand style={{ margin: 0 }}>
        <Link
          to="/"
        >
          Home
        </Link>
      </Navbrand>
      <Nav>
        <Link to="/projects/"> Projects</Link>
        <Link to="/contact/">Contact</Link>
      </Nav>
    </Navbar>
    <title></title>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Eman`,
}

export default Header
