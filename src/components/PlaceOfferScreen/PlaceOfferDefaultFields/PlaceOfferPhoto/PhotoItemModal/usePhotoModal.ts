import { useState } from 'react';

export const usePhotoModal = () => {
  const [isPhotoImportant, setIsPhotoImportant] = useState(false);

  return {
    isPhotoImportant,
    setIsPhotoImportant,
  };
};
