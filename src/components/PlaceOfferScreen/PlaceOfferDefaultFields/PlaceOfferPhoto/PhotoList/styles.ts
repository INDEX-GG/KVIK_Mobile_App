import { StyleSheet } from 'react-native';

const PhotoListStyles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  });
};

export const usePhotoListStyles = () => PhotoListStyles();
