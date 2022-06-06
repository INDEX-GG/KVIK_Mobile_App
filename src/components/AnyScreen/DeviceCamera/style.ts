import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';

const DeviceCameraStyles = () => {
  const { deviceHeight } = useSize();
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      flex: 1,
      marginBottom: 15,
      marginHorizontal: 15,
      height: '100%',
      minHeight: 129,
      maxHeight: '100%',
    },
    cameraContainer: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      flex: 1,
      overflow: 'hidden',
      position: 'relative',
    },
    iconCameraContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconPlaceholderContainer: {
      backgroundColor: '#585858',
    },
  });
};

export const useDeviceCameraStyles = () => DeviceCameraStyles();
