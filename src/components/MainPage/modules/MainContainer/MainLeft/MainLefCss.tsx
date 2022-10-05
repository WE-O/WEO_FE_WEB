import styled from "styled-components";

interface subProps {
  height: string;
}

export const MainLeftDeafultItemWrapper = styled.div`
  padding: 10px;
`;

export const MainLeftDeafultItemTitle = styled.div`
  width: 100%;
  height: 26px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainLeftDefaultContents = styled.div<subProps>`
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
  height: ${(subProps) => subProps.height};
  position: relative;
`;
