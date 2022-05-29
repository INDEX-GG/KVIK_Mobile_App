import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';

const PlaceOfferPhotoStyles = () => {
  const { isDark } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      width: '100%',
      minHeight: 130,
      backgroundColor: isDark ? '#5A5A5A' : '#E9E9E9',
      borderRadius: 10,
      marginBottom: 15,
      paddingVertical: 16,
      paddingHorizontal: 18,
    },
    containerText: {
      fontSize: 12,
      lineHeight: 14,
      maxWidth: 232,
      color: isDark ? '#FFFFFF' : '#C7C7C7',
    },
  });
};

export const usePlaceOfferPhotoStyles = () => PlaceOfferPhotoStyles();
