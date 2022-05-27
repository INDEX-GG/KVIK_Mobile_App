import React, { FC } from 'react';
import { useCardAdDateStyles } from './style';
import { ToRusDate } from '../../../../services/services';
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";

interface ICardAdDateProps {
  date: string;
}

const CardAdDate: FC<ICardAdDateProps> = ({ date }) => {
  const styles = useCardAdDateStyles();

  return (
    <UbuntuTextUI fontWeight={400} textProps={{style: styles.date}}>
      {ToRusDate(date)}
    </UbuntuTextUI>
  );
};

export default React.memo(CardAdDate);
