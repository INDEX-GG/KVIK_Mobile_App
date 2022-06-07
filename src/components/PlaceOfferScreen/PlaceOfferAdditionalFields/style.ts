import { StyleSheet } from 'react-native';

const PlaceOfferAdditionalFieldsStyles = () => {
  return StyleSheet.create({
    container: {
      marginTop: 15,
      paddingHorizontal: 16,
    },
    buttonContainer: {
      marginBottom: 20,
    },
  });
};

export const usePlaceOfferAdditionalFieldsStyles = () =>
  PlaceOfferAdditionalFieldsStyles();
