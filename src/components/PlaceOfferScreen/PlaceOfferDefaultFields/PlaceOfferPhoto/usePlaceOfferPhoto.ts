import { useCameraStore } from '../../../../hooks/useReducerHook/useCameraStore';
import { useEffect, useState } from 'react';
import { usePlaceOfferStore } from '../../../../hooks/useReducerHook/usePlaceOfferStore';
import { useFormContext } from 'react-hook-form';

export const usePlaceOfferPhoto = () => {
  const { fileArray, isFilesArrayLength } = useCameraStore();
  const { importantPhoto, handleChangeImportantPhoto } = usePlaceOfferStore();
  const { control, setValue } = useFormContext();

  const [isVisiblePhotoFiles, setIsVisiblePhotoFiles] =
    useState<boolean>(false);

  const handleToggleVisible = () => {
    setIsVisiblePhotoFiles((prevState) => !prevState);
  };

  useEffect(() => {
    const fileArrayLength = fileArray.length;
    setValue('photos', fileArrayLength ? fileArray : undefined);
    if (isFilesArrayLength && !importantPhoto) {
      handleChangeImportantPhoto(fileArray[0].uri)();
      return;
    }
    if (isFilesArrayLength && importantPhoto) {
      const findPhoto = fileArray.find((photo) => photo.uri === importantPhoto);
      if (!findPhoto) {
        handleChangeImportantPhoto(fileArray[0].uri)();
        return;
      }
    }
  }, [importantPhoto, fileArray]);

  return {
    control,
    fileArray,
    isVisiblePhotoFiles,
    isFilesArrayLength,
    handleToggleVisible,
  };
};
