import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      borderBottom: `solid 0.1em #333`,
      boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `1.5rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333`,
            textDecoration: `underline`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <Link to="/projects/">👨🏾‍💻 Projects</Link>
        <Link to="/contact/">📞 Contact</Link>
        <Link to="/projects/">Resume</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
