import React from "react"
import projectStyles from "./project.module.css"
import Image from "./image"
import { Link } from "gatsby"

import Me from "../images/me.jpeg"

import { FiArrowUpRight } from "react-icons/fa"

const ProjectSummary = ({ project }) => {
  return (
    <div className={projectStyles.project}>
      <div>
      <div className={projectStyles.skills}>
          {
            project.skills.map(skill => <p>{skill} + {" "}</p>)
          }
        </div>
      <div className={projectStyles.body}>
          {project.demoAvailable ? (
          <h4 className="other-heading">
            {project.name}{" "}
            
          </h4>
        ) :         <h4  className="other-heading">
          {project.name}{" "}
           
        </h4>}
        <p>{project.summary}</p>
      </div>
        <div className={projectStyles.actions}>
                
              <div className={projectStyles.options}>
                {project.demoAvailable ? (
                  <button
                    href={project.demo}
                    target="_blank"
                  >
                    View Project
                  </button>
                ) : null}
                {project.sourceAvailable ? (
                  <button
                    href={project.code}
                    target="_blank"
                  >
                    Source Code
                  </button>
                ) : null}
              </div>
            </div>
      </div>
    </div>
  )
}

export default ProjectSummary
