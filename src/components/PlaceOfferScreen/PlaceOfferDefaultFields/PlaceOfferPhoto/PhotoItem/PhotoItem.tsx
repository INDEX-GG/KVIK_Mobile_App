import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { usePhotoItemStyles } from './style';
import { IPhotoItemProps } from './types';
import { usePhotoItem } from './usePhotoItem';
import PhotoPlaceholder from '../PhotoPlaceholder/PhotoPlaceholder';
import PhotoItemModal from '../PhotoItemModal/PhotoItemModal';
import UbuntuTextUI from '../../../../../UI/UbuntuTextUI/UbuntuTextUI';

const PhotoItem: FC<IPhotoItemProps> = ({ photo, onPressLastPhoto, isEditMode, onToggleEditMode }) => {
  const styles = usePhotoItemStyles();
  const {
    isLastPhoto,
    handleToggleModal,
    isVisibleModal,
    isImportantPhoto,
    handleChangeImportantPhoto,
  } = usePhotoItem(photo);
  return (
    <>
      <View style={styles.container}>
        {isLastPhoto ? (
          <View style={styles.photoContainer}>
            <PhotoPlaceholder onPress={onPressLastPhoto} size="small" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleToggleModal}
            style={styles.photoContainer}
          >
            <Image style={styles.photo} source={{ uri: photo }} />
            {isImportantPhoto && (
              <View style={styles.importantContainer}>
                <UbuntuTextUI
                  fontWeight={700}
                  textProps={{ style: styles.importantText }}
                >
                  Главное фото
                </UbuntuTextUI>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
      <PhotoItemModal
        photo={photo}
        isImportantPhoto={isImportantPhoto}
        isVisibleModal={isVisibleModal}
        handleChangeImportantPhoto={handleChangeImportantPhoto(photo)}
        handleToggleModal={handleToggleModal}
      />
    </>
  );
};

export default React.memo(PhotoItem);
