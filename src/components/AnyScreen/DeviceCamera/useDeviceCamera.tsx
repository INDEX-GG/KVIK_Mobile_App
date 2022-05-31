import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';

export const useDeviceCamera = () => {
  const { isCameraOpen, photosArray, handleToggleVisibleCamera } =
    useCameraStore();
  return {
    photosArray,
    isCameraOpen,
    handleToggleVisibleCamera,
  };
};
