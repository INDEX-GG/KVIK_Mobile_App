import { StyleSheet } from 'react-native';

const PicturePlaceholderStyles = () => {
  return StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      marginBottom: 100,
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      textAlign: 'center',
      color: '#8F8F8F',
    },
    settingsLink: {
      fontSize: 18,
      lineHeight: 20,
      textAlign: 'center',
      color: '#00A0AB',
      textDecorationLine: 'underline',
    },
  });
};

export const usePicturePlaceholderStyles = () => PicturePlaceholderStyles();
