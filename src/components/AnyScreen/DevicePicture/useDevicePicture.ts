import { useCallback, useEffect, useMemo, useState } from 'react';
import CameraRoll, {
  PhotoIdentifier,
} from '@react-native-community/cameraroll';

export const useDevicePicture = () => {
  const [pictureArray, setPictureArray] = useState<PhotoIdentifier[]>([]);

  const isPictureArray = useMemo(
    () => Array.isArray(pictureArray) && pictureArray.length,
    [pictureArray]
  );

  const keyExtractor = useCallback(
    (item, index) => `${item.node.image.uri}${index}`,
    []
  );

  useEffect(() => {
    CameraRoll.getPhotos({ assetType: 'Photos', first: 100 }).then(
      (response) => {
        const filterCameraPhoto = response.edges.filter(
          (item) => item.node.group_name === 'Camera'
        );
        setPictureArray(filterCameraPhoto);
      }
    );
  }, []);

  return {
    pictureArray,
    keyExtractor,
    isPictureArray,
  };
};
