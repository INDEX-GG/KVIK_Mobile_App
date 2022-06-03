import { useCallback, useState } from 'react';
import { useCameraStore } from '../../../../../hooks/useReducerHook/useCameraStore';

export const usePhotoList = () => {
  const { fileArray, handleDeletePhotosInFileArray } = useCameraStore();
  const [deleteArray, setIsDeleteArray] = useState<string[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const handleToggleDeleteMode = (photo: string) => {
    return () => {
      if (isDeleteMode) {
        setIsDeleteMode(false);
        setIsDeleteArray([]);
        return;
      }
      setIsDeleteMode(true);
      setIsDeleteArray([photo]);
    };
  };

  const handleAddPhotoInDeleteArray = (photo: string) => {
    return () => {
      setIsDeleteArray((prevState) => {
        const findPhoto = prevState.find((item) => item === photo);
        if (!findPhoto) {
          return [...prevState, photo];
        }
        return prevState.filter((item) => item !== photo);
      });
    };
  };

  const handleDeletePhotos = () => {
    let filterFilesArray = JSON.parse(JSON.stringify(fileArray));
    for (let i = 0; i < deleteArray.length; i++) {
      filterFilesArray = filterFilesArray.filter(
        (item: string) => item !== deleteArray[i]
      );
    }
    handleDeletePhotosInFileArray(filterFilesArray);
    setIsDeleteMode(false);
  };

  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  return {
    deleteArray,
    isDeleteMode,
    keyExtractor,
    handleDeletePhotos,
    handleAddPhotoInDeleteArray,
    handleToggleDeleteMode,
  };
};
