import { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  options: { [key: string]: any }[];
  defaultValue?: string;
  onHandleSelectChange?: (target: string) => void;
}

const SelectBox = (props: Props) => {
  const { value, defaultValue, options, onHandleSelectChange } = props;
  const [open, setOpen] = useState<boolean>(false);
  const SelectWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listnerEvent = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!SelectWrapperRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", listnerEvent);
    }
    return () => {
      document.removeEventListener("mousedown", listnerEvent);
    };
  }, [open]);

  return (
    <SelectWrapper ref={SelectWrapperRef}>
      <Select open={open}>
        <button onClick={() => setOpen((prev) => !prev)}>
          <span>{value ? value : defaultValue}</span>
          <span>{open ? "↑" : "↓"}</span>
        </button>
      </Select>
      {open && (
        <SelectList>
          {options.map((item) => (
            <SelectItem
              key={item.key}
              checked={
                value === item.value || (!value && defaultValue === item.value)
              }
              onClick={() => {
                onHandleSelectChange && onHandleSelectChange(item.value);
                setOpen((prev) => !prev);
              }}
            >
              {item.value}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
export default SelectBox;

const SelectWrapper = styled.div`
  position: absolute;
  left: 10px;
`;

const Select = styled.div<{ open: boolean }>`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  padding: 5px 0px 5px 10px;
  border: ${(Props) => (Props.open ? "1px solid blue" : "1px solid #999999")};

  span {
    font-size: 14px;
  }

  button {
    width: 100%;
    height: 100%;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    cursor: pointer;
  }
`;

const SelectList = styled.ul`
  position: relative;
  max-height: 120px;
  margin: 0px;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  overflow-y: scroll;
  border: 1px solid #c3c9d0;
  z-index: 100;
`;

const SelectItem = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  line-height: 30px;

  background: ${(Props) =>
    // Props.checked ? (props) => props.theme.primaryGreen : ""};
    Props.checked ? `rgba(34, 204, 136,0.6)` : ""};

  &:hover {
    background: ${(props) => props.theme.lightGrey1};
  }
`;
