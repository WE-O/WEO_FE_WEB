import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme.primaryGreen};
  border: none;
  color: white;
  border-radius: 6px;

  width: 80px;
  height: 32px;
  cursor: pointer;
`;

type Props = React.ComponentProps<typeof ButtonBase>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = "button", ...props }, ref) => (
    <ButtonBase {...props} ref={ref} type={type} />
  )
);

export default Button;
