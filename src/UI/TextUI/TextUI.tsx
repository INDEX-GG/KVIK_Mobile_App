import React, { FC } from 'react';
import { useTextUIStyles } from './style';
import { ITextUIProps } from '../../models/IAdditionalFieldsModel';
import { TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { useTextUI } from './useTextUI';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import { useCurrentTheme } from '../../hooks/useTheme';

const TextUI: FC<ITextUIProps> = (props) => {
  const { title, alias, customStyle, textNativeProps = {}, required } = props;
  const { anyThem } = useCurrentTheme();
  const styles = customStyle ? customStyle : useTextUIStyles();
  const { control, handleChangeText } = useTextUI();

  return (
    <Controller
      name={alias}
      control={control}
      rules={{ required: required?.state }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View
          style={{
            ...styles.container,
            ...(error ? styles.containerError : {}),
          }}
        >
          {value && !error ? (
            <UbuntuTextUI fontWeight={400} textProps={{ style: styles.label }}>
              {title}
            </UbuntuTextUI>
          ) : null}
          {error ? (
            <UbuntuTextUI fontWeight={400} textProps={{ style: styles.error }}>
              {required?.value}
            </UbuntuTextUI>
          ) : null}
          <TextInput
            value={value}
            onChangeText={(text) => handleChangeText(text, onChange)}
            placeholder={title}
            style={{
              ...styles.inputContainer,
              borderBottomColor: error
                ? anyThem.errorColor
                : styles.inputContainer?.borderBottomColor,
            }}
            placeholderTextColor={styles.inputColor.color}
            {...textNativeProps}
          />
        </View>
      )}
    />
  );
};

export default React.memo(TextUI);
