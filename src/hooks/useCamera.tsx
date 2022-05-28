import { useState } from 'react';
import {RNCamera} from 'react-native-camera';

export const useCamera = () => {
  const [cameraState, setCameraState] = useState<RNCamera | null>(null);
  const [photoArrays, setPhotoArrays] = useState<string[]>([]);

  const handleChangeCamera = (ref: RNCamera) => {
    setCameraState(ref);
  };

  const handleAddPhotoInArray = (photoFile: string) =>
    setPhotoArrays((prevState) => [...prevState, photoFile]);

  const handleTakePicture = async (camera: RNCamera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      handleAddPhotoInArray(data.uri);
    }
  };

  return {
    cameraState,
    photoArrays,
    handleTakePicture,
    handleChangeCamera,
    handleAddPhotoInArray,
  };
};
