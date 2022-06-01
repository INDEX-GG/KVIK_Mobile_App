import { StyleSheet } from 'react-native';

const CameraStyles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100%',
    },
  });
};

export const useCameraStyles = () => CameraStyles();
