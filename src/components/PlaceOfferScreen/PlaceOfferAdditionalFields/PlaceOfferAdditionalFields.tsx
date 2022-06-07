import React from 'react';
import { ScrollView, View } from 'react-native';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import { usePlaceOfferAdditionalFieldsStyles } from './style';
import { usePlaceOfferAdditionalFields } from './usePlaceOfferAdditionalFields';
import AdditionFieldsItem from '../../AnyScreen/AdditionalFields/AdditionFieldsItem/AdditionFieldsItem';
import { FormProvider } from 'react-hook-form';
import PlaceOfferDefaultFields from '../PlaceOfferDefaultFields/PlaceOfferDefaultFields';
import ButtonUI from '../../../UI/ButtonUI/ButtonUI';

const PlaceOfferAdditionalFields = () => {
  const { additionFields, isAdditionFieldsArray, methods, onSubmit } =
    usePlaceOfferAdditionalFields();
  return (
    <ScreenScroll scroll={true} customBackground={'#2C2C2C'}>
      <FormProvider {...methods}>
        <ScrollView style={styles.container}>
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
          <PlaceOfferDefaultFields />
          <View style={styles.buttonContainer}>
            <ButtonUI
              text={'Продолжить'}
              fontWeight={500}
              buttonProps={{ onPress: methods.handleSubmit(onSubmit) }}
            />
          </View>
        </ScrollView>
      </FormProvider>
    </ScreenScroll>
  );
};

const styles = usePlaceOfferAdditionalFieldsStyles();

export default React.memo(PlaceOfferAdditionalFields);
