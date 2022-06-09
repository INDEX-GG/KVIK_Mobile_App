import React from 'react';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import PlaceOfferCategory from '../PlaceOfferCategory/PlaceOfferCategory';
import { FormProvider } from 'react-hook-form';
import { usePlaceOfferNewAd } from './usePlaceOfferNewAd';

const PlaceOfferNewAd = () => {
  const { methods } = usePlaceOfferNewAd();

  return (
    <ScreenScroll scroll={true}>
      <FormProvider {...methods}>
        <PlaceOfferCategory />
      </FormProvider>
    </ScreenScroll>
  );
};

export default React.memo(PlaceOfferNewAd);
