import React, { FC } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import ModalUI from '../../../../../UI/ModalUI/ModalUI';
import CheckBoxUI from '../../../../../UI/CheckBoxUI/CheckBoxUI';
import UbuntuTextUI from '../../../../../UI/UbuntuTextUI/UbuntuTextUI';
import { usePhotoItemModalStyles } from './style';
import ArrowLeft from '../../../../../assets/ModalCloseIcon.svg';

interface IPhotoItemModalProps {
  photo: string;
  photoName: string;
  isVisibleModal: boolean;
  isImportantPhoto: boolean;
  handleChangeImportantPhoto: () => void;
  handleToggleModal: () => void;
}

const PhotoItemModal: FC<IPhotoItemModalProps> = ({
  photo,
  isVisibleModal,
  isImportantPhoto,
  handleChangeImportantPhoto,
  handleToggleModal,
}) => {
  const styles = usePhotoItemModalStyles();

  return (
    <ModalUI isVisible={isVisibleModal} onBackdropPress={handleToggleModal}>
      <View>
        <TouchableOpacity style={styles.closeIcon} onPress={handleToggleModal}>
          <ArrowLeft />
        </TouchableOpacity>
        <View style={styles.photoModalContainer}>
          <Image style={styles.photoModal} source={{ uri: photo }} />
        </View>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={handleChangeImportantPhoto}
        >
          <CheckBoxUI
            active={isImportantPhoto}
            defaultStyles={styles.checkboxDefault}
            activeStyles={styles.checkBoxActive}
          />
          <UbuntuTextUI fontWeight={500} textProps={{ style: styles.text }}>
            Сделать главной фотографией
          </UbuntuTextUI>
        </TouchableOpacity>
      </View>
    </ModalUI>
  );
};

export default React.memo(PhotoItemModal);
