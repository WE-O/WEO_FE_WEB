import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import AddressInfo from './AddressInfo';
import PriceInfo from './PriceInfo';
import ReviewInfo from './ReviewInfo';

const selectType: string[] = [
  '상세정보',
  '가격정보',
  '식물집사가 작성한 방문후기',
  '식물집사가 선택한 키워드',
];
const DetailModalContentHeader = () => {
  const [type, setType] = useState<string>('type0');

  const changeType = useCallback((clickType: string): void => {
    setType(clickType);
  }, []);

  return (
    <>
      <DetailModalContentHeaderWrapper>
        {selectType.map((item, idx) => (
          <DetailModalContentHeaderItem
            isClicked={type === `type${idx}`}
            onClick={() => changeType(`type${idx}`)}
          >
            {item}
          </DetailModalContentHeaderItem>
        ))}
      </DetailModalContentHeaderWrapper>

      <DetailModalContentMainWrapper>
        {type === 'type0' && <AddressInfo />}
        {type === 'type1' && <PriceInfo />}
        {type === 'type2' && <ReviewInfo />}
      </DetailModalContentMainWrapper>
    </>
  );
};

export default DetailModalContentHeader;

const DetailModalContentHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  gap: 70px;
  width: 850px;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
`;

const DetailModalContentHeaderItem = styled.span<{ isClicked: boolean }>`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -1px;
  cursor: pointer;
  padding: 0px 10px 5px 10px;

  color: ${(props) => props.theme.grey1};

  ${(Props) =>
    Props.isClicked &&
    css`
      color: black;
      border-bottom: 3px solid ${(props) => props.theme.primaryGreen};
    `};
`;

const DetailModalContentMainWrapper = styled.div`
  height: 370px;
  width: 850px;
  margin: 35px auto;
`;
