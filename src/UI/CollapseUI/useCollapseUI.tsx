import { useState } from 'react';

export const useCollapseUI = () => {
  const [isVisible, setIsVisible] = useState<boolean>();

  const handleToggleVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  return {
    isVisible,
    handleToggleVisible,
  };
};
