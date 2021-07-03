import React from "react"
import styled from "styled-components"

// props!
const StyledButton = styled.button`
  background: transparent;
  border-top: solid 0.1rem var(--secondary-color);
  border-bottom: solid 0.1rem var(--secondary-color);
  border-left: none;
  border-right: none;
  color: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    cursor: pointer;
    border-top: solid 0.1rem var(--secondary-color);
    border-bottom: solid 0.1rem var(--secondary-color);
  }
`;

export const Button = ({ children }) => {
  return (
    <StyledButton>
      <>
        {children}
      </>
    </StyledButton>
  )
}