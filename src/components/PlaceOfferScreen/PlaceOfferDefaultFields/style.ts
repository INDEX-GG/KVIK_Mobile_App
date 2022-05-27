import { StyleSheet } from 'react-native';
import {useCurrentTheme} from "../../../hooks/useTheme";

const PlaceOfferDefaultFieldsStyles = () => {
  const { isDark, theme } = useCurrentTheme();
  const color = isDark ? '#FFFFFF' : '#8F8F8F';
  return StyleSheet.create({
    defaultFieldsTextInput: {
      marginBottom: 15,
      minHeight: 68,
      paddingVertical: 25,
      marginHorizontal: 16,
      paddingHorizontal: 12,
      backgroundColor: isDark ? '#5A5A5A' : '#FFFFFF',
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
    inputContainer: {
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: 'Ubuntu-Regular',
      lineHeight: 18,
      color: theme.color000ToFFF.color,
    }
  });
};

export const usePlaceOfferDefaultFieldsStyles = () => PlaceOfferDefaultFieldsStyles();
