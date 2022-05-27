import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../../hooks/useAdaptiveFont';

const CardAdPriceStyles = () => {
  const { isDark } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    price: {
      color: isDark ? '#FFF' : '#000',
      fontSize: fontSize.Msm,
      fontWeight: 'bold',
      lineHeight: 21,
      marginBottom: 4,
    },
  });
};

export const useCardAdPriceStyles = () => CardAdPriceStyles();
