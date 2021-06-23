import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { 
  FiTwitter,
  FiGithub,
  FiArrowUpRight,
  FiFile,
} from "react-icons/fi";

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

      </Layout >
  )
}

const Project = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  -webkit-animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  display: flex;
  padding: 1rem;
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background: rgba(14, 4, 5, 0.2);
`

const Title = styled.h4`
width: fit-content;
`

const Actions = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  padding: 1rem;
`

export const ProjectSummary = ({ project }) => {
  return (
    <Project>
      <div>
      <div>
          <h4 className="other-heading">
            {project.name} <FiArrowUpRight />
          </h4>
        <p>{project.summary}</p>
      </div>
      <div>  
        <div>
          {
            project.demoAvailable ? (
              <button href={project.demo} target="_blank">
                View Project
              </button>
            ) : null
          }
          {
            project.sourceAvailable ? (
              <button href={project.code} target="_blank">
                Source Code
              </button>
            ) : null
          }
        </div>
      </div>
    </div>
  </Project>
  )
}


export const ProjectList = () => {
  return (
    <>
    <div className="main">
        <div>
          <h1 className="heading">Projects</h1>
        </div>
      </div>
      <div className="filtered">
      <div className="filter">
      <ul className="social">
              <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiFile className="icon" /> Professional <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/junubiman" target="_blank"> <FiTwitter className="icon" /> Open Source <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiGithub className="icon" /> Educational <FiArrowUpRight />
          </a>
        </li>
      </ul>
      </div>
              <div>
        {data.projects.map(project => (
          <ProjectSummary project={project} key={project.id} />
        ))}
      </div>
      </div>
    </>
  )
}



export default ProjectsPage