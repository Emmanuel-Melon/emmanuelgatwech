import React from "react"
import projectStyles from "./project.module.css"
import Image from "./image"
import { Link } from "gatsby"

import Me from "../images/me.jpeg"

import { FaArrowAltCircleRight } from "react-icons/fa"

const ProjectSummary = ({ project }) => {
  return (
    <div className={projectStyles.project}>
      <div>
        {project.demoAvailable ? (
          <h3 className={projectStyles.title}>
            <span className={projectStyles.number}>#{project.id}</span>  -  {project.name}{" "}
            {!project.completed ? <span>(Work in Progress)</span> : null}
          </h3>
        ) :         <h3 className={projectStyles.title}>
          <span className={projectStyles.number}>#{project.id}</span>  -  {project.name}{" "}
          {!project.completed ? <span>(Work in Progress)</span> : null}
        </h3>}
        <p>{project.summary}</p>
        <div className={projectStyles.imageWrapper}>
          <div className={projectStyles.left}>
            <div>
              <div className={projectStyles.options}>
                {project.demoAvailable ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    className={projectStyles.button}
                  >
                    View Project <FaArrowAltCircleRight />
                  </a>
                ) : null}
                {project.sourceAvailable ? (
                  <a
                    href={project.code}
                    target="_blank"
                    className={projectStyles.button}
                  >
                    Source Code <FaArrowAltCircleRight />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
