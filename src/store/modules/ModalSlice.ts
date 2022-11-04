import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface modalState {
  modalList: string[];
  modalParam: { [key: string]: any };
}

const initialState: modalState = { modalList: [], modalParam: {} };

const ModalSlice = createSlice({
  name: 'ModalList',
  initialState,
  reducers: {
    addModal: (
      state,
      action: PayloadAction<string | { [key: string]: any }>,
    ) => {
      let modalNm: string = '';
      let modalParam: { [key: string]: any } = {};
      if (typeof action.payload === 'string') {
        modalNm = action.payload;
      } else if (typeof action.payload === 'object') {
        modalNm = action.payload.modalNm as string;
        modalParam = action.payload.modalParam as { [key: string]: any };
      }

      if (
        modalNm &&
        state.modalList.filter((item) => item === modalNm).length === 0
      ) {
        state.modalList.push(modalNm);
        state.modalParam = modalParam;
      }
    },

    deleteModal: (state, action: PayloadAction<string>) => {
      state.modalList.pop();
    },

    clearModal: (state) => {
      state.modalList = [];
    },
  },
});

export const { addModal, deleteModal, clearModal } = ModalSlice.actions; // 액션 생성함수
export default ModalSlice.reducer; // 리듀서
