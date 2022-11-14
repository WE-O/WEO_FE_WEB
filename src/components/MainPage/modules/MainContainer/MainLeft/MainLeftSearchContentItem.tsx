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
            key={`ContentItem_${idx}`}
            onClick={() => {
              dispatch(
                addModal({
                  modalNm: 'detailModal',
                  modalParam: { selectId: item.id },
                }),
              );
            }}
          >
            <ItemTitle>
              <ItemSpan case="titleName">{item.place_name}</ItemSpan>
              {/* <ItemSpan case="titleTag">{item.category_name}</ItemSpan> */}
              <ItemTitleImg
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('즐겨찾기 업데이트 API');
                }}
              >
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
                <ItemSpan case="contentCount">{`조회수 ${item.view}`}</ItemSpan>
                <ItemSpan case="contentCount">{`리뷰수 ${item.review}`}</ItemSpan>
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
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 22px;
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
      font-size: 22px;
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

const ItemTitleImg = styled.div`
  float: right;
  cursor: wait;
  z-index: 10;
`;
const ItemContent = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    height: 23px;
  }
`;
