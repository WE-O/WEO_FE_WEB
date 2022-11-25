import styled from 'styled-components';
import { cancel } from '../../../utils/images';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';
import { deleteModal } from '../../../store/modules/ModalSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { call } from '../../../api/apis';

interface ModalType {
    key: any;
    isTop: boolean;
}

const ChangeModal = (props: ModalType) => {
    const dispatch = useAppDispatch();
    const changeRef = useRef(null);
    const inputRef = useRef(null);
    const [dupNickname, setDupNickname] = useState(false);
    const modalState = useAppSelector((state) => state.modal.modalList);
    const userInfo = useAppSelector((state) => state.user);

    useEffect(() => {
        inputRef.current?.focus();
        document.addEventListener('keyup', (e: KeyboardEvent) => { keyboardEvent(e.key) })
        return () => {
            document.removeEventListener('keyup', (e: KeyboardEvent) => { keyboardEvent(e.key) })
        }
    }, [])

    const keyboardEvent = (code: string) => {
        if (code === "Escape") {
            dispatch(deleteModal('changeModal'));
        }
    }

    useOnClickOutside(changeRef, () =>
        dispatch(deleteModal('changeModal')),
    );

    const handleOnClick = (e: React.MouseEvent<HTMLElement>, type: string) => {
        e.preventDefault();
        const curModalName = modalState[0];
        switch (type) {
            case 'close':
                dispatch(deleteModal('changeModal'));
                break;
            case "positive":
                if (curModalName === "changeModal") {
                    const preNickname = userInfo.userData.nickname;
                    const inputNickname = inputRef.current.value;
                    if (inputNickname === preNickname) {
                        // 닉네임 중복 , return 추가
                        console.log("닉네임중복!");
                        setDupNickname(true);
                        return false;
                    }
                    callAPI(curModalName, inputNickname);
                    // 변경 API 호출 , 다이얼로그 닫기
                }
                break;
            default:
                break;
        }
    };

    const callAPI = async (type: string, value: string) => {
        debugger
        const param = {
            url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/member/nickname`,
            data: {
                memberId: JSON.parse(localStorage.getItem("UserInfo")).memberId,
                nickname: value,
            }
        }
        const responseData = await call("PUT", param);
        console.log(responseData);
        debugger
    }

    const getRenderItem = () => {
        const type = modalState[0];
        const renderItem = [];
        switch (type) {
            case "changeModal":

                renderItem.push(
                    <ModalBox ref={changeRef}>
                        <CloseButton onClick={(e) => handleOnClick(e, 'close')}>
                            <Image src={cancel} />
                        </CloseButton>

                        <ContentsBox>
                            <TextBox>
                                <p><h2>닉네임 변경</h2></p>
                                <p>변경할 닉네임을 입력하세요.</p>
                            </TextBox>

                            <InputBox ref={inputRef} dupFlag={dupNickname} />

                            {
                                dupNickname &&
                                <DupNickname>
                                    현재 사용중인 닉네임입니다.
                                </DupNickname>
                            }

                            <ButtonBox>
                                <NagativeButton onClick={(e) => handleOnClick(e, 'close')}>취소</NagativeButton>
                                <PositiveButton onClick={(e) => handleOnClick(e, 'positive')}>변경</PositiveButton>
                            </ButtonBox>

                        </ContentsBox>
                    </ModalBox>
                )
                break;
            case "":
                break;
        }
        return renderItem;
    }


    return (
        <>
            {getRenderItem()}
        </>
    );
};

export default ChangeModal;

const ModalBox = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 540px;
  height: 300px;
  margin-top: -100px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
`;

const CloseButton = styled.button`
  padding: 20px;
  width: 63px;
  border: 0;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius : 500px;
`;

const ContentsBox = styled.div`

`;
const TextBox = styled.div`
    text-align: center;
`;

const InputBox = styled.input<{ dupFlag: boolean }>`
    background: #FFFFFF;
    border : ${(props) => props.dupFlag ? "1px solid red" : "1px solid #22CC88"};
    border-radius: 4px;
    width: 352px;
    height: 48px;    
    font-size: 25px;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`

const PositiveButton = styled.button`
    width: 168px;
    height: 40px;
    background: #22CC88;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    border : none;
    cursor:pointer;
    color: white;
`;
const NagativeButton = styled.button`
    width: 168px;
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #9D9EA3;
    border : 1px solid;
    border-radius: 4px;
    cursor:pointer;
    background: white;
`;
const DupNickname = styled.p`
    color : red;
`;