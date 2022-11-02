import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  lat: number; // 위도
  lng: number; // 경도
  isLogIn: boolean; // 로그인 유무
  email: string;
  nickname: string;
  profileImg: string;
}

const initialState: userState = {
  lat: 37.5666805,
  lng: 126.9784147,
  isLogIn: false,
  email: "",
  nickname: "",
  profileImg:"",
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
    SET_userInfo: (
      state,
      action: PayloadAction<userState>
    ) => {
      console.log(action);
        debugger
      
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
