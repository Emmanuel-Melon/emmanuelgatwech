import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

const ResumePage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <div className='main'>
      <div>
        <h1 className='sub-heading'>My Resume</h1>
        <p>COMING SOON!</p>
      </div>
    </div>
    </Layout>
  )
}

export default ResumePage
