import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';
import { useState } from 'react';

export const usePlaceOfferPhoto = () => {
  const { photosArray, isPhotoArrayLength } = useCameraStore();

  const [isVisiblePhotoFiles, setIsVisiblePhotoFiles] =
    useState<boolean>(false);

  const handleToggleVisible = () => {
    setIsVisiblePhotoFiles((prevState) => !prevState);
  };

  return {
    photosArray,
    isVisiblePhotoFiles,
    isPhotoArrayLength,
    handleToggleVisible,
  };
};
