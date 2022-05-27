import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

export const CategorySwiperStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      marginTop: 3,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      position: 'relative',
      marginRight: 12,
    },
    itemLast: {
      marginRight: 5,
    },
    title: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 10,
      fontSize: 14,
      lineHeight: 16.41,
      marginBottom: 3,
      color: isDark ? '#FFFFFF' : '#A4A4A4',
      textAlign: 'center',
      width: 92,
    },
    icon: {
      marginTop: 25,
      color: isDark ? '#5A8C89' : '#ABD0D1',
    },
  });
};

export const useCategorySwiperStyles = () => CategorySwiperStyles();
