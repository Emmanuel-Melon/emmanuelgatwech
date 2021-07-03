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
      <>
    <h1 className="heading">Projects</h1>
<Filter>
<li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          All
          </a>
        </li>
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
    </>
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
  background: var(--content-background);
  border: solid 0.2rem var(--content-background);
`

const Title = styled.h4`
  width: fit-content;
  color: var(--secondary-color);
`
export const ProjectSummary = ({ project }) => {
  return (
    <Project>
            <div style={{  width: '250px', maxWidth: '250px', padding: '1rem' }}>
          <img src={mentor} alt="mentor" />
        </div>
      <div>
      <Title>
            {project.name}
          </Title>
        <p>{project.summary}</p>
      <div>
        {
          project.demoAvailable ? (
            <Button href={project.demo} target="_blank">
              <Icon><FiArrowUpRight /></Icon> View Project
            </Button>
          ) : null
        }
        {
          project.sourceAvailable ? (
            <Button href={project.code} target="_blank">
              <Icon><FiArrowUpRight /></Icon> Source Code
            </Button>
          ) : null
        }
      </div>
    </div>
  </Project>
  )
}


const Filter = styled.ul`
  list-style-type: none;
  justify-content: center;
  display: flex;

  & li {
      border-bottom: solid 0.15rem var(--content-background);
  box-shadow: var(--box-shadow);
  border-top: solid 0.15rem var(--content-background);
  box-shadow: var(--box-shadow);
  margin: 1rem;
  }
`;

export default ProjectsPage