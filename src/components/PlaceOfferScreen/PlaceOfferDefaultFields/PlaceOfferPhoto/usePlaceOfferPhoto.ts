import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';
import { useEffect, useState } from 'react';
import { usePlaceOfferStore } from '../../../../hooks/useReducerHook/usePlaceOfferStore';

export const usePlaceOfferPhoto = () => {
  const { fileArray, isFilesArrayLength } = useCameraStore();
  const { importantPhoto, handleChangeImportantPhoto } = usePlaceOfferStore();

  const [isVisiblePhotoFiles, setIsVisiblePhotoFiles] =
    useState<boolean>(false);

  const handleToggleVisible = () => {
    setIsVisiblePhotoFiles((prevState) => !prevState);
  };

  useEffect(() => {
    if (isFilesArrayLength && !importantPhoto) {
      handleChangeImportantPhoto(fileArray[0])();
      return;
    }
    if (isFilesArrayLength && importantPhoto) {
      const findPhoto = fileArray.find((photo) => photo === importantPhoto);
      if (!findPhoto) {
        handleChangeImportantPhoto(fileArray[0])();
        return;
      }
    }
  }, [importantPhoto, fileArray]);

  return {
    fileArray,
    isVisiblePhotoFiles,
    isFilesArrayLength,
    handleToggleVisible,
  };
};
