import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  lat: number; // 위도
  lng: number; // 경도
  isLogIn: boolean // 로그인 유무
}

const initialState: userState = {
  lat: 37.5666805,
  lng: 126.9784147,
  isLogIn: false,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    SET_location: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    userLogIn(state) {
      state.isLogIn = true;
    },
    userLogOut(state) {
      state.isLogIn = false;
    },
  },
});

export const { SET_location, userLogIn, userLogOut } = UserSlice.actions;
export default UserSlice.reducer;
