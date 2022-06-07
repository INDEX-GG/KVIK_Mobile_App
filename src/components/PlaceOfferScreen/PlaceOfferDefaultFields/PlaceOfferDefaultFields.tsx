import React, { useEffect } from 'react';
import { View } from 'react-native';
import PlaceOfferTitle from './PlaceOfferTitle/PlaceOfferTitle';
import PlaceOfferDescription from './PlaceOfferDescription/PlaceOfferDescription';
import PlaceOfferPrice from './PlaceOfferPrice/PlaceOfferPrice';
import PlaceOfferPhoto from './PlaceOfferPhoto/PlaceOfferPhoto';
import { useDevice } from '../../../hooks/useDevice';
import { usePlaceOfferDefaultFieldsStyles } from './style';
import PlaceOfferContact from './PlaceOfferContact/PlaceOfferContact';
import PlaceOfferMap from './PlaceOfferMap/PlaceOfferMap';

const PlaceOfferDefaultFields = () => {
  const styles = usePlaceOfferDefaultFieldsStyles();
  const { hasAndroidPermission, isAndroid } = useDevice();

  useEffect(() => {
    if (isAndroid) {
      hasAndroidPermission().then((r) => console.log(r));
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <PlaceOfferTitle />
        <PlaceOfferDescription />
        <PlaceOfferPrice />
        <PlaceOfferPhoto />
      </View>
      <View style={styles.contactAndMapContainer}>
        <PlaceOfferMap />
        <PlaceOfferContact />
      </View>
    </>
  );
};

export default React.memo(PlaceOfferDefaultFields);
