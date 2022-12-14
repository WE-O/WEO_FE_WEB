import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface weather {
  aTmp: string;
  aWeather: string;
  mTmp: string;
  mWeather: string;
}

interface userData {
  email: string;
  nickname: string;
  profileImg: string;
  snsType: string;
  bookmarkCnt?: number;
  reviewCnt?: number,
  reportCnt?: number,
  scrapList?: [],
  joinDate?: any,
  delDate?: any,
}

export interface userState {
  lat: number; // 위도
  lng: number; // 경도
  isLogIn: boolean; // 로그인 유무

  userData: userData;
  weatherData: weather;
}

const initialState: userState = {
  lat: Number(process.env.NEXT_PUBLIC_DEFAULT_LAT),
  lng: Number(process.env.NEXT_PUBLIC_DEFAULT_LNG),
  isLogIn: false,

  userData: {
    email: '',
    nickname: '',
    profileImg: '',
    snsType: '',
    // 저장한 장소, 작성 후기 , 장소 제보
    // 스크랩한 콘텐츠
    bookmarkCnt: 0,
    reviewCnt: 0,
    reportCnt: 0,
    scrapList: [],
  },

  weatherData: {
    aTmp: '',
    aWeather: '',
    mTmp: '',
    mWeather: '',
  },
};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    SET_location: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    SET_userInfo: (state, action: PayloadAction<userData>) => {
       
      state.userData = action.payload;
    },
    SET_weatherData: (state, action: PayloadAction<weather>) => {
      return {
        ...state,
        weatherData: action.payload,
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

export const { SET_location, SET_weatherData, userLogIn, userLogOut, SET_userInfo } =
  UserSlice.actions;
export default UserSlice.reducer;
