import React, {FC, useMemo} from 'react';
import { View, TouchableOpacity } from 'react-native';
import UbuntuTextUI from '../../../../../UI/UbuntuTextUI/UbuntuTextUI';
import CameraIcon from '../../../../../assets/CameraIcon.svg';
import { usePhotoPlaceholderStyles } from './style';
import {useCameraStore} from "../../../../../hooks/useReducerHook/useCameraStore";

interface IPhotoPlaceholderPhoto {
  size: 'small' | 'big';
}

const PhotoPlaceholder: FC<IPhotoPlaceholderPhoto> = ({size}) => {
  const { handleToggleVisibleCamera } = useCameraStore();
  const styles = usePhotoPlaceholderStyles();
  const styleContainer = useMemo(
    () => (size === 'small' ? styles.smallContainer : styles.container),
    [styles, size]
  );

  return (
    <>
      <TouchableOpacity
        style={styleContainer}
        onPress={handleToggleVisibleCamera}
      >
        <View style={styles.iconContainer}>
          <CameraIcon />
        </View>
        <UbuntuTextUI
          fontWeight={400}
          textProps={{ style: styles.containerText }}
        >
          Добавить фото
        </UbuntuTextUI>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(PhotoPlaceholder);
