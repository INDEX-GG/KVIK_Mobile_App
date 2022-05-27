import React, { FC } from 'react';
import { useTextUIStyles } from './style';
import { ITextUIProps } from '../../models/IAdditionalFieldsModel';
import { TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { useTextUI } from './useTextUI';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';

const TextUI: FC<ITextUIProps> = (props) => {
  const {title, alias, customStyle, textNativeProps = {}} = props;
  const styles = customStyle ? customStyle : useTextUIStyles();
  const {
    control,
    handleChangeText,
  } = useTextUI();

  return (
    <Controller
      name={alias}
      control={control}
      render={({field: {value, onChange}}) => (
        <View style={styles.container}>
          {value ? (
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.label}} >
              {title}
            </UbuntuTextUI>
          ) : null}
          <TextInput
            value={value}
            onChangeText={(text) => handleChangeText(text, onChange)}
            placeholder={title}
            style={styles.inputContainer}
            placeholderTextColor={styles.inputColor.color}
            {...textNativeProps}
          />
        </View>
      )}
    />
  );
};


export default React.memo(TextUI);
