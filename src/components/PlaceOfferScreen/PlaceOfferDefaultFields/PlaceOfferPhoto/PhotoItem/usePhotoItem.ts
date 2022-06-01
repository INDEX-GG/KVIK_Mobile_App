import { PhotoType } from './types';
import { useMemo, useState } from 'react';
import { usePlaceOfferStore } from '../../../../../hooks/useReducerHook/usePlaceOfferStore';

export const usePhotoItem = (photo: PhotoType) => {
  const [isVisibleModal, setVisibleModal] = useState<boolean>(false);
  const isLastPhoto = useMemo(() => photo === 'lastPhoto', [photo]);
  const { importantPhoto, handleChangeImportantPhoto } = usePlaceOfferStore();

  const isImportantPhoto = useMemo(
    () => photo === importantPhoto,
    [photo, importantPhoto]
  );

  const handleToggleModal = () => {
    setVisibleModal((prevState) => !prevState);
  };

  return {
    isLastPhoto,
    importantPhoto,
    isVisibleModal,
    isImportantPhoto,
    handleToggleModal,
    handleChangeImportantPhoto,
  };
};
