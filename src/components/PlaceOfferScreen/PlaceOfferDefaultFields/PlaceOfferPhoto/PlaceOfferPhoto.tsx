import React from 'react';
import { View } from 'react-native';
import PhotoPlaceholder from './PhotoPlaceholder/PhotoPlaceholder';
import Camera from '../../../AnyScreen/Camera/Camera';
import { usePlaceOfferPhoto } from './usePlaceOfferPhoto';
import { usePlaceOfferPhotoStyles } from './style';
import UbuntuTextUI from '../../../../UI/UbuntuTextUI/UbuntuTextUI';
import PhotoList from './PhotoList/PhotoList';

const PlaceOfferPhoto = () => {
  const styles = usePlaceOfferPhotoStyles();
  const {
    photosArray,
    isPhotoArrayLength,
    isVisiblePhotoFiles,
    handleToggleVisible,
  } = usePlaceOfferPhoto();

  return (
    <View>
      {isPhotoArrayLength ? (
        <View style={styles.container}>
          <PhotoList photosArray={photosArray} />
        </View>
      ) : (
        <PhotoPlaceholder onPress={handleToggleVisible} size="big" />
      )}
      <UbuntuTextUI
        fontWeight={400}
        textProps={{ style: styles.containerText }}
      >
        До 20 фотографий в формате JPG или PNG. Размер фото - до 25MB
      </UbuntuTextUI>
      <Camera
        isVisibleModal={isVisiblePhotoFiles}
        onClose={handleToggleVisible}
      />
    </View>
  );
};

export default React.memo(PlaceOfferPhoto);
