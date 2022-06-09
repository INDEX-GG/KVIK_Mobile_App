import { useMemo } from 'react';
import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';

export const usePictureItem = (pictureItem: string) => {
  const { fileArray, handleAddPhotoFileInArray, handleRemovePhotoFileInArray } =
    useCameraStore();
  const photoUri = useMemo(() => pictureItem, [pictureItem]);
  const isActive = useMemo(
    () => fileArray?.find((item) => item.uri === photoUri),
    [fileArray]
  );

  const handlePressItem = (photoFile: string, photoName: string) => {
    return () => {
      if (isActive) {
        handleRemovePhotoFileInArray({ uri: photoFile, fileName: photoName });
        return;
      }
      handleAddPhotoFileInArray({ uri: photoFile, fileName: photoName });
    };
  };

  return {
    photoUri,
    isActive,
    pictureItem,
    handlePressItem,
  };
};
