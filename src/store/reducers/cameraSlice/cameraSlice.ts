import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RNCamera } from 'react-native-camera';

interface IInitialState {
  isCameraOpen: boolean;
  photosArray: string[];
  cameraMethods: RNCamera | any;
}

const initialState: IInitialState = {
  isCameraOpen: false,
  cameraMethods: null,
  photosArray: [],
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
  },
});

export default cameraSlice.reducer;
