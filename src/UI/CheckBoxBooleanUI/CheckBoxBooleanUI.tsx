import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import CheckBoxUI from '../CheckBoxUI/CheckBoxUI';
import { Controller, useFormContext } from 'react-hook-form';
import { useCheckBoxBooleanStyles } from './style';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import { ICheckBoxBooleanUIProps } from '../../models/IAdditionalFieldsModel';
import { useCurrentTheme } from '../../hooks/useTheme';

const CheckBoxBooleanUI: FC<ICheckBoxBooleanUIProps> = ({
  title,
  alias,
  defaultValue = false,
  required,
  isVisibleBorderBottom = true,
}) => {
  const { control } = useFormContext();
  const styles = useCheckBoxBooleanStyles();
  const { anyThem } = useCurrentTheme();

  const containerStyles = useMemo(
    () =>
      isVisibleBorderBottom
        ? {
            ...styles.container,
            paddingVertical: 20,
            borderBottomWidth: 2,
          }
        : styles.container,
    [isVisibleBorderBottom, styles]
  );

  return (
    <Controller
      name={alias}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: required?.state }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TouchableOpacity
          style={{
            ...containerStyles,
            borderBottomColor: error
              ? anyThem.errorColor
              : containerStyles.borderBottomColor,
          }}
          onPress={() => onChange(!value)}
        >
          <CheckBoxUI active={value} />
          <UbuntuTextUI fontWeight={400} textProps={{ style: styles.text }}>
            {title}
          </UbuntuTextUI>
        </TouchableOpacity>
      )}
    />
  );
};

export default React.memo(CheckBoxBooleanUI);
