import React from 'react';
import { ScrollView } from 'react-native';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import { usePlaceOfferAdditionalFieldsStyles } from './style';
import { usePlaceOfferAdditionalFields } from './usePlaceOfferAdditionalFields';
import AdditionFieldsItem from '../../AnyScreen/AdditionalFields/AdditionFieldsItem/AdditionFieldsItem';
import { FormProvider } from 'react-hook-form';
import PlaceOfferDefaultFields from "../PlaceOfferDefaultFields/PlaceOfferDefaultFields";

const PlaceOfferAdditionalFields = () => {
  const { additionFields, isAdditionFieldsArray, methods } =
    usePlaceOfferAdditionalFields();
  return (
    <ScreenScroll scroll={true} customBackground={'#2C2C2C'}>
      <FormProvider {...methods}>
        <ScrollView style={styles.container}>
          <PlaceOfferDefaultFields/>
          {isAdditionFieldsArray ? (
            <>
              {additionFields.map((additionalItem) => (
                <AdditionFieldsItem
                  key={additionalItem.alias}
                  {...additionalItem}
                />
              ))}
            </>
          ) : null}
        </ScrollView>
      </FormProvider>
    </ScreenScroll>
  );
};

const styles = usePlaceOfferAdditionalFieldsStyles();

export default React.memo(PlaceOfferAdditionalFields);
