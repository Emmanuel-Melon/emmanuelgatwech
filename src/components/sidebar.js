import React from "react";

import styled from "styled-components"

import { 
  FiPrinter,
  FiBriefcase,
  FiGitCommit,
} from "react-icons/fi";


const Icon = styled.span`
  margin-right: 0.5rem;
  background: #261c3a;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--secondary-color);
`;

export default function Sidebar () {
  return (
    <aside>
    <ul className="int">
        <li><Icon><FiGitCommit /></Icon> Open Source Contributor</li>
        <li><Icon><FiBriefcase /></Icon> Founder @ Biti</li>
        <li><Icon><FiPrinter /></Icon>Technical Writer</li>
    </ul>
    </aside>
  )
}