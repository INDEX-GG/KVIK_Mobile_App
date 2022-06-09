import { useMemo } from 'react';
import { useUserStore } from '../../../../hooks/useReducerHook/useUserStore';

export const usePlaceOfferContact = () => {
  const { userInfo } = useUserStore();

  const checkListValues = useMemo(() => {
    const array = ['Сообщения на сайте'];
    if (userInfo) {
      array.push(userInfo.phone);
    }
    return array;
  }, [userInfo]);

  return {
    checkListValues,
  };
};
