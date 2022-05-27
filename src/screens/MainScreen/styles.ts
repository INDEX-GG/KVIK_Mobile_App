import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

export const MainScreenStyle = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    tabBarStyle: {
      backgroundColor: isDark ? '#585858' : '#FFF',
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    headerStyle: {
      backgroundColor: isDark ? '#585858' : '#FFF',
    },
    tabBarItemStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
};
