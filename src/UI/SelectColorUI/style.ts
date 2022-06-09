import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const SelectColorUIStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textContainer: {
      flexDirection: 'row',
    },
    containerTitle: {
      fontSize: 16,
      lineHeight: 18,
      color: isDark ? '#FFFFFF' : '#000000',
      marginRight: 22,
    },
    colorTitle: {
      fontSize: 16,
      lineHeight: 18,
      color: isDark ? '#FFFFFF' : '#000000',
    },
    iconColor: {
      color: isDark ? '#8F8F8F' : '#C7C7C7',
    },
  });
};

export const useSelectColorUIStyles = () => SelectColorUIStyles();
