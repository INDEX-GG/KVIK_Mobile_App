import { StyleSheet } from 'react-native';

const DevicePictureStyles = () => {
  return StyleSheet.create({
    container: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
    },
    listContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
    },
  });
};

export const useDevicePictureStyles = () => DevicePictureStyles();
