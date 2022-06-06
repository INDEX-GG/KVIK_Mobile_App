import React, { FC } from 'react';
import { View, Pressable } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDeviceCameraStyles } from './style';
import CameraIcon from '../../../assets/CameraIcon.svg';
import { useDeviceCamera } from './useDeviceCamera';
import DeviceFullScreenCamera from '../DeviceFullScreenCamera/DeviceFullScreenCamera';

const DeviceCamera: FC = () => {
  const styles = useDeviceCameraStyles();
  const { handleToggleVisibleCamera, isCameraOpen } = useDeviceCamera();

  return (
    <>
      <Pressable style={styles.container} onPress={handleToggleVisibleCamera}>
        {!isCameraOpen && (
          <RNCamera
            // ref={handleChangeCamera}
            captureAudio={false}
            style={styles.cameraContainer}
          >
            {({ status }) => {
              if (status !== 'READY') {
                return (
                  <View
                    style={{
                      ...styles.iconCameraContainer,
                      ...styles.iconPlaceholderContainer,
                    }}
                  >
                    <CameraIcon />
                  </View>
                );
              }
              return (
                <View style={styles.iconCameraContainer}>
                  <CameraIcon />
                </View>
              );
            }}
          </RNCamera>
        )}
      </Pressable>
      {isCameraOpen && (
        <DeviceFullScreenCamera
          visible={isCameraOpen}
          onClose={handleToggleVisibleCamera}
        />
      )}
    </>
  );
};

export default React.memo(DeviceCamera);
