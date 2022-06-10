import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const SelectColorUIStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    containerTitle: {
      fontSize: 18,
      lineHeight: 21,
      color: isDark ? '#FFFFFF' : '#000000',
      marginRight: 22,
    },
    colorContainer: {
      alignItems: 'center',
    },
    arrowDefault: {
      marginRight: 16,
    },
    colorTitle: {
      fontSize: 18,
      lineHeight: 21,
      color: isDark ? '#FFFFFF' : '#000000',
    },
    iconColor: {
      color: isDark ? '#8F8F8F' : '#C7C7C7',
    },
    list: {
      marginTop: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 280,
    },
  });
};

export const useSelectColorUIStyles = () => SelectColorUIStyles();
