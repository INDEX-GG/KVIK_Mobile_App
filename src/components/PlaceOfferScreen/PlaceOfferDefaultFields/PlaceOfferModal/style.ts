import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';

const PlaceOfferModalStyles = () => {
  const { isDark, theme} = useCurrentTheme();
  return StyleSheet.create({
    container: {
      paddingVertical: 25,
      borderBottomWidth: 2,
      borderBottomColor: isDark ? '#5A5A5A' : '#E4E4E4',
      borderStyle: 'solid',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 16,
      lineHeight: 18,
      color: theme.color000ToFFF.color,
    },
    iconContainer: {
      paddingRight: 12,
    },
    arrowColor: {
      color: isDark ? '#8F8F8F' : '#C7C7C7',
    },
  });
};

export const usePlaceOfferModalStyles = () => PlaceOfferModalStyles();
