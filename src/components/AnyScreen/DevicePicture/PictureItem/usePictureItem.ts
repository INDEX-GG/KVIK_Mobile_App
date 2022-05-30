import { PhotoIdentifier } from '@react-native-community/cameraroll';
import { useMemo } from 'react';
import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';

export const usePictureItem = (pictureItem: PhotoIdentifier) => {
  const { fileArray, handleAddPhotoFileInArray, handleRemovePhotoFileInArray } =
    useCameraStore();
  const photoUri = useMemo(() => pictureItem.node.image.uri, [pictureItem]);
  const isActive = useMemo(
    () => fileArray?.find((item) => item === photoUri),
    [fileArray]
  );

  const handlePressItem = (photoFile: string) => {
    return () => {
      if (isActive) {
        handleRemovePhotoFileInArray(photoFile);
        return;
      }
      handleAddPhotoFileInArray(photoFile);
    };
  };

  return {
    photoUri,
    isActive,
    pictureItem,
    handlePressItem,
  };
};
