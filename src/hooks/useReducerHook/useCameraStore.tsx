import { useMemo, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { useAppSelector } from '../useAppSelector';
import { useAppDispatch } from '../useAppDispatch';
import { cameraSlice } from '../../store/reducers/cameraSlice/cameraSlice';

export const useCameraStore = () => {
  const [cameraMethods, setCameraMethods] = useState<null | RNCamera>(null);
  const dispatch = useAppDispatch();

  const { isCameraOpen, photosArray, fileArray } = useAppSelector(
    (state) => state.cameraReducer
  );

  const isPhotoArrayLength = useMemo(
    () => Array.isArray(photosArray) && photosArray.length,
    [photosArray]
  );

  const handleToggleVisibleCamera = () => {
    dispatch(cameraSlice.actions.toggleCamera());
  };

  const handleChangeCamera = (ref: RNCamera) => {
    setCameraMethods(ref);
  };

  const handleAddPhotoInArray = (photoFile: string) =>
    dispatch(cameraSlice.actions.addPhotoArray(photoFile));

  const handleTakePicture = async (camera: RNCamera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      handleAddPhotoInArray(data.uri);
      handleToggleVisibleCamera();
    }
  };

  const handleAddPhotoFileInArray = (photoFile: string) => {
    dispatch(cameraSlice.actions.addFileInArray(photoFile));
  };

  const handleRemovePhotoFileInArray = (photoFile: string) => {
    if (Array.isArray(fileArray)) {
      const filterFilesArray = fileArray.filter((item) => item !== photoFile);
      dispatch(cameraSlice.actions.removeFileInArray(filterFilesArray));
    }
  };

  return {
    fileArray,
    isCameraOpen,
    photosArray,
    cameraMethods,
    handleTakePicture,
    handleChangeCamera,
    isPhotoArrayLength,
    handleAddPhotoInArray,
    handleRemovePhotoFileInArray,
    handleAddPhotoFileInArray,
    handleToggleVisibleCamera,
  };
};
