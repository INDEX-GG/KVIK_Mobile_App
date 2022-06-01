import { useCallback, useState } from 'react';

export const usePhotoList = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleToggleEditMode = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  return {
    keyExtractor,
    isEditMode,
    handleToggleEditMode,
  };
};
