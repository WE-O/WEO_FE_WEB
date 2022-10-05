import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  lat: number; // 위도
  lng: number; // 경도
}

const initialState: userState = { lat: -1, lng: -1 };

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    locationAuth: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { locationAuth } = UserSlice.actions;
export default UserSlice.reducer;
