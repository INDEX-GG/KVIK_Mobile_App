import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useDevice } from '../../../hooks/useDevice';

const PlaceOfferDefaultFieldsStyles = () => {
  const { isDark, theme } = useCurrentTheme();
  const { isIos } = useDevice();
  const color = isDark ? '#FFFFFF' : '#8F8F8F';
  return StyleSheet.create({
    container: {
      marginTop: 17,
    },
    defaultFieldsTextInput: {
      marginBottom: 15,
      minHeight: 68,
      paddingVertical: isIos ? 25 : 10,
      paddingHorizontal: 12,
      backgroundColor: isDark ? '#363636' : '#FFFFFF',
      borderRadius: 10,
      position: 'relative',
    },
    placeHolderColor: {
      color: color,
    },
    label: {
      fontWeight: 'normal',
      fontFamily: 'Ubuntu-Regular',
      position: 'absolute',
      left: 12,
      top: 2,
      color: color,
    },
    error: {
      position: 'absolute',
    },
    inputContainer: {
      fontSize: 16,
      paddingHorizontal: 0,
      fontWeight: 'normal',
      fontFamily: 'Ubuntu-Regular',
      lineHeight: 18,
      color: theme.color000ToFFF.color,
    },
    textFieldContainer: {
      fontSize: 16,
      paddingHorizontal: 0,
      fontWeight: 'normal',
      fontFamily: 'Ubuntu-Regular',
      lineHeight: 18,
      paddingTop: isIos ? 0 : 10,
      color: theme.color000ToFFF.color,
    },
    contactAndMapContainer: {
      marginTop: 21,
      marginBottom: 18,
      backgroundColor: isDark ? '#151515' : '#000000',
      borderRadius: 10,
    },
  });
};

export const usePlaceOfferDefaultFieldsStyles = () =>
  PlaceOfferDefaultFieldsStyles();
