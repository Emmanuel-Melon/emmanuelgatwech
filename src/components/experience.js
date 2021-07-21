import React from "react"
import styled from "styled-components"
import { 
  FiPrinter,
  FiGitCommit,
  FiBriefcase, 
  FiExternalLink,
  FiHeart,
  FiBookOpen,
  FiCoffee,
  FiHeadphones,
} from "react-icons/fi";

import { Icon } from "./icon"

const Current = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & li {
    margin: 0.5rem;
    border-bottom: var(--border);
    border-top: var(--border);
    width: max-content;
  }
`;

export const CurrentWork = () => {
  return (
    <>
    <Current>
      <li>
        <a href="https://gitstart.com" target="_blank">
          <Icon><FiBriefcase /></Icon>FullStack Engineer - GitStart <FiExternalLink />
        </a>
      </li>
      <li><Icon><FiHeart /></Icon> Founder - Biti <FiExternalLink /></li>
      <li>
        <a href="https://github.com/Emmanue-Melon"  target="_blank"><Icon><FiGitCommit /></Icon> Open Source Contributor <FiExternalLink /></a>
      </li>
      <li>
        <a href="https://mentors.codingcoach.io/?name=Emmanuel+Gatwech" target="_blank"><Icon><FiBookOpen/></Icon>Mentor - Coding Coach <FiExternalLink /></a>
      </li>
      <li><Icon><FiPrinter /></Icon>Technical Content Writer</li>
      <li><Icon><FiCoffee /></Icon>Amatuer Chef</li>
      <li><Icon><FiHeadphones /></Icon>HipHop Lover</li>
    </Current>
    </>
  )
}
