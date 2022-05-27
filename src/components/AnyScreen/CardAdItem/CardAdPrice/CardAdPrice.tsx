import React, { FC } from 'react';
import { useCardAdPriceStyles } from './style';
import { ToRubles } from '../../../../services/services';
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";

interface ICardAdPriceProps {
  price: string;
}

const CardAdPrice: FC<ICardAdPriceProps> = ({ price }) => {
  const styles = useCardAdPriceStyles();

  return (
    <UbuntuTextUI fontWeight={700} textProps={{style: styles.price}}>
      {ToRubles(price)}
    </UbuntuTextUI>
  );
};

export default React.memo(CardAdPrice);
