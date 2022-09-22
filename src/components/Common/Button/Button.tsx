import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px;
  gap: 12px;

  width: 80px;
  height: 32px;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.03),
    0 2px 2px -2px rgba(67, 90, 111, 0.2);

  background: #111827;
  border-radius: 6px;

  color: white;
  font-size: 12px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

type Props = React.ComponentProps<typeof ButtonBase>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = "button", ...props }, ref) => (
    <ButtonBase {...props} ref={ref} type={type} />
  )
);

export default Button;
