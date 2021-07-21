import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Head = styled.header`
  display: flex;
  justify-content: center;
  border-radius: var(--border-radius);
  padding: 1rem;
`

const Nav = styled.nav`
  border-bottom: var(--colored-border);
  border-top: var(--colored-border);  
  & a {
    padding: var(--padding);
  }
`

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <Head title={siteTitle}>
    <Navbar>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/contact/">Contact</Link>
        <Link to="/projects/"> Projects</Link>
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
