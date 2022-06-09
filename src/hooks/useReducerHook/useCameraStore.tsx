import { useMemo } from 'react';
import { RNCamera } from 'react-native-camera';
import { useAppSelector } from '../useAppSelector';
import { useAppDispatch } from '../useAppDispatch';
import { cameraSlice } from '../../store/reducers/cameraSlice/cameraSlice';
import CameraRoll from '@react-native-community/cameraroll';
import {IDevicePhoto} from "../../types/types";

export const useCameraStore = () => {
  const dispatch = useAppDispatch();

  const {
    isCameraOpen,
    fileArray,
    deviceGalleryImageArray,
    deviceGalleryLength,
  } = useAppSelector((state) => state.cameraReducer);

  const isFilesArrayLength = useMemo(
    () => !!(Array.isArray(fileArray) && fileArray.length),
    [fileArray]
  );

  const handleToggleVisibleCamera = () => {
    dispatch(cameraSlice.actions.toggleCamera());
  };

  const handleChangeDeviceGallery = (photoFiles: IDevicePhoto[]) => {
    dispatch(cameraSlice.actions.addDeviceGalleryArray(photoFiles));
  };

  const handleChangeDeviceItem = (photoFiles: IDevicePhoto) => {
    dispatch(cameraSlice.actions.addDeviceGalleryItem(photoFiles));
  };

  const handleAddPhotoFileInArray = (photo: IDevicePhoto) => {
    dispatch(
      cameraSlice.actions.addFileInArray({
        uri: photo.uri,
        fileName: photo.fileName,
      })
    );
  };

  const handleRemovePhotoFileInArray = (photo: IDevicePhoto) => {
    if (Array.isArray(fileArray)) {
      const filterFilesArray = fileArray.filter(
        (item) => item.uri !== photo.uri
      );
      dispatch(cameraSlice.actions.removeFileInArray(filterFilesArray));
    }
  };

  const handleDeletePhotosInFileArray = (newFileArray: IDevicePhoto[]) => {
    dispatch(cameraSlice.actions.removeFileInArray(newFileArray));
  };

  const handleTakePicture = (
    camera: RNCamera,
    successCallback?: () => void
  ) => {
    return async () => {
      if (camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        CameraRoll.save(data.uri, { type: 'photo', album: 'Camera' })
          .then((response) => {
            console.log(response);
            if (response) {
              // handleAddPhotoFileInArray(data.uri);
              // handleChangeDeviceItem({uri: data.uri, fileName: ''});
              // if (successCallback) {
              //   successCallback();
              // }
            }
          })
          .catch(() => {
            // handleAddPhotoFileInArray(data.uri);
            // handleChangeDeviceItem(data.uri);
            if (successCallback) {
              successCallback();
            }
          });
      }
    };
  };

  return {
    fileArray,
    isCameraOpen,
    handleTakePicture,
    deviceGalleryLength,
    isFilesArrayLength,
    deviceGalleryImageArray,
    handleChangeDeviceGallery,
    handleRemovePhotoFileInArray,
    handleDeletePhotosInFileArray,
    handleAddPhotoFileInArray,
    handleToggleVisibleCamera,
  };
};
