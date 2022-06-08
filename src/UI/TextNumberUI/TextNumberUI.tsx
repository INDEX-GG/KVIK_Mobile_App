import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { ITextNumberUIProps } from '../../models/IAdditionalFieldsModel';
import { useTextUIStyles } from '../TextUI/style';
import { useTextNumber } from './useTextNumberUI';
import { Controller } from 'react-hook-form';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';

const TextNumberUI: FC<ITextNumberUIProps> = (props) => {
  const {
    alias,
    default_value,
    customStyle,
    textNativeProps = {},
    required,
  } = props;
  const styles = customStyle ? customStyle : useTextUIStyles();
  const { control, handleChangeText, placeholderTitle, anyThem } =
    useTextNumber(props);

  return (
    <Controller
      name={alias}
      control={control}
      defaultValue={default_value}
      rules={{ required: required?.state }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <View
            style={{
              ...styles.container,
              ...(error ? styles.containerError : {}),
            }}
          >
            {value && !error ? (
              <UbuntuTextUI
                fontWeight={400}
                textProps={{ style: styles.label }}
              >
                {placeholderTitle}
              </UbuntuTextUI>
            ) : null}
            {error ? (
              <UbuntuTextUI
                fontWeight={400}
                textProps={{ style: styles.error }}
              >
                {required?.value}
              </UbuntuTextUI>
            ) : null}
            <TextInput
              value={value}
              keyboardType="numeric"
              onChangeText={(text) => handleChangeText(text, onChange)}
              placeholder={placeholderTitle}
              placeholderTextColor={styles.inputColor.color}
              style={{
                ...styles.inputContainer,
                borderBottomColor: error
                  ? anyThem.errorColor
                  : styles.inputContainer?.borderBottomColor,
              }}
              {...textNativeProps}
            />
          </View>
        );
      }}
    />
  );
};

export default React.memo(TextNumberUI);
