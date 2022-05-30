import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { usePhotoItemStyles } from './style';

interface IPhotoItemProps {
  photo: string;
  importantPhoto: string;
  onPress: () => void;
}

const PhotoItem: FC<IPhotoItemProps> = ({ photo, importantPhoto, onPress }) => {
  const styles = usePhotoItemStyles();
  return (
    <TouchableOpacity onPress={onPress} style={styles.photoContainer}>
      <Image style={{ width: 81, height: 81 }} source={{ uri: photo }} />
    </TouchableOpacity>
  );
};

export default React.memo(PhotoItem);
