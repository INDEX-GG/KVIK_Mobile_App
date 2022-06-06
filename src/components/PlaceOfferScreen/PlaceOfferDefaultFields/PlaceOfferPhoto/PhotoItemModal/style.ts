import { StyleSheet } from 'react-native';

const PhotoItemModalStyles = () => {
  return StyleSheet.create({
    closeIcon: {
      width: 30,
      height: 26,
      marginBottom: 6,
    },
    photoModalContainer: {
      width: 300,
      borderRadius: 10,
      overflow: 'hidden',
    },
    photoModal: {
      width: 300,
      height: 300,
    },
    textContainer: {
      display: 'flex',
      paddingLeft: 8,
      marginTop: 5,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: 5,
      fontSize: 16,
      lineHeight: 18,
      color: '#FFFFFF',
    },
    checkboxDefault: {
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    checkBoxActive: {
      backgroundColor: '#FFFFFF',
    },
  });
};

export const usePhotoItemModalStyles = () => PhotoItemModalStyles();
