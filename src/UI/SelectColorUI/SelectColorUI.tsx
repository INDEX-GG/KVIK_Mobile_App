import React, { FC, useCallback } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { useSelectColorUIStyles } from './style';
import ArrowRight from '../../assets/ArrowRightIcon.svg';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import CollapseUI from '../CollapseUI/CollapseUI';
import { useSelectColorUI } from './useSelectColorUI';
import { IColorUIProps } from '../../models/IAdditionalFieldsModel';
import SelectColorItem from './SelectColorItem/SelectColorItem';
import { Controller } from 'react-hook-form';

const SelectColorUI: FC<IColorUIProps> = (props) => {
  const styles = useSelectColorUIStyles();
  const { text_list_values, alias } = props;
  const {
    control,
    setValue,
    isVisible,
    arrowStyle,
    keyExtractor,
    isTextListValues,
    handleToggleVisible,
  } = useSelectColorUI(text_list_values);

  const renderItem = useCallback(
    ({ item }) => (
      <SelectColorItem
        key={`${item.name}${item.value}${item.id}`}
        itemColor={item}
        onPress={setValue}
      />
    ),
    []
  );

  return (
    <Controller
      name={alias}
      control={control}
      render={({ field: { value } }) => (
        <>
          <TouchableOpacity
            style={styles.container}
            onPress={handleToggleVisible}
          >
            <View style={styles.textContainer}>
              <UbuntuTextUI
                fontWeight={400}
                textProps={{ style: styles.containerTitle }}
              >
                Цвет
              </UbuntuTextUI>
              {isTextListValues && typeof value !== 'undefined' && (
                <UbuntuTextUI
                  fontWeight={400}
                  textProps={{ style: styles.colorTitle }}
                >
                  {text_list_values[value].name}
                </UbuntuTextUI>
              )}
            </View>
            <View style={{...styles.arrowDefault, ...arrowStyle}}>
              <ArrowRight style={styles.iconColor as {}} />
            </View>
          </TouchableOpacity>
          <CollapseUI isVisible={isVisible}>
            <View style={styles.colorContainer}>
              {isTextListValues && (
                <FlatList
                  contentContainerStyle={styles.list}
                  data={text_list_values}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                />
              )}
            </View>
          </CollapseUI>
        </>
      )}
    />
  );
};

export default React.memo(SelectColorUI);
