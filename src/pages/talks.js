import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

import styled from "styled-components"
const TalkSummary = styled.div`
  background: rgba(14, 4, 5, 0.5);
  border-bottom: solid 0.2em #f83600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  display: flex;
  padding: 0.9em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Title = styled.h3`
  font-size: 1.1rem;
`

const talks = [
  {
    id: 1,
    title: "Intro to the JAMStack!",
    summary: "COMING SOON",
  },
  {
    id: 2,
    title: "Scale & Speed up your APIs with Redis",
    summary: "Caching, PubSub, MultiCluster",
  },
]

const TalkPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <div className="main">
        <div>
          <h1 className="sub-heading">My Talks</h1>
          <p>Where I speak about topics I'm passionate about</p>
        </div>
      </div>
      <div>
        {talks.map(talk => {
          return (
            <TalkSummary key={talk.id}>
              <div>
                <Title>
                  #{talk.id} - {talk.title}
                </Title>
                <p>{talk.summary}</p>
              </div>
            </TalkSummary>
          )
        })}
      </div>
    </Layout>
  )
}

export default TalkPage
