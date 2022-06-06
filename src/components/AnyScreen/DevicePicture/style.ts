import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';
import { useDevice } from '../../../hooks/useDevice';

const DevicePictureStyles = () => {
  const { deviceHeight } = useSize();
  const { isIos } = useDevice();
  return StyleSheet.create({
    container: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
      height: '100%',
      maxHeight: isIos ? deviceHeight - 250 : deviceHeight - 170,
    },
  });
};

export const useDevicePictureStyles = () => DevicePictureStyles();
