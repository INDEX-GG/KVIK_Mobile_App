import { StyleSheet } from 'react-native';

const PhotoItemStyles = () => {
  return StyleSheet.create({
    photoContainer: {
      width: 81,
      height: 81,
      marginRight: 20,
      borderRadius: 8,
      overflow: 'hidden',
    },
  });
};

export const usePhotoItemStyles = () => PhotoItemStyles();
