import React, { FC, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDevicePicture } from './useDevicePicture';
import PictureItem from './PictureItem/PictureItem';
import { useDevicePictureStyles } from './style';

interface IDevicePictureProps {
  isVisibleButton: boolean;
}

const DevicePicture: FC<IDevicePictureProps> = ({ isVisibleButton }) => {
  const styles = useDevicePictureStyles();
  const {
    deviceGalleryImageArray,
    isPictureArray,
    innerContainer,
    handleScrollFlatList,
  } = useDevicePicture(isVisibleButton);

  const renderItem = useCallback(
    ({ item }) => <PictureItem key={item} pictureItem={item} />,
    []
  );

  return (
    <View style={styles.container}>
      {isPictureArray ? (
        <FlatList
          style={innerContainer}
          contentContainerStyle={styles.listContainer}
          numColumns={3}
          data={deviceGalleryImageArray}
          renderItem={renderItem}
          onEndReached={handleScrollFlatList}
          onEndReachedThreshold={0.1}
        />
      ) : null}
    </View>
  );
};

export default React.memo(DevicePicture);
