import React from "react"
import { FiArrowUpRight } from "react-icons/fa"
import styled from "styled-components"

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
