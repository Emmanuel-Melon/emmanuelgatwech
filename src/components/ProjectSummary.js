import React from "react"
import projectStyles from "./project.module.css"
import Image from "./image"
import { Link } from "gatsby"

const ProjectSummary = ({ project }) => {
  return (
    <div className={projectStyles.project}>
      <Link to='/projects/:id/'>
        <div>
          <h3>
            {project.id} - {project.name}
          </h3>
          <p>{project.summary}</p>
          <div className={projectStyles.skillList}>
            {project.skills.map(skill => (
              <a className={projectStyles.skill}>{skill}</a>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectSummary
