import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface myPageState {
    pageIndex: number;
    savePlace: number;
    visitReview: number;
    visitReport: number;
    clipContents: any; // 어떻게 들어올 지 아직 모름
}

const initialState: myPageState = {
    pageIndex: 0,
    savePlace: 0,
    visitReview: 0,
    visitReport: 0,
    clipContents: [],
};

const MyPageSlice = createSlice({
    name: "myPageInfo",
    initialState,
    reducers: {
        changeMyPageInfo: (state, action: PayloadAction<myPageState>) => {
            state = action.payload;
        },
        changeMyPageIndex: (state, action: PayloadAction<number>) => {
            state.pageIndex = action.payload;
        }
    },
});

export const { changeMyPageInfo, changeMyPageIndex } = MyPageSlice.actions; // 액션 생성함수
export default MyPageSlice.reducer; // 리듀서
