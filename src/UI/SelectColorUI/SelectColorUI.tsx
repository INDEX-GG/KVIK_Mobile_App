import React, { FC } from 'react';
import { View } from 'react-native';
import { useSelectColorUIStyles } from './style';
import ArrowRight from '../../assets/ArrowRightIcon.svg';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';

interface ISelectColorUIProps {}

const SelectColorUI: FC<ISelectColorUIProps> = () => {
  const styles = useSelectColorUIStyles();

  return (
    <View style={styles.container}>
      <View>
        <UbuntuTextUI>Цвет</UbuntuTextUI>
        <UbuntuTextUI>Серый</UbuntuTextUI>
      </View>
      <View>
        <ArrowRight />
      </View>
    </View>
  );
};

export default React.memo(SelectColorUI);
