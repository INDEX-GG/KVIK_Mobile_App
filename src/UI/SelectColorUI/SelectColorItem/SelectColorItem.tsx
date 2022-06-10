import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelectColorItemStyles } from './style';
import { IColors } from '../../../types/types';
import { useSelectColorItem } from './useSelectColorItem';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface ISelectColorItemProps {
  itemColor: IColors;
  onPress: UseFormSetValue<{ color: number } | FieldValues>;
}

const SelectColorItem: FC<ISelectColorItemProps> = ({ itemColor, onPress }) => {
  const styles = useSelectColorItemStyles(itemColor.value);
  const { isLinearGradient, GradientIcon, handleChangeColor } =
    useSelectColorItem(itemColor, onPress);

  return (
    <TouchableOpacity style={styles.container} onPress={handleChangeColor}>
      {isLinearGradient ? (
        GradientIcon && <GradientIcon />
      ) : (
        <View style={styles.colorItem} />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(SelectColorItem);
