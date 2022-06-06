import React, { FC } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import ModalFullUI from '../../../UI/ModalFullUI/ModalFullUI';
import { RNCamera } from 'react-native-camera';
import { useDeviceFullScreenCameraStyles } from './style';
import LightningIcon from '../../../assets/LightningIcon.svg';
import LightningTrueIcon from '../../../assets/LightningIconTrue.svg';
import OrientationIcon from '../../../assets/CameraOrientationIcon.svg';
import CameraRightIcon from '../../../assets/CameraArrowRight.svg';
import { useDeviceFullScreenCamera } from './useDeviceFullScreenCamera';

interface IDeviceFullScreenCameraProps {
  visible: boolean;
  onClose: () => void;
}

const DeviceFullScreenCamera: FC<IDeviceFullScreenCameraProps> = ({
  visible,
  onClose,
}) => {
  const styles = useDeviceFullScreenCameraStyles();
  const {
    isClose,
    handleChangeClose,
    photoPreviewUri,
    orientationType,
    handleTakePicture,
    lightningMode,
    isLightningMode,
    handleChangeOrientationType,
    handleChangeLightningMode,
  } = useDeviceFullScreenCamera();

  return (
    <ModalFullUI
      modalProps={{ visible: visible }}
      onClose={onClose}
      visibleDefaultContainer={false}
    >
      <View style={styles.container}>
        <RNCamera
          type={orientationType}
          flashMode={lightningMode}
          useNativeZoom={true}
          captureAudio={false}
          style={styles.cameraContainer}
        >
          {({ camera }) => {
            return (
              <View style={styles.eventContainer}>
                <TouchableOpacity
                  onPress={onClose}
                  style={styles.imageContainer}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: photoPreviewUri }}
                  />
                </TouchableOpacity>
                <View style={styles.actionContainer}>
                  <TouchableOpacity
                    onPress={handleChangeLightningMode}
                    style={styles.iconContainer}
                  >
                    {isLightningMode ? (
                      <LightningTrueIcon />
                    ) : (
                      <LightningIcon />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleTakePicture(camera, handleChangeClose)}
                  >
                    <View style={styles.photoButton} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleChangeOrientationType}
                    style={styles.iconContainerTwo}
                  >
                    <OrientationIcon />
                  </TouchableOpacity>
                  {isClose ? (
                    <TouchableOpacity
                      style={styles.iconContainerArrow}
                      onPress={onClose}
                    >
                      <CameraRightIcon />
                    </TouchableOpacity>
                  ) : (
                    <View />
                  )}
                </View>
              </View>
            );
          }}
        </RNCamera>
      </View>
    </ModalFullUI>
  );
};

export default React.memo(DeviceFullScreenCamera);
