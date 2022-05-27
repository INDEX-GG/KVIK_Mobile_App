import React, {FC, useMemo} from 'react';
import { TouchableOpacity } from 'react-native';
import CheckBoxUI from '../CheckBoxUI/CheckBoxUI';
import { Controller, useFormContext } from 'react-hook-form';
import { useCheckBoxBooleanStyles } from './style';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import {ICheckBoxBooleanUIProps} from "../../models/IAdditionalFieldsModel";

const CheckBoxBooleanUI: FC<ICheckBoxBooleanUIProps> = ({
  title,
  alias,
  isVisibleBorderBottom = true
}) => {

  const {control} = useFormContext();
  const styles = useCheckBoxBooleanStyles();

  const containerStyles = useMemo(() => (
    isVisibleBorderBottom ? {
      ...styles.container,
      paddingVertical: 20,
      borderBottomWidth: 2,
    } : styles.container
  ), [isVisibleBorderBottom, styles]);

  return (
    <Controller
      name={alias}
      control={control}
      render={({ field: {value, onChange}}) => (
        <TouchableOpacity style={containerStyles} onPress={() => onChange(!value)}>
          <CheckBoxUI active={value}/>
          <UbuntuTextUI
            fontWeight={400}
            textProps={{style: styles.text}}
          >
            {title}
          </UbuntuTextUI>
        </TouchableOpacity>
      )}
    />
  );
};

export default React.memo(CheckBoxBooleanUI);
