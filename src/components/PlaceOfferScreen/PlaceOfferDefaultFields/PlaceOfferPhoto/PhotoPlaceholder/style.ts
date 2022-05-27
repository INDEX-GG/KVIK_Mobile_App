import { StyleSheet } from 'react-native';
import {useCurrentTheme} from "../../../../../hooks/useTheme";

const PhotoPlaceholderStyles = () => {
  const { isDark } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 130,
      borderRadius: 10,
      backgroundColor: isDark ? '#5A5A5A' : '#E9E9E9',
      marginBottom: 9,
    },
    iconContainer: {
      marginBottom: 3,
    },
    containerText: {
      fontSize: 12,
      lineHeight: 14,
      maxWidth: 232,
      color: isDark ? '#FFFFFF' : '#C7C7C7'
    }
  });
};

export const usePhotoPlaceholderStyles = () => PhotoPlaceholderStyles();
