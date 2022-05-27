import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../../hooks/useAdaptiveFont';

const CardAdTitleStyles = () => {
  const { isDark } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    title: {
      color: isDark ? '#FFF' : '#000',
      fontSize: fontSize.sm,
      fontWeight: 'bold',
      lineHeight: 14,
      marginBottom: 4,
    },
  });
};

export const useCardAdTitleStyles = () => CardAdTitleStyles();
