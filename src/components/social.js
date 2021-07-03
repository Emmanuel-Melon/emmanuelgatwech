import React from "react"
import styled from "styled-components"

import { 
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiFile,
  FiChevronDown,
  FiUser,
  FiBriefcase
} from "react-icons/fi";

const Social = styled.ul`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 1rem auto;
  & li {
    box-shadow: var(--box-shadow);
    border: solid 0.15rem var(--content-background);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SocialLinks = () => {
  return (
    <Social>
        <li>
          <a href="https://twitter.com/junubiman" target="_blank"> <FiTwitter /> Twitter <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiGithub /> Github <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiLinkedin /> LinkedIn <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiFile /> Resume <FiArrowUpRight />
          </a>
        </li>
      </Social>
  )
}