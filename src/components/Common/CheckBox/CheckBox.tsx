import { useEffect, useState } from "react";
import styled from "styled-components";
import useDidMountEffect from "../hooks/useDidMountEffect";

interface Props {
  onHandleSelectChange: (target: boolean) => void;
}

const CheckBox = (props: Props) => {
  const [check, setCheck] = useState<boolean>(false);
  const { onHandleSelectChange } = props;

  useDidMountEffect(() => {
    onHandleSelectChange(check);
  }, [check]);

  return (
    <CheckItem
      type={"checkbox"}
      checked={check}
      onChange={() => setCheck(!check)}
    />
  );
};

export default CheckBox;

const CheckItem = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 5px;
  width: 20px;
  height: 20px;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-position: 50%;
    background-repeat: no-repeat;
    border-color: ${(props) => props.theme.primaryGreen};
    background-color: ${(props) => props.theme.primaryGreen};
  }
`;
