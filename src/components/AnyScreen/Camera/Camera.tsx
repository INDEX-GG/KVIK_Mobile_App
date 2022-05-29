import React, { FC } from 'react';
import { RNCamera } from 'react-native-camera';
import { useCameraStore } from '../../../hooks/useReducerHook/useCameraStore';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { useCameraStyles } from './style';

const Camera: FC = () => {
  const styles = useCameraStyles();
  const { isCameraOpen, photosArray, handleChangeCamera, handleTakePicture } =
    useCameraStore();

  console.log(photosArray);

  return (
    <Modal animationType="slide" visible={isCameraOpen}>
      <View>
        <RNCamera
          ref={handleChangeCamera}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            // console.log(camera, status, recordAudioPermissionStatus);
            if (status !== 'READY') {
              return (
                <View>
                  <Text>23</Text>
                </View>
              );
            }
            return (
              <View style={styles.cameraContainer}>
                <TouchableOpacity
                  onPress={() => handleTakePicture(camera)}
                  style={styles.capture}
                >
                  <Text style={{ fontSize: 14 }}> ФОТО </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    </Modal>
  );
};

export default React.memo(Camera);
