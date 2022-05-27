import React from 'react';
import {View, StyleSheet} from 'react-native';
import {usePlaceOfferDefaultFieldsStyles} from "../style";
import TextNumberUI from "../../../../UI/TextNumberUI/TextNumberUI";
import CheckBoxBooleanUI from "../../../../UI/CheckBoxBooleanUI/CheckBoxBooleanUI";

const PlaceOfferPrice = () => {
  const textNumberStyles = usePlaceOfferDefaultFieldsStyles();

  return (
    <View style={styles.container}>
      <TextNumberUI
        type='text'
        alias='price'
        title='Цена'
        filter_render_type={0}
        filter_title=''
        filter_type='number'
        number_max_value={10000000000}
        number_min_value={0}
        number_rendering_type={1}
        number_step={{}}
        placeholder='Цена'
        number_unit_of_measure='₽'
        number_version='int'
        default_value={''}
        dependencies={undefined}
        required={{state: true, value: 'Заполните название объявления'}}
        customStyle={{
          container: textNumberStyles.defaultFieldsTextInput,
          label: textNumberStyles.label,
          inputColor: {color: textNumberStyles.placeHolderColor.color},
          inputContainer: {...textNumberStyles.inputContainer, paddingRight: 80},
        }}
      />
      <View style={styles.checkboxContainer}>
        <CheckBoxBooleanUI
          title='Торг'
          alias='trade'
          isVisibleBorderBottom={false}
        />
      </View>
    </View>
  );
};

export default React.memo(PlaceOfferPrice);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  checkboxContainer: {
    position: 'absolute',
    right: 13,
    top: 23,
  }
});
