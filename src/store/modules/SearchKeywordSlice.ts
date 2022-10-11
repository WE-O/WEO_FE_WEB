import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface searchKeywordState {
    searchKeyword: string;
}

const initialState: searchKeywordState = { searchKeyword: "" };

const SearchKeywordSlice = createSlice({
    name: "searchKeyword",
    initialState,
    reducers: {
        changeSearchKeyword: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload;
        },
    },
});

export const { changeSearchKeyword } = SearchKeywordSlice.actions; // 액션 생성함수
export default SearchKeywordSlice.reducer; // 리듀서
