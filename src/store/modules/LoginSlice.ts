import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface loginState {
  openLogin: boolean;
}

const initialState: loginState = { openLogin: false };

const LoginSlice = createSlice({
  name: "ModalEvent",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.openLogin = action.payload;
    },
    closeModal: (state, action: PayloadAction<boolean>) => {
      state.openLogin = action.payload;
    },
  },
});

export const { openModal, closeModal } = LoginSlice.actions; // 액션 생성함수
export default LoginSlice.reducer; // 리듀서
