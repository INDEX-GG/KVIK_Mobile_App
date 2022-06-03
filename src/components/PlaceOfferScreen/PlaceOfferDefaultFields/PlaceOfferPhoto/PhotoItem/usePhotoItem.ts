import { HandleDeletePhotoItem, PhotoType } from './types';
import { useMemo, useState } from 'react';
import { usePlaceOfferStore } from '../../../../../hooks/useReducerHook/usePlaceOfferStore';

export const usePhotoItem = (
  photo: PhotoType,
  isDeleteMode: boolean,
  deleteArray: string[],
  handleAddPhotoInDeleteArray: HandleDeletePhotoItem
) => {
  const [isVisibleModal, setVisibleModal] = useState<boolean>(false);
  const isLastPhoto = useMemo(() => photo === 'lastPhoto', [photo]);
  const { importantPhoto, handleChangeImportantPhoto } = usePlaceOfferStore();

  const isImportantPhoto = useMemo(
    () => photo === importantPhoto,
    [photo, importantPhoto]
  );

  const isVisibleImportant = useMemo(
    () => isImportantPhoto && !isDeleteMode,
    [isImportantPhoto, isDeleteMode]
  );

  const isDeleteItem = useMemo(
    () => !!deleteArray.find((item) => item === photo),
    [deleteArray]
  );

  const handleToggleModal = () => {
    setVisibleModal((prevState) => !prevState);
  };

  const handlePressItem = useMemo(
    () =>
      isDeleteMode ? handleAddPhotoInDeleteArray(photo) : handleToggleModal,
    [isDeleteMode]
  );

  return {
    isLastPhoto,
    isDeleteItem,
    importantPhoto,
    isVisibleModal,
    handlePressItem,
    isImportantPhoto,
    handleToggleModal,
    isVisibleImportant,
    handleChangeImportantPhoto,
  };
};
