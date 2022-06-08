import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import UbuntuTextUI from '../../../../../UI/UbuntuTextUI/UbuntuTextUI';
import CameraIcon from '../../../../../assets/CameraIcon.svg';
import { usePhotoPlaceholderStyles } from './style';

interface IPhotoPlaceholderPhoto {
  size: 'small' | 'big';
  onPress: () => void;
  isError?: boolean;
}

const PhotoPlaceholder: FC<IPhotoPlaceholderPhoto> = ({
  size,
  onPress,
  isError,
}) => {
  const styles = usePhotoPlaceholderStyles();
  const styleContainer = useMemo(() => {
    const containerSize =
      size === 'small' ? styles.smallContainer : styles.container;
    const containerError = isError
      ? { ...containerSize, ...styles.errorContainer }
      : containerSize;
    return containerError;
  }, [styles, size, isError]);

  return (
    <>
      <TouchableOpacity style={styleContainer} onPress={onPress}>
        <View style={styles.iconContainer}>
          <CameraIcon />
        </View>
        <UbuntuTextUI
          fontWeight={400}
          textProps={{ style: styles.containerText }}
        >
          добавить фото
        </UbuntuTextUI>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(PhotoPlaceholder);
