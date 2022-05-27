import React from 'react';
import { usePlaceOfferDefaultFieldsStyles} from "../style";
import TextUI from "../../../../UI/TextUI/TextUI";

const PlaceOfferTitle = () => {
  const styles = usePlaceOfferDefaultFieldsStyles();

  return (
    <TextUI
      type='text'
      alias='title'
      title='Название'
      text_excludes_symbols={[]}
      text_includes_symbols={[]}
      text_max_len={100}
      text_min_len={0}
      view_product={false}
      default_value={''}
      dependencies={undefined}
      required={{state: true, value: 'Заполните название объявления'}}
      customStyle={{
        container: styles.defaultFieldsTextInput,
        label: styles.label,
        inputColor: {color: styles.placeHolderColor.color},
        inputContainer: styles.inputContainer,
      }}
    />
  );
};

export default React.memo(PlaceOfferTitle);
