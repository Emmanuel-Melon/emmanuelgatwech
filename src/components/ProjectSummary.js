import React from "react"
import projectStyles from "./project.module.css"
import Image from "./image"
import { Link } from "gatsby"

const ProjectSummary = ({ project }) => {
  return (
    <div className={projectStyles.project}>
      <div>
        <h3>
          #{project.id} - {project.name}{" "}
          {!project.completed ? <span>(Work in Progress)</span> : null}
        </h3>
        <p>{project.summary}</p>
        <div className="options">
          { project.demoAvailable ? (
            <button className={projectStyles.button}>
              <a href={project.demo} target="_blank">
                View Demo
              </a>
            </button>
          ) : (
            <button className={projectStyles.button}>
              <a href={project.demo} target="_blank">
                Request Demo
              </a>
            </button>
          )}
          { project.sourceAvailable ? (
            <button className={projectStyles.button}>
              <a href={project.code} target="_blank">
                Source Code
              </a>
            </button>
          ) : null}
        </div>

        <div className={projectStyles.skillList}>
          {project.skills.map(skill => (
            <p className={projectStyles.skill}> {skill}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
