import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { 
  FiArrowUpRight,
  FiFile,
  FiGitCommit,
  FiBookOpen
} from "react-icons/fi";
import { Icon } from "../components/icon"
import { Button } from "../components/button"
import mentor from "../images/mentor.png"

import data from "../data.json"

const ProjectsPage = () => {
  return (
        <Layout>
      <SEO
        title="Projects"
        keywords={[
          `Emmanuel Daniel`,
          `Emmanuel Gatwech`,
          `react`,
          `Node.js`,
          `Eman`,
          `Junubiman`,
          `South Sudan`,
          `Juba`,
          `Software Engineer`,
        ]}
      />
        <h1 className="heading">Projects</h1>
        <Filter>
              <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <Icon><FiFile /></Icon> Professional
          </a>
        </li>
        <li>
          <a href="https://twitter.com/junubiman" target="_blank"> <Icon><FiGitCommit /></Icon> Open Source
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <Icon><FiBookOpen/></Icon> Educational
          </a>
        </li>
      </Filter>
              <div>
        {data.projects.map(project => (
          <ProjectSummary project={project} key={project.id} />
        ))}
      </div>
      </Layout >
  )
}

const Project = styled.div`
  border-radius: var(--border-radius);
  -webkit-animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  display: flex;
  padding: var(--padding);
  margin: 1rem auto;
  width: 75%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border-bottom: var(--colored-border);
  border-top: var(--colored-border);
`

const Title = styled.h4`
  width: fit-content;
  color: var(--accent-color);
`
export const ProjectSummary = ({ project }) => {
  return (
    <Project>
      <div>
      <Title>
        {project.name} <FiArrowUpRight />
      </Title>
      <p>{project.summary}</p>
    </div>
  </Project>
  )
}


const Filter = styled.ul`
  list-style-type: none;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  & li {
    border-bottom: solid 0.15rem #FAFAFA;
    border-top: solid 0.15rem #FAFAFA;
    margin: 1rem;
  }
`;

export default ProjectsPage