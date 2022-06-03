import React, {FC} from 'react';
import {View, Text, TouchableOpacityProps, TouchableOpacity, TextProps} from 'react-native';
import { useButtonUIStyles } from './style';
import UbuntuTextUI from "../UbuntuTextUI/UbuntuTextUI";

interface IButtonUIProps {
  buttonProps?: TouchableOpacityProps;
  textProps?: TextProps;
  text: string;
}

const ButtonUI: FC<IButtonUIProps> = ({ buttonProps, text, textProps }) => {
  const styles = useButtonUIStyles();

  return (
    <TouchableOpacity {...buttonProps} style={styles.buttonContainer}>
      <UbuntuTextUI
        fontWeight={400}
        {...textProps}
        textProps={{ ...textProps, style: styles.buttonText }}
      >
        {text}
      </UbuntuTextUI>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonUI);
