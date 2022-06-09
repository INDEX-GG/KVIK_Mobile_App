import React, { useMemo } from 'react';
import TextUI from '../../../../UI/TextUI/TextUI';
import { usePlaceOfferDefaultFieldsStyles } from '../style';

const PlaceOfferDescription = () => {
  const styles = usePlaceOfferDefaultFieldsStyles();
  const containerStyles = useMemo(
    () => ({
      ...styles.defaultFieldsTextInput,
      minHeight: 144,
      textAlignVertical: 'top',
    }),
    [styles]
  );

  return (
    <TextUI
      type="text"
      alias="description"
      title="Описание"
      text_excludes_symbols={[]}
      text_includes_symbols={[]}
      text_max_len={10000}
      text_min_len={0}
      view_product={false}
      default_value={''}
      dependencies={undefined}
      required={{ state: true, value: '' }}
      customStyle={{
        error: styles.error,
        containerError: styles.containerError,
        container: containerStyles,
        label: styles.label,
        inputColor: { color: styles.placeHolderColor.color },
        inputContainer: styles.textFieldContainer,
      }}
      textNativeProps={{
        numberOfLines: 1,
        multiline: true,
      }}
    />
  );
};

export default React.memo(PlaceOfferDescription);
