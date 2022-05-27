import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';
import { useCurrentTheme } from '../../../hooks/useTheme';

const CardAdSortStyles = () => {
  const fontSize = useAdaptiveFont();
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconBox: {
      marginRight: 5,
    },
    icon: {
      color: isDark ? '#FFFFFF' : '#A4A4A4',
    },
    text: {
      fontSize: fontSize.little,
      color: isDark ? '#FFFFFF' : '#A4A4A4',
      fontWeight: '400',
      lineHeight: 16,
    },
  });
};

export const useCardAdSortStyles = () => CardAdSortStyles();
