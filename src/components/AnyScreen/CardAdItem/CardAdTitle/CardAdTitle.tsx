import React, { FC } from 'react';
import { useCardAdTitleStyles } from './style';
// import { useSize } from '../../../../hooks/useSize';
import { stringSlice } from '../../../../services/services';
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";

interface ICardAdTitleProps {
  title: string;
}

const CardAdTitle: FC<ICardAdTitleProps> = ({ title }) => {
  const styles = useCardAdTitleStyles();
  // const { wordSlice } = useSize();

  return (
    <UbuntuTextUI fontWeight={700} textProps={{style: styles.title}}>
      {stringSlice(title, 26)}
    </UbuntuTextUI>
  );
};

export default React.memo(CardAdTitle);
