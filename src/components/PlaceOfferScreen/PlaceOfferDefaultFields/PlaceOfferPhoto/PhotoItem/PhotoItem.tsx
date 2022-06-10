import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { usePhotoItemStyles } from './style';
import { IPhotoItemProps } from './types';
import { usePhotoItem } from './usePhotoItem';
import PhotoPlaceholder from '../PhotoPlaceholder/PhotoPlaceholder';
import PhotoItemModal from '../PhotoItemModal/PhotoItemModal';
import UbuntuTextUI from '../../../../../UI/UbuntuTextUI/UbuntuTextUI';
import SuccessMarkIcon from '../../../../../assets/SuccesMark.svg';

const PhotoItem: FC<IPhotoItemProps> = ({
  photo,
  photoName,
  deleteArray,
  isDeleteMode,
  onPressLastPhoto,
  onToggleDeleteMode,
  handleAddPhotoInDeleteArray,
}) => {
  const styles = usePhotoItemStyles();
  const {
    isLastPhoto,
    isDeleteItem,
    isVisibleModal,
    handlePressItem,
    isImportantPhoto,
    isVisibleImportant,
    handleToggleModal,
    handleChangeImportantPhoto,
  } = usePhotoItem(
    photo,
    photoName,
    isDeleteMode,
    deleteArray,
    handleAddPhotoInDeleteArray
  );

  return (
    <View>
      {isLastPhoto ? (
        !isDeleteMode && (
          <View style={styles.container}>
            <View style={styles.photoContainer}>
              <PhotoPlaceholder onPress={onPressLastPhoto} size="small" />
            </View>
          </View>
        )
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={handlePressItem}
            onLongPress={onToggleDeleteMode(photo)}
            style={styles.photoContainer}
          >
            <Image style={styles.photo} source={{ uri: photo }} />
            {isVisibleImportant && (
              <View style={styles.importantContainer}>
                <UbuntuTextUI
                  fontWeight={700}
                  textProps={{ style: styles.importantText }}
                >
                  Главное фото
                </UbuntuTextUI>
              </View>
            )}
            {isDeleteMode && (
              <View style={styles.checkboxContainer}>
                {isDeleteItem && (
                  <View style={styles.iconContainer}>
                    <SuccessMarkIcon />
                  </View>
                )}
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
      <PhotoItemModal
        photo={photo}
        photoName={photoName}
        isImportantPhoto={isImportantPhoto}
        isVisibleModal={isVisibleModal}
        handleChangeImportantPhoto={handleChangeImportantPhoto(photo)}
        handleToggleModal={handleToggleModal}
      />
    </View>
  );
};

export default React.memo(PhotoItem);
