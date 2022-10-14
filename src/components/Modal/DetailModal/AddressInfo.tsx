import Image from 'next/image';
import styled from 'styled-components';
import {
  accessTime,
  address,
  delivery,
  phone,
  url,
} from '../../../utils/images';

const addressType: { [key: string]: any } = {
  주소: address,
  시간: accessTime,
  URL: url,
  연락처: phone,
  '배달가능 여부': delivery,
};

const AddressInfo = () => {
  const tempData: { [key: string]: any } = {
    주소: [
      '서울특별시 도봉구 도봉로143길 60 102호',
      '방학동 674-20 방학역3번',
      '방학역 3번 출구에서 900m',
    ],
    시간: '10:00 - 22:00 일 13:00 - 18:00',
    URL: '없음',
    연락처: '010-9573-5777',
    '배달가능 여부': '',
  };
  return (
    <>
      {Object.keys(addressType).map((item, idx) => (
        <>
          <AddressContentWrapper>
            <AddressHeader>
              <div>
                <Image src={addressType[`${item}`]} alt="" />
              </div>
              <span>{item}</span>
            </AddressHeader>
            <AddressContent>
              {idx === 0 ? (
                tempData[`${item}`].map((itemInfo: string) => (
                  <span>{itemInfo}</span>
                ))
              ) : (
                <span>{tempData[`${item}`]}</span>
              )}
            </AddressContent>
          </AddressContentWrapper>
        </>
      ))}
    </>
  );
};

export default AddressInfo;

//           <AddressContent></AddressContent>

const AddressContentWrapper = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  gap: 30px;
`;

const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  width: 135px;
  gap: 15px;

  div {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  span {
    font-size: 16px;
  }
`;

const AddressContent = styled.span``;

// width 850px
