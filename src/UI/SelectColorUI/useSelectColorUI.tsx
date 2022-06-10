import { useCallback, useMemo, useState } from 'react';
import { IColors } from '../../types/types';
import { useFormContext } from 'react-hook-form';

export const useSelectColorUI = (text_list_values: IColors[]) => {
  const { control, setValue } = useFormContext();
  const [isVisible, setISVisible] = useState<boolean>(false);

  const arrowStyle = useMemo(
    () => (isVisible ? { transform: [{ rotate: '90deg' }] } : {}),
    [isVisible]
  );

  const isTextListValues = useMemo(
    () => Array.isArray(text_list_values) && text_list_values.length,
    [text_list_values]
  );

  const keyExtractor = useCallback(
    (item) => `${item.name}${item.id}${item.value}`,
    []
  );

  const handleToggleVisible = () => {
    setISVisible((prevState) => !prevState);
  };

  return {
    control,
    setValue,
    isVisible,
    arrowStyle,
    keyExtractor,
    isTextListValues,
    handleToggleVisible,
  };
};
