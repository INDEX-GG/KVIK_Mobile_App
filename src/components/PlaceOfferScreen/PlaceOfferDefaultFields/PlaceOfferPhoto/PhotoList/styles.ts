import { StyleSheet } from 'react-native';

const PhotoListStyles = () => {
  return StyleSheet.create({
    container: {},
    basketContainer: {
      display: 'flex',
      marginTop: 20,
      alignItems: 'center',
    },
  });
};

export const usePhotoListStyles = () => PhotoListStyles();
