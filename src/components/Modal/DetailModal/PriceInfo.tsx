import styled, { css } from 'styled-components';
import { makeComma } from '../../../utils/logics/logics';

const tempData: { [key: string]: any } = {
  '선인장 다육이': 12000,
  a1: 20000,
  a2: 3000,
  a3: 3000,
  a4: 4000,
  a5: 5000,
  a6: 6000,
  a7: 7000,
  a8: 8000,
  a9: 9000,
  a10: 10000,
  a11: 11000,
  a12: 12000,
  a13: 13000,
};
const PriceInfo = () => {
  return (
    <PriceContentWrapper>
      {Object.keys(tempData).map((item) => (
        <PriceContent>
          <PriceSpan type="type1">{item}</PriceSpan>
          <PriceSpan>{makeComma(tempData[`${item}`])} 원</PriceSpan>
        </PriceContent>
      ))}
    </PriceContentWrapper>
  );
};

export default PriceInfo;

const PriceContentWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  height: 250px;
  overflow: scroll;
`;

const PriceContent = styled.div`
  width: 250px;
`;
const PriceSpan = styled.span<{ type?: string }>`
  font-size: 16px;

  ${(Props) =>
    Props.type === 'type1' &&
    css`
      width: 130px;
      display: inline-block;
    `}
`;
