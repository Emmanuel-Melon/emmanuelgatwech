import React from "react"
import projectStyles from "./project.module.css"
import Image from "./image"
import { Link } from "gatsby"

const ProjectSummary = ({ project }) => {
  return (
    <div className={projectStyles.project}>
      <div>
        <h3>
          #{project.id} - {project.name}
        </h3>
        <p>{project.summary}</p>
        <div className="options">
          <button>
            <a href={project.demo} target="_blank">
              View Demo
            </a>
          </button>
          <button>
            <a href={project.code} target="_blank">
              Source Code
            </a>
          </button>
        </div>
        <div className={projectStyles.skillList}>
          {project.skills.map(skill => (
            <a className={projectStyles.skill}>{skill}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
