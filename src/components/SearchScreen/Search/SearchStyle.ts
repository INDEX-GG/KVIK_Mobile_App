import { useCurrentTheme } from '../../../hooks/useTheme';
import { StyleSheet } from 'react-native';

export const SearchStyle = () => {
  const { isDark } = useCurrentTheme();

  const styles = StyleSheet.create({
    container: {
      marginTop: 9,
      marginBottom: 9,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    search: {
      flexGrow: 1,
    },
    searchInput: {
      paddingHorizontal: 8,
      borderRadius: 20,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#A4A4A4',
      fontFamily: 'Ubuntu-Medium',
      fontWeight: 'Medium',
      fontSize: '14',
      lineHeight: '16',
    },
    searchInputContainer: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      height: 40,
    },
    filter: {
      marginLeft: 15,
    },
    filterIcon: {
      color: '#00A0AB',
    },
    glass: {
      position: 'absolute',
      right: 10,
      top: 12,
    },
    glassIcon: {
      color: '#A4A4A4',
    },
  });

  return styles;
};

export const useSearchStyle = () => SearchStyle();
