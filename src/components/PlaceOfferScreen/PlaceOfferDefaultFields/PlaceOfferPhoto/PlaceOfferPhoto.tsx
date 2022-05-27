import React from 'react';
import { View, Text } from 'react-native';
import PhotoPlaceholder from "./PhotoPlaceholder/PhotoPlaceholder";


const PlaceOfferPhoto = () => {

  return (
    <View>
      <PhotoPlaceholder/>
    </View>
  );
};

export default React.memo(PlaceOfferPhoto);
