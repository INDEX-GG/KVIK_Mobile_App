import React from 'react';
import { View } from 'react-native';
import PhotoPlaceholder from './PhotoPlaceholder/PhotoPlaceholder';
import Camera from '../../../AnyScreen/Camera/Camera';
import { usePlaceOfferPhoto } from './usePlaceOfferPhoto';
import { usePlaceOfferPhotoStyles } from './style';
import UbuntuTextUI from '../../../../UI/UbuntuTextUI/UbuntuTextUI';
import PhotoList from './PhotoList/PhotoList';
import { Controller } from 'react-hook-form';

const PlaceOfferPhoto = () => {
  const styles = usePlaceOfferPhotoStyles();
  const {
    control,
    fileArray,
    isFilesArrayLength,
    isVisiblePhotoFiles,
    handleToggleVisible,
  } = usePlaceOfferPhoto();

  return (
    <Controller
      name="photos"
      control={control}
      rules={{ required: true }}
      render={({ formState: { errors, isSubmitted } }) => (
        <>
          {isFilesArrayLength ? (
            <View style={styles.container}>
              <PhotoList
                onPressPhotoPlaceholder={handleToggleVisible}
                photosArray={fileArray}
              />
            </View>
          ) : (
            <PhotoPlaceholder
              onPress={handleToggleVisible}
              size="big"
              isError={!!errors && isSubmitted}
            />
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
        </>
      )}
    />
  );
};

export default React.memo(PlaceOfferPhoto);
