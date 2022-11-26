import Image from 'next/image';
import styled from 'styled-components';
import {
  accessTime,
  address,
  delivery,
  phone,
  url,
} from '../../../utils/images';
import { detailDataType } from './utils/type';

const addressType: { [key: string]: any } = {
  주소: address,
  URL: url,
  연락처: phone,
  // 시간: accessTime,
  // '배달가능 여부': delivery,
};

const AddressInfo = (props: { detailData: detailDataType }) => {
  const { detailData } = props;

  const tempData: { [key: string]: any } = {
    주소: detailData?.roadAddressName,
    URL: detailData?.placeUrl,
    연락처: detailData?.phone,
  };

  return (
    <>
      {Object.keys(addressType).map((item, idx) => (
          <AddressContentWrapper key={`${item}_${idx}`}>
            <AddressHeader>
              <div>
                <Image src={addressType[`${item}`]} alt="" />
              </div>
              <span>{item}</span>
            </AddressHeader>
            <AddressContent>
              {item === 'URL' ? (
                <span>
                  <a href={`${tempData[`${item}`]}`} target="_blank">
                    {tempData[`${item}`]}
                  </a>
                </span>
              ) : (
                <span>{tempData[`${item}`]}</span>
              )}
            </AddressContent>
          </AddressContentWrapper>
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
