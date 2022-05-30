import React from 'react';
import { View } from 'react-native';
import PhotoPlaceholder from './PhotoPlaceholder/PhotoPlaceholder';
import Camera from '../../../AnyScreen/Camera/Camera';
import { usePlaceOfferPhoto } from './usePlaceOfferPhoto';
import { usePlaceOfferPhotoStyles } from './style';
import UbuntuTextUI from '../../../../UI/UbuntuTextUI/UbuntuTextUI';
import PhotoList from './PhotoList/PhotoList';
import RNCamera from '../../../RNCamera/RNCamera';
import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';

const PlaceOfferPhoto = () => {
  const styles = usePlaceOfferPhotoStyles();
  const { photosArray, isPhotoArrayLength } = usePlaceOfferPhoto();
  const { handleToggleVisibleCamera } = useCameraStore();

  return (
    <View>
      {/*<RNCamera />*/}
      {isPhotoArrayLength ? (
        <View style={styles.container}>
          <PhotoList photosArray={photosArray} />
        </View>
      ) : (
        <PhotoPlaceholder onPress={handleToggleVisibleCamera} size="big" />
      )}
      <UbuntuTextUI
        fontWeight={400}
        textProps={{ style: styles.containerText }}
      >
        До 20 фотографий в формате JPG или PNG. Размер фото - до 25MB
      </UbuntuTextUI>
      <Camera />
    </View>
  );
};

export default React.memo(PlaceOfferPhoto);
