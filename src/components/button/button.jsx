import React from 'react';

import { StyledButton } from './button-styled';

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}