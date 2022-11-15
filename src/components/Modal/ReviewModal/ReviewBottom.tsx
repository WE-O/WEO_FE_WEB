import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

// 이미지 업로드
// https://velog.io/@yeogenius/React-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EA%B8%B0
// https://velog.io/@edie_ko/React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EA%B8%B0-with-Axios

// formData 읽어보기 https://velog.io/@josworks27/formData-console.log

interface Props {
  closeReviewModal: () => void;
}

const ReviewBtnArea: React.FC<Props> = (props: Props) => {
  const [imgName, SetImgName] = useState<string>('');

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (!e.target.files) {
        return;
      }

      const formData: { [key: string]: any } = new FormData();
      formData.append('image', e.target.files[0]);

      // FormData의 key 확인
      // for (let key of formData.keys()) {
      //   console.log(key);
      // }

      // FormData의 value 확인
      for (let value of formData.values()) {
        SetImgName(value.name as string);
      }
    },
    [],
  );

  const onDeleteImage = useCallback(() => SetImgName(''), []);

  return (
    <>
      <TopArea>
        <ImgSelect htmlFor="input-file">+ 사진 불러오기</ImgSelect>
        <input
          accept="image/*"
          id="input-file"
          type="file"
          style={{ display: 'none' }}
          onChange={onUploadImage}
        />

        <span>{imgName}</span>
        {imgName && (
          <Btn name="delete" onClick={onDeleteImage}>
            {' '}
            X{' '}
          </Btn>
        )}
      </TopArea>
      <BotArea>
        <Btn name="cancel" onClick={props.closeReviewModal}>
          취소하기
        </Btn>
        <Btn name="ok">등록하기</Btn>
      </BotArea>
    </>
  );
};

export default ReviewBtnArea;

const TopArea = styled.div`
  margin: 30px 0px 40px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const BotArea = styled.div`
  display: flex;
  gap: 30px px;
  justify-content: space-between;
`;

const ImgSelect = styled.label`
  cursor: pointer;
  border: ${(Props) => `1px solid ${Props.theme.primaryGreen}`};
  color: ${(Props) => Props.theme.primaryGreen};
  padding: 10px;
  border-radius: 5px;
`;

const Btn = styled.button<{ name: string }>`
  cursor: pointer;
  border: ${(Props) => `1px solid ${Props.theme.primaryGreen}`};

  ${(Props) =>
    Props.name === 'delete' &&
    css`
      color: ${(Props) => Props.theme.primaryGreen};
      background: white;
      padding: 5px;
      border-radius: 5px;
    `}

  ${(Props) =>
    Props.name === 'cancel' &&
    css`
      width: 290px;
      height: 55px;
      color: ${(Props) => Props.theme.primaryGreen};
      background: white;
    `}

  ${(Props) =>
    Props.name === 'ok' &&
    css`
      width: 290px;
      height: 55px;
      color: white;
      background: ${(Props) => Props.theme.primaryGreen};
    `}
`;
