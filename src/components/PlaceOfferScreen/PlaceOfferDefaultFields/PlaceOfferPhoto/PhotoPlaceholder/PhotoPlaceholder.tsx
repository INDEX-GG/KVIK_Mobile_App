import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import UbuntuTextUI from "../../../../../UI/UbuntuTextUI/UbuntuTextUI";
import CameraIcon from '../../../../../assets/CameraIcon.svg'
import {usePhotoPlaceholderStyles} from "./style";

const PhotoPlaceholder = () => {
  const styles = usePhotoPlaceholderStyles();
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <CameraIcon/>
        </View>
        <UbuntuTextUI
          fontWeight={400}
          textProps={{style: styles.containerText}}
        >
          Добавить фото
        </UbuntuTextUI>
      </TouchableOpacity>
      <UbuntuTextUI
        fontWeight={400}
        textProps={{style: styles.containerText}}
      >
        До 20 фотографий в формате JPG или PNG.
        Размер фото - до 25MB
      </UbuntuTextUI>
    </>
  );
};

export default React.memo(PhotoPlaceholder);
