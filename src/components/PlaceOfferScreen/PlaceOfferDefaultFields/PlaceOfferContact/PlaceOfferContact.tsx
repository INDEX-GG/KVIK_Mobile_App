import React from 'react';
import { usePlaceOfferContact } from './usePlaceOfferContact';
import CheckListUI from '../../../../UI/CheckListUI/CheckListUI';

const PlaceOfferContact = () => {
  const { checkListValues } = usePlaceOfferContact();
  return (
    <CheckListUI
      alias={'contact'}
      type={'check_list'}
      default_value={checkListValues}
      required={{ state: true, value: '' }}
      title={'Спопособ связи'}
      dependencies={[]}
      check_list_values={checkListValues}
      filter_view={false}
    />
  );
};

export default React.memo(PlaceOfferContact);
