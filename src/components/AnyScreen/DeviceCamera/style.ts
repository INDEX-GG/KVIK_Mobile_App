import { StyleSheet } from 'react-native';

const DeviceCameraStyles = () => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      marginBottom: 15,
      marginHorizontal: 15,
    },
    cameraContainer: {
      borderRadius: 10,
      // height: 129,
      width: '100%',
      height: '100%',
      flex: 1,
      overflow: 'hidden',
      position: 'relative',
    },
    iconContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export const useDeviceCameraStyles = () => DeviceCameraStyles();
