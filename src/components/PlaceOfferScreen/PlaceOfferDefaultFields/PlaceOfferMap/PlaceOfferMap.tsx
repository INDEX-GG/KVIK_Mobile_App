import React from 'react';
import { View } from 'react-native';
import PlaceOfferModal from '../PlaceOfferModal/PlaceOfferModal';

const PlaceOfferMap = () => {
  return (
    <PlaceOfferModal text={'Местоположение'} onToggle={() => console.log(123)}>
      <View />
    </PlaceOfferModal>
  );
};

export default React.memo(PlaceOfferMap);
