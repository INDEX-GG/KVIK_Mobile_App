import React, { FC } from 'react';
import { View } from 'react-native';
import { useSelectColorUIStyles } from './style';
import ArrowRight from '../../assets/ArrowRightIcon.svg';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import CollapseUI from '../CollapseUI/CollapseUI';

interface ISelectColorUIProps {}

const SelectColorUI: FC<ISelectColorUIProps> = () => {
  const styles = useSelectColorUIStyles();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <UbuntuTextUI
          fontWeight={400}
          textProps={{ style: styles.containerTitle }}
        >
          Цвет
        </UbuntuTextUI>
        <UbuntuTextUI fontWeight={400} textProps={{ style: styles.colorTitle }}>
          Серый
        </UbuntuTextUI>
      </View>
      <View>
        <ArrowRight style={styles.iconColor as {}} />
      </View>
      {/*<CollapseUI isVisible={true}>*/}
      {/*  <UbuntuTextUI>23</UbuntuTextUI>*/}
      {/*</CollapseUI>*/}
    </View>
  );
};

export default React.memo(SelectColorUI);
