import React from "react"
import styled from "styled-components"
import data from "../data.json"
import { 
  FiBriefcase, 
  FiExternalLink,
  FiBookOpen,
} from "react-icons/fi";

import { Icon } from "./icon"

export const PreviousExperience = () => {
  return (
    <Organizations>
      { data.work.map(org => <Org {...org} key={org.id}/>) }
    </Organizations>
  )
}

export const Education = () => {
  return (
    <Organizations>
      { data.education.map(org => <School {...org} key={org.id}/>)}
    </Organizations>
  )
}

const Org = ({
  name,
  url,
  start,
  finish,
  title
}) => {
  return (
    <Organization>
      <li>
        <div>
          <Icon><FiBriefcase /></Icon> <a href={url}>{title} - {name} <FiExternalLink /></a>
        </div>
        <span>{start} - {finish}</span>
      </li>
    </Organization>
  )
}

const School = ({
  name,
  url,
  start,
  finish,
  title
}) => {
  return (
    <Organization>
      <li className="org-head">
        <div>
          <Icon><FiBookOpen /></Icon> <a href={url}>{title} - {name} <FiExternalLink /></a>
        </div>
        <span className="duration">{start} - {finish}</span>
      </li>
    </Organization>
  )
}

const Organization = styled.div`
  width: 75%;
  margin: 1rem auto;
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: var(--border);
    border-top: var(--border);
  }
  & span {    
    background: var(--accent-color-light);
    color: var(--accent-color);
  }
`;

const Organizations = styled.ul`
  justify-content: space-between;
  display: flex;
  flex-direction: column-reverse;
`;

export const Background = () => {
  return (
    <section>
      <h1>Background</h1>
      <p style={{ textAlign: 'center' }}>I wrote my first line of code on the 12th of September 2015, in the C language!</p>
      <h3 style={{ textAlign: 'center' }}>Work Experience</h3>
      <PreviousExperience />      
      <h3  style={{ textAlign: 'center' }}>Education</h3>
      <Education />
    </section>
  )
}