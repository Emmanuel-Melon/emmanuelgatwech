import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

const WebPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <div className='main'>
        <div>
          <h1 className='sub-heading'>
            Web Development
          </h1>
          <p>I build stunning mobile & web apps.</p>
        </div>
      </div>
      <div className='offer'>
      <div>
        <h3 className='sub-heading'>Single Page Applications</h3>
        <p>Details coming soon!</p>
      </div>
      <div>
        <h3 className='sub-heading'>Static Websites &amp; Landing Pages</h3>
        <p>Details coming soon!</p>
      </div>
      </div>
    </Layout>
  )
}

export default WebPage
