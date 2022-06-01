import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';

const DevicePictureStyles = () => {
  const { deviceHeight } = useSize();
  return StyleSheet.create({
    container: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
      maxHeight: deviceHeight - 160,
    },
    innerContainer: {
      marginBottom: 90,
    },
    listContainer: {
      // display: 'flex',
      // flexWrap: 'wrap',
      // flexDirection: 'row',
      width: '100%',
    },
  });
};

export const useDevicePictureStyles = () => DevicePictureStyles();
