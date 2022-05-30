import { useCallback } from 'react';

export const usePhotoList = () => {
  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  return {
    keyExtractor,
  };
};
