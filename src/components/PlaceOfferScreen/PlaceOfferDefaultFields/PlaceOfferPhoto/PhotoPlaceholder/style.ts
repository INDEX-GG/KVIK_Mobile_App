import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../../hooks/useTheme';

const PhotoPlaceholderStyles = () => {
  const { isDark } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      display: 'flex',
      height: 130,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 130,
      backgroundColor: isDark ? '#5A5A5A' : '#E9E9E9',
      borderRadius: 10,
      marginBottom: 10,
    },
    smallContainer: {
      padding: 6,
      width: 81,
      height: 81,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? '#5A5A5A' : '#E9E9E9',
    },
    iconContainer: {
      marginBottom: 3,
    },
    containerText: {
      fontSize: 12,
      textAlign: 'center',
      lineHeight: 14,
      maxWidth: 232,
      color: isDark ? '#FFFFFF' : '#C7C7C7',
    },
  });
};

export const usePhotoPlaceholderStyles = () => PhotoPlaceholderStyles();
