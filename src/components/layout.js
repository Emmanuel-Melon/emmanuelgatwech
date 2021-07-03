import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Footer = styled.footer`

  padding: 1rem;
  text-align: center;
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className="scroll-container"
          style={{
            margin: `0 auto`,
            maxWidth: 1024,
            marginTop: 16,
            display: "flex",
            justifyContent: 'center'
          }}
        >
          <main>{children}</main>
        </div>
        <Footer>
          <p>Eman &copy; 2021</p>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
