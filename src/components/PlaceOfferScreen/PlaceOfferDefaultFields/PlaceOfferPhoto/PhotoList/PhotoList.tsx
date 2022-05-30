import React, { FC, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { usePhotoList } from './usePhotoList';
import PhotoItem from '../PhotoItem/PhotoItem';
import PhotoPlaceholder from '../PhotoPlaceholder/PhotoPlaceholder';
import {usePhotoListStyles} from "./styles";

interface IPhotoListProps {
  photosArray: string[];
}

const PhotoList: FC<IPhotoListProps> = ({ photosArray }) => {
  const { keyExtractor } = usePhotoList();
  const styles = usePhotoListStyles();
  const renderItem = useCallback(
    ({ item }) => (
      <PhotoItem
        key={item}
        photo={item}
        importantPhoto={''}
        onPress={() => console.log(1)}
      />
    ),
    []
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={photosArray}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <PhotoPlaceholder size={'small'} />
    </View>
  );
};

export default React.memo(PhotoList);
