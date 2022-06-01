import React, { FC, useMemo } from 'react';
import DevicePicture from '../DevicePicture/DevicePicture';
import DeviceCamera from '../DeviceCamera/DeviceCamera';
import ModalFullUI from '../../../UI/ModalFullUI/ModalFullUI';
import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';
import {Text, View} from 'react-native';
import { useCameraStyles } from './style';

interface ICameraProps {
  isVisibleModal: boolean;
  onClose: () => void;
}

const Camera: FC<ICameraProps> = ({ isVisibleModal, onClose }) => {
  const { fileArray } = useCameraStore();

  const countFiles = useMemo(() => fileArray.length, [fileArray]);
  const styles = useCameraStyles();

  return (
    <ModalFullUI
      modalProps={{ animationType: 'slide', visible: isVisibleModal }}
      onClose={onClose}
      visibleButton={!!countFiles}
      textButton={`Выбрать ${countFiles}`}
    >
      <View style={styles.container}>
        <DeviceCamera />
        <DevicePicture isVisibleButton={!!countFiles} />
      </View>
    </ModalFullUI>
  );
};

export default React.memo(Camera);
