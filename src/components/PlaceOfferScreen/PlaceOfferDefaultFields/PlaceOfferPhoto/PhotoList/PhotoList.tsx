import React, { FC, useCallback } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import PhotoItem from '../PhotoItem/PhotoItem';
import { usePhotoListStyles } from './styles';
import { usePhotoList } from './usePhotoList';
import BasketIcon from '../../../../../assets/BacketIcon.svg';
import { IDevicePhoto } from '../../../../../types/types';

interface IPhotoListProps {
  photosArray: IDevicePhoto[];
  onPressPhotoPlaceholder: () => void;
}

const PhotoList: FC<IPhotoListProps> = ({
  photosArray,
  onPressPhotoPlaceholder,
}) => {
  const styles = usePhotoListStyles();
  const {
    deleteArray,
    isDeleteMode,
    handleDeletePhotos,
    handleToggleDeleteMode,
    handleAddPhotoInDeleteArray,
  } = usePhotoList();

  const renderItem = useCallback(
    ({ item }) => (
      <PhotoItem
        key={item}
        photo={item.uri}
        photoName={item.fileName}
        isDeleteMode={isDeleteMode}
        deleteArray={deleteArray}
        handleAddPhotoInDeleteArray={handleAddPhotoInDeleteArray}
        onToggleDeleteMode={handleToggleDeleteMode}
        onPressLastPhoto={onPressPhotoPlaceholder}
      />
    ),
    [isDeleteMode, deleteArray]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[...photosArray, { uri: 'lastPhoto', fileName: 'placeholder' }]}
        numColumns={3}
        renderItem={renderItem}
      />
      {isDeleteMode && (
        <TouchableOpacity
          style={styles.basketContainer}
          onPress={handleDeletePhotos}
        >
          <BasketIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(PhotoList);
