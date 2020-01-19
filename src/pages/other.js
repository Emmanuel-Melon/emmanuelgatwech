import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

const OtherPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <div className='main'>
        <div>
          <h1 className='sub-heading'>
            Custom Software Solution
          </h1>
          <p>For any custom Software Solutions</p>
        </div>
      </div>
      <div className='offer'>
        <div>
          <h3 className='sub-heading'>System Design &amp; Architecture</h3>
          <p>Details coming soon!</p>
        </div>
        <div>
          <h3 className='sub-heading'>Machine Learning Models</h3>
          <p>Details coming soon!</p>
        </div>
      </div>
    </Layout>
  )
}

export default OtherPage
