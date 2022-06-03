import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RNCamera } from 'react-native-camera';

interface IInitialState {
  isCameraOpen: boolean;
  cameraMethods: RNCamera | any;
  fileArray: string[];
  deviceGalleryImageArray: string[];
  deviceGalleryLength: number;
}

const initialState: IInitialState = {
  isCameraOpen: false,
  cameraMethods: null,
  fileArray: [],
  deviceGalleryImageArray: [],
  deviceGalleryLength: 0,
};

export const cameraSlice = createSlice({
  name: 'cameraSlice',
  initialState,
  reducers: {
    reset: () => initialState,
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
    addDeviceGalleryArray(state, action: PayloadAction<string[]>) {
      state.deviceGalleryImageArray = [
        ...state.deviceGalleryImageArray,
        ...action.payload,
      ];
      state.deviceGalleryLength += 100;
    },
    addDeviceGalleryItem(state, action: PayloadAction<string>) {
      state.deviceGalleryImageArray = [
        action.payload,
        ...state.deviceGalleryImageArray,
      ];
    },
  },
});

export default cameraSlice.reducer;
