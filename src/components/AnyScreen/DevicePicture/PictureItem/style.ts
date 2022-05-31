import { StyleSheet } from 'react-native';
import { useSize } from '../../../../hooks/useSize';

const PictureItemStyles = () => {
  const { deviceWidth } = useSize();
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    imageContainer: {
      width: deviceWidth / 3 - 10,
      height: 117,
    },
    checkBoxContainer: {
      position: 'absolute',
      right: 6,
      top: 6,
      zIndex: 1,
    },
    checkboxDefault: {
      width: 18,
      height: 18,
      borderWidth: 1,
    },
  });
};

export const usePictureItemStyles = () => PictureItemStyles();
