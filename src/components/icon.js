import React from "react"
import styled from "styled-components"

const StyledIcon = styled.span`
  margin-right: 0.5rem;
  background: var(--content-background);
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--accent-color);
  box-shadow: var(--box-shadow);
`;

export const Icon = ({ children }) => {
  return (
    <StyledIcon>
      {children}
    </StyledIcon>
  )
}