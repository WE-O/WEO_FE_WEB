import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchData } from '../../types/types';

export interface mapState {
  map: any;
  searchData: searchData[];
}

const initialState: mapState = { map: null, searchData: [] };

const MapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    kakaoMap: (state, action: PayloadAction<string>) => {
      state.map = action.payload;
    },
    setSearchData: (state, action: PayloadAction<searchData[]>) => {
      state.searchData = action.payload;
    },
  },
});

export const { kakaoMap, setSearchData } = MapSlice.actions; // 액션 생성함수
export default MapSlice.reducer; // 리듀서
