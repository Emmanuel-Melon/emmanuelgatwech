import React from "react";

import styled from "styled-components"

import { 
  FiPrinter,
  FiBriefcase,
  FiGitCommit,
  FiArrowUpRight,
} from "react-icons/fi";


const Icon = styled.span`
  margin-right: 0.5rem;
  background: #261c3a;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--accent-color);
`;

const Current = styled.ul`
  width: fit-content;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  & li {
    margin-bottom: 1.5rem;
  }
`;

export default function Sidebar () {
  return (
    <aside>
    <Current>
        <li><Icon><FiBriefcase /></Icon>FullStack Engineer - GitStart <FiArrowUpRight /></li>
        <li><Icon><FiBriefcase /></Icon> Founder - Biti <FiArrowUpRight /></li>
        <li><Icon><FiGitCommit /></Icon> Open Source Contributor</li>
        <li><Icon><FiPrinter /></Icon>Technical Writer</li>
    </Current>
    </aside>
  )
}