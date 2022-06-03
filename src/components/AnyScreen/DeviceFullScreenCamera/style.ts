import { StyleSheet } from 'react-native';

const DeviceFullScreenCameraStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    cameraContainer: {
      flexGrow: 1,
    },
    iconContainer: {
      width: 29,
    },
    iconContainerTwo: {
      width: 36,
    },
    imageContainer: {
      position: 'absolute',
      left: 13,
      top: 0,
      overflow: 'hidden',
      borderRadius: 8,
    },
    iconContainerArrow: {
      position: 'absolute',
      right: -66,
    },
    image: {
      width: 69,
      height: 69,
    },
    eventContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 21,
      left: 0,
    },
    actionContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
    },
    photoButton: {
      width: 65,
      height: 65,
      borderColor: '#FFFFFF',
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 32,
      marginHorizontal: 35,
    },
  });
};

export const useDeviceFullScreenCameraStyles = () => DeviceFullScreenCameraStyles();
