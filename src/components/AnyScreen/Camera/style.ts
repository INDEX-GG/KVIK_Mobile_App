import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';

const CameraStyles = () => {
  const { deviceHeight } = useSize();
  return StyleSheet.create({
    cameraContainer: {
      height: deviceHeight,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
};

export const useCameraStyles = () => CameraStyles();
