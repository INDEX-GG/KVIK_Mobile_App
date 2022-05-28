import React from 'react';
import { View } from 'react-native';
import PhotoPlaceholder from './PhotoPlaceholder/PhotoPlaceholder';
import Camera from '../../../AnyScreen/Camera/Camera';
import { usePlaceOfferPhoto } from './usePlaceOfferPhoto';

const PlaceOfferPhoto = () => {
  const { visibleCamera, handleOpenCamera } = usePlaceOfferPhoto();

  return (
    <View>
      <PhotoPlaceholder handleOpenCamera={handleOpenCamera} />
      <Camera visible={visibleCamera} />
    </View>
  );
};

export default React.memo(PlaceOfferPhoto);
