import { StyleSheet } from 'react-native';

const ButtonUIStyles = () => {
  return StyleSheet.create({
    buttonContainer: {
      width: '100%',
      backgroundColor: '#00A0AB',
      borderRadius: 40,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 20,
      lineHeight: 22,
      color: '#FFFFFF',
    },
  });
};

export const useButtonUIStyles = () => ButtonUIStyles();
