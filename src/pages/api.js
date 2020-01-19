import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

const APIPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <div className='main'>
        <div>
          <h1 className='sub-heading'>
            API Development & Integration
          </h1>
          <p>For all of your API needs</p>
        </div>
      </div>
      <div className='offer'>
      <div>
        <h3 className='sub-heading'>API Development</h3>
        <p>Details coming soon!</p>
      </div>
      <div>
        <h3 className='sub-heading'>API Integration</h3>
        <p>Details coming soon!</p>
      </div>
      </div>
    </Layout>
  )
}

export default APIPage
