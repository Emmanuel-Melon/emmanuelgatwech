import React from "react"
import styled from "styled-components"

import { 
  FiTwitter,
  FiGithub,
  FiLinkedin
} from "react-icons/fi";
import { Icon } from "./icon"

const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;
  margin: 0rem auto;
  border-bottom: var(--border);
  border-top: var(--border);
  padding: 0;
    & a {
      color: #fff !important;
    }
  & li {

    & a {
      color: #fff !important;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SocialLinks = () => {
  return (
    <>
      <p style={{ textAlign: 'center' }}>Let's connect!</p>
    <Social>
        <li>
          <a href="https://twitter.com/junubiman" target="_blank"> <Icon><FiTwitter /></Icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <Icon><FiGithub /></Icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <Icon><FiLinkedin /></Icon>
          </a>
        </li>
      </Social>
    </>
  )
}