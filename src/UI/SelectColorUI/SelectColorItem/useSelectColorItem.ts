import { IColors } from '../../../types/types';
import { useMemo } from 'react';
import SilverGradientIcon from '../../../assets/SilverColorIcon.svg';
import AnyGradientICon from '../../../assets/AnyColorIcon.svg';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

export const useSelectColorItem = (
  colorItem: IColors,
  onPress: UseFormSetValue<{ color: number } | FieldValues>
) => {
  const isLinearGradient = useMemo(
    () => !!colorItem.value.match('linear-gradient'),
    [colorItem.value]
  );

  const GradientIcon = useMemo(() => {
    if (isLinearGradient) {
      switch (colorItem.name) {
        case 'Серебристый':
          return SilverGradientIcon;
        case 'Разноцветный':
          return AnyGradientICon;
      }
    }
    return null;
  }, [isLinearGradient]);

  const handleChangeColor = () => {
    onPress('color', colorItem.id - 1);
  };

  return {
    GradientIcon,
    isLinearGradient,
    handleChangeColor,
  };
};
