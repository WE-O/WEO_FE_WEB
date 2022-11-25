import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToastSliceType {
    toastOpen: boolean;
    toastText?: string;
    type?: string;
}

const initialState: ToastSliceType = {
    toastText: '',
    toastOpen: false,
    type: 'success'
};

const ToastSlice = createSlice({
    name: "toastSlice",
    initialState,
    reducers: {
        toast: (state, action: PayloadAction<ToastSliceType>) => {
            debugger
            return {
                ...state,
                ...action.payload,
            }
        },
    },
});

export const { toast } = ToastSlice.actions; // 액션 생성함수
export default ToastSlice.reducer; // 리듀서
