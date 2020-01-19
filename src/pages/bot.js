import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

const BotPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <div className='main'>
        <div>
          <h1 className='sub-heading'>
            Chat Bot Development
          </h1>
          <p>For smart &amp; non-smart bots.</p>
        </div>
      </div>
      <div className='offer'>
      <div>
        <h3 className='sub-heading'>Facebook Messenger Bots</h3>
        <p>Details coming soon!</p>
      </div>
      <div>
        <h3 className='sub-heading'>Twitter Bots</h3>
        <p>Details coming soon!</p>
      </div>
      </div>
    </Layout>
  )
}

export default BotPage
