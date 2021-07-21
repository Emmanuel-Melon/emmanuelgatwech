import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  border-left: none;
  border-right: none;
  color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border: var(--border);
  background: var(--secondary-color);
  padding: 0.5rem;
  width: 150px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
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