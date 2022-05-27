import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CategorySwiperPress, SearchScreenCategory } from './types';
import RobotoText from '../../../UI/RobotoText';
import { CategorySwiperStyles } from './styles';
import UbuntuTextUI from "../../../UI/UbuntuTextUI/UbuntuTextUI";

interface CategorySwiperItemProps {
  item: SearchScreenCategory;
  index: number;
  dataLength: number;
  handlePressIcon: CategorySwiperPress;
}

const CategorySwiperItem: FC<CategorySwiperItemProps> = ({
  item,
  index,
  dataLength,
  handlePressIcon,
}) => {
  const styles = CategorySwiperStyles();
  const { icon, title } = item;
  const CurrentIcon = icon;
  const isLast = index === dataLength - 1;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePressIcon(item)}
      style={{
        ...styles.item,
        marginRight: isLast ? styles.itemLast.marginRight : 12,
      }}
    >
      <UbuntuTextUI fontWeight={700} textProps={{style: styles.title}}>
        {title}
      </UbuntuTextUI>
      <View>
        <CurrentIcon style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default CategorySwiperItem;
