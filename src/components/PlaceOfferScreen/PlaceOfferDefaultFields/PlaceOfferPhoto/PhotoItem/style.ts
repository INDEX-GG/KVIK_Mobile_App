import { StyleSheet } from 'react-native';
import { useSize } from '../../../../../hooks/useSize';

const PhotoItemStyles = () => {
  const { deviceWidth } = useSize();
  return StyleSheet.create({
    container: {
      width: deviceWidth / 3 - 9,
    },
    photoContainer: {
      width: 81,
      height: 81,
      marginTop: 15,
      borderRadius: 8,
      overflow: 'hidden',
      position: 'relative',
    },
    photo: {
      width: 81,
      height: 81,
    },
    importantContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    importantText: {
      fontSize: 13,
      lineHeight: 14,
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });
};

export const usePhotoItemStyles = () => PhotoItemStyles();
