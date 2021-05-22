import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"
import ProjectSummary from "../components/ProjectSummary"

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
              <div className={projectStyles.projectList}>
        {data.projects.map(project => (
          <ProjectSummary project={project} key={project.id} />
        ))}
      </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
