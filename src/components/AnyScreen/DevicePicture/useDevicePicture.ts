import { useCallback, useEffect, useMemo, useState } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';

export const useDevicePicture = () => {
  const { handleChangeDeviceGallery, deviceGalleryImageArray } =
    useCameraStore();

  const isPictureArray = useMemo(
    () =>
      Array.isArray(deviceGalleryImageArray) && deviceGalleryImageArray.length,
    [deviceGalleryImageArray]
  );

  const keyExtractor = useCallback((item, index) => `${item}${index}`, []);

  useEffect(() => {
    CameraRoll.getPhotos({ assetType: 'Photos', first: 100 }).then(
      (response) => {
        const filterCameraPhoto = response.edges
          .filter((item) => item.node.group_name === 'Camera')
          .map((item) => item.node.image.uri);
        handleChangeDeviceGallery(filterCameraPhoto);
      }
    );
  }, []);

  return {
    deviceGalleryImageArray,
    keyExtractor,
    isPictureArray,
  };
};
