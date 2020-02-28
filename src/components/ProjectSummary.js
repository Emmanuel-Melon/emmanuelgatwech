import React from "react"
import projectStyles from "./project.module.css"
import Image from "./image"
import { Link } from "gatsby"

import Acham from "../images/acham.png"

import { FaArrowAltCircleRight } from "react-icons/fa"

const ProjectSummary = ({ project }) => {
  return (
    <div className={projectStyles.project}>
      <div>
        <h3 className={projectStyles.title}>
          <span className={projectStyles.number}>#{project.id}</span>  -  {project.name}{" "}
          {!project.completed ? <span>(Work in Progress)</span> : null}
        </h3>
        <p>{project.summary}</p>
        <div className={projectStyles.imageWrapper}>
          <div className={projectStyles.left}>
            <div>
              <h4>Features</h4>
              <p>Summary of my work</p>
              <ul className={projectStyles.points}>
                {project.points.map(point => (
                  <li className={projectStyles.point}> {point}</li>
                ))}
              </ul>

              <div className={projectStyles.options}>
                {project.demoAvailable ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    className={projectStyles.button}
                  >
                    View Now <FaArrowAltCircleRight />
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
          <div className={projectStyles.right}>
            <div className={projectStyles.rightImage}>
              {project.image ? <img src={project.imageUrl} alt="acham" className={projectStyles.image}/> : null}
            </div>
          </div>
        </div>
        <h4>Stack</h4>
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
