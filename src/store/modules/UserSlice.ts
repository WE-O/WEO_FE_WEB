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
}

export interface userState {
  lat: number; // 위도
  lng: number; // 경도
  isLogIn: boolean; // 로그인 유무

  userData: userData;
  weatherData: weather;
}

const initialState: userState = {
  lat: 37.5666805,
  lng: 126.9784147,
  isLogIn: false,

  userData: {
    email: '',
    nickname: '',
    profileImg: '',
    snsType: '',
    // 저장한 장소, 작성 후기 , 장소 제보
    // 스크랩한 콘텐츠
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
      debugger
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
