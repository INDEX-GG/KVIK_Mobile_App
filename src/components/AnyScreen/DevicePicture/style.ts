import { StyleSheet } from 'react-native';

const DevicePictureStyles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
    },
  });
};

export const useDevicePictureStyles = () => DevicePictureStyles();
