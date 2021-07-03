import React from "react"
import styled from "styled-components"
import data from "../data.json"
import { 
  FiPrinter,
  FiGitCommit,
  FiBriefcase, 
  FiArrowUpRight,
  FiHeart,
  FiBookOpen,
  FiCoffee,
  FiHeadphones,
} from "react-icons/fi";

import { Icon } from "./icon"

export const PreviousExperience = () => {
  return (
<Organizations>
          {
            data.work.map(org => <Org {...org} key={org.id}/>)
          }
        </Organizations>
  )
}

export const Education = () => {
  return (
<Organizations>
          {
            data.education.map(org => <Org {...org} key={org.id}/>)
          }
        </Organizations>
  )
}

const Org = ({
  name,
  url,
  start,
  finish,
  title,
  location,
  id
}) => {
  return (
    <Organization>
      <li className="org-head">
        <div>
          <Icon><FiBriefcase /></Icon> <a href="#">{title} - {name} <FiArrowUpRight /></a>
        </div>
        <p className="duration">{start} - {finish}</p>
      </li>
    </Organization>
  )
}

const Organization = styled.div`
  border-radius: var(--border-radius);
  margin-top: 1rem;
  color: #fff;
  box-shadow: var(--box-shadow);
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & p {
    width: fit-content;
    background: var(--content-background);
    border-radius: var(--border-radius);
    color: var(--secondary-color);
  }
`;

const Organizations = styled.ul`
  justify-content: sapce-between;
  display: flex;
  flex-direction: column-reverse;
  flex: 2;
  & li {
    border-bottom: solid 0.15rem var(--content-background);
    box-shadow: var(--box-shadow);
    border-top: solid 0.15rem var(--content-background);
    box-shadow: var(--box-shadow);
  }
`;

const Current = styled.ul`
  display: flex;
  padding: var(--padding);
  flex-wrap: wrap;
  justify-content: center;
  & li {
    border-bottom: solid 0.1rem var(--content-background);
    border-top: solid 0.1rem var(--content-background);
    box-shadow: var(--box-shadow);
    margin: 0.5rem;
  }
`;

export const CurrentWork = () => {
  return (
    <>
    <Current>
      <li>
        <a href="https://gitstart.com" target="_blank">
          <Icon><FiBriefcase /></Icon>Full-Stack Engineer - GitStart <FiArrowUpRight />
        </a>
      </li>
      <li>
        <a href="https://mentors.codingcoach.io/?name=Emmanuel+Gatwech" target="_blank"><Icon><FiBookOpen/></Icon>Mentor - Coding Coach <FiArrowUpRight /></a>
      </li>
      <li><Icon><FiHeart /></Icon> Founder - Biti <FiArrowUpRight /></li>
      <li>
        <a href="https://github.com/Emmanue-Melon"  target="_blank"><Icon><FiGitCommit /></Icon> Open Source Contributor <FiArrowUpRight /></a>
      </li>
      <li><Icon><FiPrinter /></Icon>Technical Content Writer</li>
      <li><Icon><FiCoffee /></Icon>Amatuer Chef - Home!</li>
      <li><Icon><FiHeadphones /></Icon>HipHop Lover</li>
    </Current>
    </>
  )
}