import React, { FC } from 'react';
import { useCardAdAddressStyles } from './style';
import { stringSlice } from '../../../../services/services';
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";

interface ICardAdAddressProps {
  address: string;
}

const CardAdAddress: FC<ICardAdAddressProps> = ({ address }) => {
  const styles = useCardAdAddressStyles();

  return (
    <UbuntuTextUI fontWeight={400} textProps={{style: styles.address}}>
      {stringSlice(address, 48)}
    </UbuntuTextUI>
  );
};

export default React.memo(CardAdAddress);
