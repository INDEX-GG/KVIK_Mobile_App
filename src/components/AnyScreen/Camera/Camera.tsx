import React, {FC} from 'react';
import { RNCamera } from 'react-native-camera';
import { useCamera } from '../../../hooks/useCamera';
import { Text, View, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { useCameraStyles } from './style';

interface ICameraProps {
  visible: boolean;
}

const Camera: FC<ICameraProps> = ({ visible }) => {
  const styles = useCameraStyles();
  const { cameraState, photoArrays, handleChangeCamera, handleTakePicture } =
    useCamera();

  return (
    <Modal animationType="slide" visible={visible}>
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
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
        <Image source={{ uri: photoArrays[0] }} />
      </View>
    </Modal>
  );
};

export default React.memo(Camera);
