import React from "react"
import styled from "styled-components"
import { FiExternalLink } from "react-icons/fi"
import data from "../data.json"

const Content = styled.div`
  margin: 1rem auto;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border-bottom: var(--colored-border);
  border-top: var(--colored-border);
  padding: var(--padding);
  & a {
    color: var(--accent-color);
  }

`

const Demo = ({ summary, name, url }) => {
  return (
    <Content>
      <a href={url}>{name} <FiExternalLink /></a>
      <p>
      {summary}
      </p>
    </Content>
  )
}

const Links = styled.div`
  text-align: center;
`

export const Portfolio = () => {
  return (
    <section>
      <h1>Portfolio</h1>
      <p style={{ textAlign: 'center' }}>I also volunteer as a web development mentor on Coding Coach. I write technical articles on this blog and heavily involved in community building in Juba.</p>
        <div>
          { data.projects.slice(0, 2).map(demo => <Demo {...demo} /> )}
        </div>
        <Links>
          <a href="/projects">View More</a>
        </Links>   
    </section>
  )
}

export const Articles = () => {
  return (
    <section>
      <h1>Articles</h1>
      <p style={{ textAlign: 'center' }}>I like to document experiences. <br /> I write about databases, GraphQL, Distributed Systems and Software Design </p>
        <div>
          { data.articles.slice(0, 2).map(demo => <Demo {...demo} /> )}
        </div>
        <Links>
          <a href="#">View More</a>
        </Links>   
    </section>
  )
}