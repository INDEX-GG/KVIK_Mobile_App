import React, { FC } from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  TextProps,
} from 'react-native';
import { useButtonUIStyles } from './style';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import { textWeight } from '../../types/types';

interface IButtonUIProps {
  buttonProps?: TouchableOpacityProps;
  textProps?: TextProps;
  text: string;
  fontWeight?: textWeight;
}

const ButtonUI: FC<IButtonUIProps> = ({
  buttonProps,
  text,
  textProps,
  fontWeight = 400,
}) => {
  const styles = useButtonUIStyles();

  return (
    <TouchableOpacity {...buttonProps} style={styles.buttonContainer}>
      <UbuntuTextUI
        fontWeight={fontWeight}
        {...textProps}
        textProps={{ ...textProps, style: styles.buttonText }}
      >
        {text}
      </UbuntuTextUI>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonUI);
