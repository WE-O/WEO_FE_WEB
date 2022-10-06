import styled from "styled-components";
interface Props {
  defaultValue: string;
  options: { [key: string]: any }[];
  onHandleSelectChange?: (target: string) => void;
}

const SelectBox = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onHandleSelectChange && props.onHandleSelectChange(e.target.value);
  };

  return (
    <Select onChange={handleChange} defaultValue={props.defaultValue}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;

const Select = styled.select`
  width: 130px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 10px;
  padding: 10px;

  // &:focus {
  //   border-color: red;
  // }
`;
