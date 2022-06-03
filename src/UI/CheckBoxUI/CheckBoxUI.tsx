import React, { FC, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useCheckBoxUIStyles } from './style';
import { Styles } from 'react-native-svg/lib/typescript/xml';

interface ICheckBoxUIProps {
  active: boolean;
  activeStyles?: StyleProp<ViewStyle>;
  defaultStyles?: StyleProp<ViewStyle>;
}

const CheckBoxUI: FC<ICheckBoxUIProps> = ({
  active,
  activeStyles,
  defaultStyles = {},
}) => {
  const styles = useCheckBoxUIStyles();

  const checkboxDefaultStyles = useMemo(
    () =>
      ({ ...styles.checkbox, ...(defaultStyles as ViewStyle) } as ViewStyle),
    [active, styles, defaultStyles]
  );

  const checkboxActiveStyles = useMemo(
    () =>
      (active
        ? activeStyles
          ? activeStyles
          : styles.checkboxActive
        : {}) as ViewStyle,
    [active]
  );

  return (
    <View style={{ ...checkboxDefaultStyles, ...checkboxActiveStyles }}>
      <View />
    </View>
  );
};

export default React.memo(CheckBoxUI);
