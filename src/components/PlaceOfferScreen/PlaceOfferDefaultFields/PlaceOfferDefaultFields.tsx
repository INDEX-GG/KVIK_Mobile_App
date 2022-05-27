import React from 'react';
import { View, Text } from 'react-native';
import PlaceOfferTitle from "./PlaceOfferTitle/PlaceOfferTitle";
import PlaceOfferDescription from "./PlaceOfferDescription/PlaceOfferDescription";
import PlaceOfferPrice from "./PlaceOfferPrice/PlaceOfferPrice";

const PlaceOfferDefaultFields = () => {
  return (
    <View>
      <PlaceOfferTitle/>
      <PlaceOfferDescription/>
      <PlaceOfferPrice/>
    </View>
  );
};

export default React.memo(PlaceOfferDefaultFields);
