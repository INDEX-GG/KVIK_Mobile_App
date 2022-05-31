import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';
import {useSize} from "../../hooks/useSize";

const ModalFullUIStyles = () => {
  const { isDark } = useCurrentTheme();
  const { deviceHeight } = useSize();
  return StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: isDark ? '#585858' : '#E8E8E8',
    },
    innerContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: isDark ? '#151515' : '#F5F5F5',
      marginTop: 16,
      marginHorizontal: 15,
      paddingVertical: 13,
      elevation: 15,
    },
    buttonContainer: {
      marginBottom: 12,
    },
    cancelText: {
      paddingLeft: 20,
      fontSize: 16,
      lineHeight: 18,
      color: '#8F8F8F',
    },
    bottomButtonContainer: {
      position: 'absolute',
      top: deviceHeight - 62,
      left: 0,
      zIndex: 10,
      width: '100%',
      height: 62,
      backgroundColor: isDark ? '#151515' : '#F5F5F5',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export const useModalFullUIStyles = () => ModalFullUIStyles();
