import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDevicePicture } from './useDevicePicture';
import PictureItem from './PictureItem/PictureItem';
import { useDevicePictureStyles } from './style';

const DevicePicture = () => {
  const { pictureArray, isPictureArray, keyExtractor } = useDevicePicture();
  const styles = useDevicePictureStyles();

  const renderItem = useCallback(
    ({ item }) => <PictureItem key={item} pictureItem={item} />,
    []
  );

  return (
    <View>
      {isPictureArray ? (
        <FlatList
          contentContainerStyle={styles.container}
          data={pictureArray}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : null}
    </View>
  );
};

export default React.memo(DevicePicture);
