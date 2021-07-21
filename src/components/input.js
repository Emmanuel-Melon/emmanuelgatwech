import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  margin-right: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  background: var(--content-background);
  width: 100%;
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