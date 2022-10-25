import styled, { css } from 'styled-components';
import Image from 'next/image';
import { likeOn, likeOff } from '../../../../../utils/images';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { addModal } from '../../../../../store/modules/ModalSlice';

const MainLeftSearchContentItem = () => {
  const searchData = useAppSelector((state) => state.map.searchData);
  const dispatch = useAppDispatch();

  return (
    <>
      {searchData.map((item, idx) => {
        return (
          <Item
            key={`temp_${idx}`}
            onClick={() => {
              dispatch(addModal('detailModal'));
            }}
          >
            <ItemTitle>
              <ItemSpan case="titleName">{item.place_name}</ItemSpan>
              {/* <ItemSpan case="titleTag">{item.category_name}</ItemSpan> */}
              <ItemTitleImg>
                {item.like ? (
                  <Image src={likeOn} alt="" />
                ) : (
                  <Image src={likeOff} alt="" />
                )}
              </ItemTitleImg>
            </ItemTitle>
            <ItemContent>
              <li>
                <ItemSpan case="contentTag">{`#${item.category_name}`}</ItemSpan>
              </li>
              <li>
                <ItemSpan case="contentAddress">
                  {item.road_address_name}
                </ItemSpan>
              </li>
              <li>
                <ItemSpan case="contentAddress">{item.phone}</ItemSpan>
              </li>
              {/* <li>
                <ItemSpan case="contentTag">
                  #다육이#선인장#친환경#초록식물#식집사들
                </ItemSpan>
              </li> */}
              <li>
                <ItemSpan case="contentCount">{`조회수 ${item.searchCnt}`}</ItemSpan>
                <ItemSpan case="contentCount">{`리뷰수 ${item.reviewCnt}`}</ItemSpan>
              </li>
            </ItemContent>
          </Item>
        );
      })}
    </>
  );
};

export default MainLeftSearchContentItem;

const Item = styled.div`
  width: 100%;
  height: 170px;
  border: ${(props) => `1px solid ${props.theme.primaryGreen}`};
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
`;

const ItemTitle = styled.div`
  width: 100%;
  height: 40px;
`;
const ItemSpan = styled.span<{
  case: string;
  isMagam?: boolean;
}>`
  ${(Props) =>
    Props.case === 'titleName' &&
    css`
      font-weight: 700;
      font-size: 24px;
    `}

  ${(Props) =>
    Props.case === 'titleTag' &&
    css`
      padding-left: 10px;
      font-size: 14px;
      color: #999999;
    `}

    ${(Props) =>
    Props.case === 'contentTime' &&
    css`
      font-size: 14px;
      margin-right: 15px;
      color: ${Props.isMagam ? 'red' : 'color'};
    `}

    ${(Props) =>
    Props.case === 'contentAddress' &&
    css`
      font-size: 14px;
    `}

    ${(Props) =>
    Props.case === 'contentTag' &&
    css`
      font-size: 14px;
      color: ${(props) => props.theme.primaryGreen};
    `}

    ${(Props) =>
    Props.case === 'contentCount' &&
    css`
      font-size: 14px;
      color: #666666;
      margin-right: 15px;
    `}
`;

const ItemTitleImg = styled.span`
  float: right;
  cursor: wait;
`;
const ItemContent = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    height: 30px;
  }
`;
