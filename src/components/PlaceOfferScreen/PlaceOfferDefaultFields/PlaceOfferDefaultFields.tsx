import React from 'react';
import { View, Text } from 'react-native';
import PlaceOfferTitle from "./PlaceOfferTitle/PlaceOfferTitle";

const PlaceOfferDefaultFields = () => {
  return (
    <View>
      <PlaceOfferTitle/>
    </View>
  );
};

export default React.memo(PlaceOfferDefaultFields);
