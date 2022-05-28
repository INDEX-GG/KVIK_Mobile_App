import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

export const usePlaceOfferPhoto = () => {
  const [visibleCamera, setVisibleCamera] = useState<boolean>(false);

  const handleOpenCamera = () => {
    setVisibleCamera((prevState) => !prevState);
  };

  const handleBackClick = () => {
    console.log(123);
    return true;
  };

  useEffect(() => {
    if (visibleCamera) {
      BackHandler.addEventListener('hardwareBackPress', handleBackClick);
    }
    if (!visibleCamera) {
      BackHandler.removeEventListener('hardwareBackPress', handleBackClick);
    }
  }, [visibleCamera]);

  return {
    visibleCamera,
    handleOpenCamera,
  };
};
