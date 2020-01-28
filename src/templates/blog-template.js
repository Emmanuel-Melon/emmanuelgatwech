import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const Wrapper = styled.section`
  background: rgba(14, 4, 5, 0.5);
  color: #ffffff;
  padding: 1.5rem;
  border-bottom: solid 0.2em #f83600;
`

const Title = styled.h1`
  color: #f83600;
  font-size: 1.5rem;
  
  &:after {
  display: block;
  content: "";
  height: 0.5rem;
  width: 0.5rem;
  padding: 0.1em;
  background: #ffffff;
  border-radius: 50%;
}
`

const Subtitle = styled.h3`
  font-size: 1.2rem;
`

export default ({ pageContext: { article } }) => (
  <Layout>
    <SEO title="Blog Article" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper>
      <div>
        <Title> #{article.id} -  {article.title}</Title>
        <Subtitle>{article.subtitle}</Subtitle>
        <p>{article.summary}</p>
        <p>COMING SOON...</p>
      </div>
    </Wrapper>
  </Layout>
)
