import { StyleSheet } from 'react-native';

const DeviceCameraStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: 15,
      marginHorizontal: 15,
    },
    cameraContainer: {
      borderRadius: 10,
      height: 129,
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
    capture: {
      // flex: 0,
      // borderRadius: 5,
      // padding: 15,
      // paddingHorizontal: 20,
      // alignSelf: 'center',
      // margin: 20,
    },
  });
};

export const useDeviceCameraStyles = () => DeviceCameraStyles();
