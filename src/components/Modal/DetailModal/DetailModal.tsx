import styled from "styled-components";
import { useRef } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { deleteModal } from "../../../store/modules/ModalSlice";
import useOnClickOutside from "../hooks/useOnClickOutside";
import DetailModalHeader from "./DetailModalHeader";
import DetailModalLeft from "./DetailModalLeft";

const DetailModal = () => {
  const detailRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useOnClickOutside(detailRef, () => dispatch(deleteModal("detailModal")));

  return (
    <DetailModalWrapper ref={detailRef}>
      <DetailModalHeader />

      <DetailModalContent>
        <DetailModalLeft />
        <DetailContentRight>Right</DetailContentRight>
      </DetailModalContent>
    </DetailModalWrapper>
  );
};

export default DetailModal;

const DetailModalWrapper = styled.div`
  width: 80%;
  height: 70%;
  position: absolute;
  top: 100px;
  padding: 30px 30px;
  background-color: white;
  border-radius: 30px;
  color: black;
`;

const DetailModalContent = styled.div`
  display: flex;
`;

const DetailContentRight = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  padding: 0px 30px 0px 0px;
  color: black;
`;
