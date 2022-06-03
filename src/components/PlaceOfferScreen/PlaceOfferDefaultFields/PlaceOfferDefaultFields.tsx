import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PlaceOfferTitle from './PlaceOfferTitle/PlaceOfferTitle';
import PlaceOfferDescription from './PlaceOfferDescription/PlaceOfferDescription';
import PlaceOfferPrice from './PlaceOfferPrice/PlaceOfferPrice';
import PlaceOfferPhoto from './PlaceOfferPhoto/PlaceOfferPhoto';
import { useDevice } from '../../../hooks/useDevice';

const PlaceOfferDefaultFields = () => {
  const { hasAndroidPermission } = useDevice();

  useEffect(() => {
    hasAndroidPermission();
  }, []);

  return (
    <View>
      <PlaceOfferTitle />
      <PlaceOfferDescription />
      <PlaceOfferPrice />
      <PlaceOfferPhoto />
    </View>
  );
};

export default React.memo(PlaceOfferDefaultFields);
