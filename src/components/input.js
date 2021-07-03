import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  margin-right: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: solid 0.1rem var(--white);
  background: var(--content-background);
  color: var(--white);
`;

export const Input = ({ 
  placeholder, type 
}) => {
  return (
    <StyledInput 
      type={type}
      placeholder={placeholder}
    />
  )
}