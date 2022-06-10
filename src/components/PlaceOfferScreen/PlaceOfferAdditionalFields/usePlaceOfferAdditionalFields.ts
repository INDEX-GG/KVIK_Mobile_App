import { usePlaceOfferStore } from '../../../hooks/useReducerHook/usePlaceOfferStore';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useUserStore } from '../../../hooks/useReducerHook/useUserStore';
import {
  sendNewAds,
  sendNewAdsPhoto,
} from '../../../store/reducers/placeOfferSlice/asyncThunk/placeOferApi';
import { cameraSlice } from '../../../store/reducers/cameraSlice/cameraSlice';
import { placeOfferSlice } from '../../../store/reducers/placeOfferSlice/placeOfferSlice';

export const usePlaceOfferAdditionalFields = () => {
  const { additionFields, aliasFull } = usePlaceOfferStore();
  const methods = useForm();
  const dispatch = useAppDispatch();
  const { userInfo, userId } = useUserStore();

  const isAdditionFieldsArray = useMemo(() => {
    return Array.isArray(additionFields) && additionFields.length;
  }, [additionFields]);

  const generateAdditionalFields = (data: any) => {
    const onlyTrueAddFieldsArr = [];
    if (typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        if (
          key === 'alisa' ||
          key === 'contact' ||
          key === 'photos' ||
          key === 'trade' ||
          key === 'title' ||
          key === 'price' ||
          key === 'description'
        ) {
          continue;
        }
        onlyTrueAddFieldsArr.push({ alias: key, value });
      }
    }
    return onlyTrueAddFieldsArr;
  };

  const onSubmit = (data: any) => {
    const { description, price, title, trade } = data;
    const bymessages = !!data.contact.find(
      (item: string) => item === 'Сообщения на сайте'
    );
    const byphone = !!data.contact.find(
      (item: string) => item === userInfo?.phone
    );
    if (aliasFull && userInfo) {
      const sendObj = {
        additional_fields: generateAdditionalFields(data),
        alias: aliasFull,
        bymessages,
        byphone,
        city: 'RU$RU-VOR$Россошанский$Россошь',
        contact: userInfo.phone,
        coordinates: '["50.201087","39.605634"]',
        description: description.trim(),
        location: 'Воронежская обл, г Россошь, пр-кт Победы, д 2',
        price,
        subcategory: aliasFull.split(',').reverse()[0],
        title,
        trade,
        user_id: userId,
      };
      dispatch(sendNewAds(sendObj)).then((r) => {
        const response = r.payload as { id: number };
        if (response.id) {
          dispatch(sendNewAdsPhoto({ userId, postId: response.id })).then(
            (res) => {
              console.log(res);
            }
          );
        }
      });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(cameraSlice.actions.reset());
      dispatch(placeOfferSlice.actions.reset());
    };
  }, []);

  return {
    methods,
    onSubmit,
    additionFields,
    isAdditionFieldsArray,
  };
};
