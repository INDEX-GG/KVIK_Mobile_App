import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import {useAppSelector} from "../../hooks/useAppSelector";
import HeaderTab from "../../UI/HeaderTab/HeaderTab";
import ButtonsHeaderProduct from "../../components/AnyScreen/CustomHeaders/ButtonsHeaderProduct/ButtonsHeaderProduct";
import { useProductScreenStyles } from './style';
import ImageSwiperProduct from "./ImageSwiperProduct/ImageSwiperProduct";
import InfoProduct from "./InfoProduct/InfoProduct";
import CommunicationButtons from './CommunicationButtons/CommunicationButtons';
import TransactionAdvantages from "./TransactionAdvantages/TransactionAdvantages";
import ButtonBuy from "./ButtonBuy/ButtonBuy";
import DescriptionProduct from './DescriptionProduct/DescriptionProduct';
import {selectProductCategoryState, selectProductState} from "../../store/reducers/productSlice/productSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchProductCategory} from "../../store/reducers/productSlice/asyncAction";

const ProductScreen = () => {
  const styles = useProductScreenStyles();
  const dispatch = useAppDispatch();
  const activeProduct  = useAppSelector(selectProductState);
  const categoryArray = useAppSelector(selectProductCategoryState).category;

  useEffect(() => {
      dispatch(fetchProductCategory());
  },[])


  if (!activeProduct) {
      return (
          <View>
              <Text>Loading...</Text>
          </View>
      )
  }


  const photos = JSON.parse(activeProduct.photo);
  const communication = JSON.parse(activeProduct.communication);

  const alias = activeProduct.category_id.split(',');
  const getMoreCategory = (category, category2, category3) => {
    if (category && categoryArray) {

        // Категории первой вложенности
        const categoryArrOne = categoryArray.find(item => item.alias === category)

        // Категории второй вложенности
        if (category2) {

            const categoryArrTwo = categoryArrOne?.children.find(item => item.alias === category2);

            // Категории третьей вложенности
            if (category3) {
                return categoryArrTwo?.children.find(item => item.alias === category3);

            }

            return categoryArrTwo
        }

        return categoryArrOne
    }

  };

  const category = getMoreCategory(alias[0], alias[1], alias[2]).additional_fields

  const advantage = ['delivery', 'safeTransaction'];

  return (
      <View style={styles.container}>
          <HeaderTab title={''} children={<ButtonsHeaderProduct />}/>
          <ImageSwiperProduct photos={photos.photos} />
          <InfoProduct data={activeProduct}/>
          <CommunicationButtons phone={activeProduct.user_phone} communication={communication} />
          <TransactionAdvantages advantages={advantage}/>
          <ButtonBuy />
          {activeProduct.address && <DescriptionProduct address={activeProduct.address}/>}
      </View>
  );

};

export default React.memo(ProductScreen);
