import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RNCamera } from 'react-native-camera';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface IInitialState {
  isCameraOpen: boolean;
  photosArray: string[];
  cameraMethods: RNCamera | any;
  fileArray: string[];
}

const initialState: IInitialState = {
  isCameraOpen: false,
  cameraMethods: null,
  photosArray: [],
  fileArray: [],
};

export const cameraSlice = createSlice({
  name: 'cameraSlice',
  initialState,
  reducers: {
    reset: () => initialState,
    addPhotoArray(state, action: PayloadAction<string>) {
      state.photosArray = [...state.photosArray, action.payload];
    },
    toggleCamera(state) {
      state.isCameraOpen = !state.isCameraOpen;
    },
    addCameraMethods(state, action: PayloadAction<RNCamera>) {
      state.cameraMethods = action.payload;
    },
    addFileInArray(state, action: PayloadAction<string>) {
      state.fileArray = [...state.fileArray, action.payload];
    },
    removeFileInArray(state, action: PayloadAction<string[]>) {
      state.fileArray = action.payload;
    },
  },
});

export default cameraSlice.reducer;
