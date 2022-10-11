
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface mapState {
    map: any;
}

const initialState: mapState = { map: null };

const MapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        kakaoMap: (state, action: PayloadAction<string>) => {
            state.map = action.payload;
        },
    },
});

export const { kakaoMap } = MapSlice.actions; // 액션 생성함수
export default MapSlice.reducer; // 리듀서
