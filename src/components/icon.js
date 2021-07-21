import React from "react"
import styled from "styled-components"

const StyledIcon = styled.span`
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--accent-color);
  box-shadow: var(--box-shadow);
  border: var(--border);
  background: var(--accent-color-light);
  text-align: center;
`;

export const Icon = ({ children }) => {
  return (
    <StyledIcon>
      {children}
    </StyledIcon>
  )
}