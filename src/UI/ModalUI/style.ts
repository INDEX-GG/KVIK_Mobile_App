import { StyleSheet } from 'react-native';

const ModalUIStyles = () => {
  return StyleSheet.create({
    overlay: {
      zIndex: 1,
      padding: 0,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      zIndex: 1,
    },
  });
};

export const useModalUIStyles = () => ModalUIStyles();
