import React, { FC, useMemo } from 'react';
import DevicePicture from '../DevicePicture/DevicePicture';
import DeviceCamera from '../DeviceCamera/DeviceCamera';
import ModalFullUI from '../../../UI/ModalFullUI/ModalFullUI';
import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';

interface ICameraProps {
  isVisibleModal: boolean;
  onClose: () => void;
}

const Camera: FC<ICameraProps> = ({ isVisibleModal, onClose }) => {
  const { fileArray } = useCameraStore();

  const countFiles = useMemo(() => fileArray.length, [fileArray]);

  return (
    <ModalFullUI
      modalProps={{ animationType: 'slide', visible: isVisibleModal }}
      onClose={onClose}
      visibleButton={!!countFiles}
      textButton={`Выбрать ${countFiles}`}
    >
      <DeviceCamera />
      <DevicePicture />
    </ModalFullUI>
  );
};

export default React.memo(Camera);
