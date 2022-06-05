import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { HeaderAPI } from '../../API/HeaderAPI/HeaderAPI';

interface MainStateInterface {
    isLoading: boolean;
    uploadingInfo: boolean;
    prevPath: string;
}

let initialState: MainStateInterface = {
    isLoading: false,
    uploadingInfo: false,
    prevPath: '',
}

export const mainSlice = createSlice( {
    name: 'main',
    initialState,
    reducers: {
        setLoading: ((state,action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }),
        setUpload: ((state, action: PayloadAction<boolean>) => {
            state.uploadingInfo = action.payload
        }),
        setPrevPath: (state, action: PayloadAction<string>) => {
            state.prevPath = action.payload
        }
    },
})

export const { setUpload, setLoading, setPrevPath } = mainSlice.actions
export default mainSlice.reducer