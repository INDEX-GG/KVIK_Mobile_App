import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';
import { useMemo, useState } from 'react';

export const useDeviceFullScreenCamera = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const [lightningMode, setLightningMode] = useState<'off' | 'on'>('off');
  const [orientationType, setOrientationType] = useState<'front' | 'back'>(
    'back'
  );
  const {
    handleToggleVisibleCamera,
    handleTakePicture,
    deviceGalleryImageArray,
  } = useCameraStore();

  const photoPreviewUri = useMemo(
    () => deviceGalleryImageArray[0],
    [deviceGalleryImageArray]
  );

  const handleChangeLightningMode = () => {
    if (lightningMode === 'on') {
      setLightningMode('off');
    } else {
      setLightningMode('on');
    }
  };

  const handleChangeOrientationType = () => {
    if (orientationType === 'back') {
      setOrientationType('front');
    } else {
      setOrientationType('back');
    }
  };

  const handleChangeClose = () => {
    setIsClose(true);
  };

  const isLightningMode = useMemo(
    () => lightningMode === 'on',
    [lightningMode]
  );

  return {
    isClose,
    photoPreviewUri,
    orientationType,
    lightningMode,
    isLightningMode,
    handleChangeClose,
    handleTakePicture,
    handleChangeLightningMode,
    handleToggleVisibleCamera,
    handleChangeOrientationType,
  };
};
