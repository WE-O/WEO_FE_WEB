import {
  configureStore,
  Reducer,
  AnyAction,
  combineReducers,
  ThunkAction,
  Action,
  CombinedState,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import modalSlice, { modalState } from "./modules/ModalSlice";
import userSlice, { userState } from "./modules/UserSlice";
import SearchKeywordSlice, { searchKeywordState } from "./modules/SearchKeywordSlice";
import MapSlice, { mapState } from "./modules/MapSlice";
import MyPageSlice, { myPageState } from "./modules/MyPageSlice";
import ToastSlice, { ToastSliceType } from "./modules/ToastSlice";

// 리듀서 State 타입 정의, 신규 추가 하기
export interface ReducerStates {
  modal: modalState;
  user: userState;
  searchKey: searchKeywordState;
  map: mapState;
  myPage: myPageState;
  toast: ToastSliceType;
}

// 루트 리듀서 생성
const rootReducer = (state: ReducerStates, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    // 신규 추가 하기
    modal: modalSlice,
    user: userSlice,
    searchKey: SearchKeywordSlice,
    map: MapSlice,
    myPage: MyPageSlice,
    toast : ToastSlice,
  })(state, action);
};

// ### store 생성 함수
const makeStore = () => {
  // 미들웨어 추가 (필요 없으면 생략)
  //   const middleware = getDefaultMiddleware();
  //   if (process.env.NODE_ENV === 'development') {
  //     middleware.push(logger);
  //   }

  // store 생성
  const store = configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>, // 리듀서
    // 미들웨어
    // middleware: [...getDefaultMiddleware(), logger]
    devTools: process.env.NODE_ENV === "development", // 개발자도구
  });

  // store 반환
  return store;
};

// ### next-redux-wrapper의 wrapper 생성
export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
export type AppDispatch = AppStore["dispatch"]; // dispatch 타입

/* 기타 사용할 수도 있는 타입들
// export type RootState = ReturnType<AppStore['getState']>; // RootState 타입(위와 동일함)

export type AppDispatch = AppStore["dispatch"]; // dispatch 타입
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>; // Thunk 를 위한 타입
*/

const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

// wrapper 익스포트
export default wrapper;
