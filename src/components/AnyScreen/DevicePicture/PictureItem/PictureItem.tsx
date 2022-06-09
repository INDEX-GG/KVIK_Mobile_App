import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { usePictureItem } from './usePictureItem';
import { usePictureItemStyles } from './style';
import CheckBoxUI from '../../../../UI/CheckBoxUI/CheckBoxUI';

interface IPictureItemProps {
  pictureItem: string;
  pictureName: string;
}

const PictureItem: FC<IPictureItemProps> = ({ pictureItem, pictureName }) => {
  const { photoUri, isActive, handlePressItem } = usePictureItem(pictureItem);
  const styles = usePictureItemStyles();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePressItem(photoUri, pictureName)}
      activeOpacity={0.6}
    >
      <View style={styles.checkBoxContainer}>
        <CheckBoxUI
          active={!!isActive}
          defaultStyles={styles.checkboxDefault}
        />
      </View>
      <Image style={styles.imageContainer} source={{ uri: photoUri }} />
    </TouchableOpacity>
  );
};

export default React.memo(PictureItem);
