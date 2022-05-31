import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDeviceCameraStyles } from './style';
import CameraIcon from '../../../assets/CameraIcon.svg';
import { useDeviceCamera } from './useDeviceCamera';
import DeviceFullScreenCamera from '../DeviceFullScreenCamera/DeviceFullScreenCamera';

const DeviceCamera = () => {
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
                  <View>
                    <Text>23</Text>
                  </View>
                );
              }
              return (
                <View style={styles.iconContainer}>
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
