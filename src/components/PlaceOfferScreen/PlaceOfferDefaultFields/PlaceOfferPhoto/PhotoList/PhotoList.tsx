import React, { FC, useCallback } from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PhotoItem from '../PhotoItem/PhotoItem';
import { usePhotoListStyles } from './styles';
import { usePhotoList } from './usePhotoList';
import BacketIcon from '../../../../../assets/BacketIcon.svg';

interface IPhotoListProps {
  photosArray: string[];
  onPressPhotoPlaceholder: () => void;
}

const PhotoList: FC<IPhotoListProps> = ({
  photosArray,
  onPressPhotoPlaceholder,
}) => {
  const styles = usePhotoListStyles();
  const { isEditMode, handleToggleEditMode } = usePhotoList();

  const renderItem = useCallback(
    ({ item }) => (
      <PhotoItem
        key={item}
        photo={item}
        isEditMode={isEditMode}
        onToggleEditMode={handleToggleEditMode}
        onPressLastPhoto={onPressPhotoPlaceholder}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[...photosArray, 'lastPhoto']}
        numColumns={3}
        renderItem={renderItem}
      />
      {isEditMode && (
        <TouchableOpacity style={styles.basketContainer}>
          <BacketIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(PhotoList);
