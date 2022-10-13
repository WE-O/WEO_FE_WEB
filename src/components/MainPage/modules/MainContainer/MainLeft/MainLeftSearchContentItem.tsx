import styled, { css } from 'styled-components';
import Image from 'next/image';
import { likeOn, likeOff } from '../../../../../utils/images';

const MainLeftSearchContentItem = () => {
  return (
    <>
      <Item>
        <ItemTitle>
          <ItemSpan case="titleName">코코 다육이1</ItemSpan>
          <ItemSpan case="titleTag">원예,화훼농원</ItemSpan>
          <ItemTitleImg>
            <Image src={likeOn} alt="" />
          </ItemTitleImg>
        </ItemTitle>
        <ItemContent>
          <li>
            <ItemSpan case="contentTime">영업 마감</ItemSpan>
            <ItemSpan case="contentTime">10:00에 영업시작</ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentAddress">
              서울시 도봉구 도봉로143길 60 102호
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentTag">
              #다육이#선인장#친환경#초록식물#식집사들
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentCount">조회수 20</ItemSpan>
            <ItemSpan case="contentCount">리뷰수 30</ItemSpan>
          </li>
        </ItemContent>
      </Item>

      <Item>
        <ItemTitle>
          <ItemSpan case="titleName">코코 다육이2</ItemSpan>
          <ItemSpan case="titleTag">원예,화훼농원</ItemSpan>
          <ItemTitleImg>
            <Image src={likeOff} alt="" />
          </ItemTitleImg>
        </ItemTitle>
        <ItemContent>
          <li>
            <ItemSpan case="contentTime">영업 마감</ItemSpan>
            <ItemSpan case="contentTime">10:00에 영업시작</ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentAddress">
              서울시 도봉구 도봉로143길 60 102호
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentTag">
              #다육이#선인장#친환경#초록식물#식집사들
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentCount">조회수 20</ItemSpan>
            <ItemSpan case="contentCount">리뷰수 30</ItemSpan>
          </li>
        </ItemContent>
      </Item>

      <Item>
        <ItemTitle>
          <ItemSpan case="titleName">코코 다육이3</ItemSpan>
          <ItemSpan case="titleTag">원예,화훼농원</ItemSpan>
          <ItemTitleImg>
            <Image src={likeOff} alt="" />
          </ItemTitleImg>
        </ItemTitle>
        <ItemContent>
          <li>
            <ItemSpan case="contentTime">영업 마감</ItemSpan>
            <ItemSpan case="contentTime">10:00에 영업시작</ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentAddress">
              서울시 도봉구 도봉로143길 60 102호
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentTag">
              #다육이#선인장#친환경#초록식물#식집사들
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentCount">조회수 20</ItemSpan>
            <ItemSpan case="contentCount">리뷰수 30</ItemSpan>
          </li>
        </ItemContent>
      </Item>

      <Item>
        <ItemTitle>
          <ItemSpan case="titleName">코코 다육이4</ItemSpan>
          <ItemSpan case="titleTag">원예,화훼농원</ItemSpan>
          <ItemTitleImg>
            <Image src={likeOff} alt="" />
          </ItemTitleImg>
        </ItemTitle>
        <ItemContent>
          <li>
            <ItemSpan case="contentTime">영업 마감</ItemSpan>
            <ItemSpan case="contentTime">10:00에 영업시작</ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentAddress">
              서울시 도봉구 도봉로143길 60 102호
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentTag">
              #다육이#선인장#친환경#초록식물#식집사들
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentCount">조회수 20</ItemSpan>
            <ItemSpan case="contentCount">리뷰수 30</ItemSpan>
          </li>
        </ItemContent>
      </Item>

      <Item>
        <ItemTitle>
          <ItemSpan case="titleName">코코 다육이5</ItemSpan>
          <ItemSpan case="titleTag">원예,화훼농원</ItemSpan>
          <ItemTitleImg>
            <Image src={likeOff} alt="" />
          </ItemTitleImg>
        </ItemTitle>
        <ItemContent>
          <li>
            <ItemSpan case="contentTime">영업 마감</ItemSpan>
            <ItemSpan case="contentTime">10:00에 영업시작</ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentAddress">
              서울시 도봉구 도봉로143길 60 102호
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentTag">
              #다육이#선인장#친환경#초록식물#식집사들
            </ItemSpan>
          </li>
          <li>
            <ItemSpan case="contentCount">조회수 20</ItemSpan>
            <ItemSpan case="contentCount">리뷰수 30</ItemSpan>
          </li>
        </ItemContent>
      </Item>
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
`;
const ItemContent = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    height: 25px;
  }
`;
