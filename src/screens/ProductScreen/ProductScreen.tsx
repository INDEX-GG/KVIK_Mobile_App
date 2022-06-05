import React from 'react';
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
import {selectProductState} from "../../store/reducers/productSlice/productSlice";

const ProductScreen = () => {
  const styles = useProductScreenStyles();
  const { activeProduct } = useAppSelector(selectProductState);

  if (!activeProduct) {
      return (
          <View>
              <Text>Loading...</Text>
          </View>
      )
  }

  console.log(activeProduct)
  const advantage = ['delivery', 'safeTransaction'];

  return (
      <View style={styles.container}>
          <HeaderTab title={''} children={<ButtonsHeaderProduct />}/>
          <ImageSwiperProduct photos={activeProduct.post_photo_v2} />
          <InfoProduct data={activeProduct}/>
          {activeProduct.manager_phone && <CommunicationButtons phone={activeProduct.manager_phone}/>}
          <TransactionAdvantages advantages={advantage}/>
          <ButtonBuy />
          <DescriptionProduct address={activeProduct.address}/>
      </View>
  );

};

export default React.memo(ProductScreen);
