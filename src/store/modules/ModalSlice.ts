import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "react";

export interface modalState {
  modalList: string[];
}

const initialState: modalState = { modalList: [] };

const ModalSlice = createSlice({
  name: "ModalList",
  initialState,
  reducers: {
    addModal: (state, action: PayloadAction<string>) => {
      const filtered = state.modalList.filter(
        (item) => item === action.payload
      );

      if (filtered.length === 0) {
        state.modalList.push(action.payload);
      }
    },

    deleteModal: (state, action: PayloadAction<string>) => {
      state.modalList = state.modalList.filter(
        (item) => item !== action.payload
      );
    },

    clearModal: (state) => {
      state.modalList = [];
    },
  },
});

export const { addModal, deleteModal, clearModal } = ModalSlice.actions; // 액션 생성함수
export default ModalSlice.reducer; // 리듀서
