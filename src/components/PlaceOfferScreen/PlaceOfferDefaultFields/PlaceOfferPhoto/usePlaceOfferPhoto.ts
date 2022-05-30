import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';
import { useEffect } from 'react';

export const usePlaceOfferPhoto = () => {
  const {
    isCameraOpen,
    handleToggleVisibleCamera,
    photosArray,
    isPhotoArrayLength,
  } = useCameraStore();

  useEffect(() => {
    console.log(isCameraOpen);
  }, [isCameraOpen]);

  return {
    photosArray,
    isPhotoArrayLength,
    handleToggleVisibleCamera,
  };
};
