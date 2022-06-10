import { useEffect, useMemo } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';

export const useDevicePicture = (isVisibleButton: boolean) => {
  const {
    handleChangeDeviceGallery,
    deviceGalleryImageArray,
    deviceGalleryLength,
  } = useCameraStore();

  const isPictureArray = useMemo(
    () =>
      Array.isArray(deviceGalleryImageArray) && deviceGalleryImageArray.length,
    [deviceGalleryImageArray]
  );

  const innerContainer = useMemo(
    () => ({ marginBottom: isVisibleButton ? 90 : 30 }),
    [isVisibleButton]
  );

  const handleChangeGallery = (params: CameraRoll.GetPhotosParams) => {
    CameraRoll.getPhotos(params).then((response) => {
      const filterCameraPhoto = response.edges.map((item) => ({
        uri: item.node.image.uri,
        fileName: item.node.image.filename || 'defaultName.jpeg',
      }));
      handleChangeDeviceGallery(filterCameraPhoto);
    });
  };

  const handleScrollFlatList = () => {
    handleChangeGallery({
      assetType: 'Photos',
      first: 100,
      after: `${deviceGalleryLength}`,
    });
  };

  useEffect(() => {
    if (!isPictureArray) {
      handleChangeGallery({ assetType: 'Photos', first: 100 });
    }
  }, []);

  return {
    deviceGalleryLength,
    handleScrollFlatList,
    innerContainer,
    deviceGalleryImageArray,
    isPictureArray,
  };
};
