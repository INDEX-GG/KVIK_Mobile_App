import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
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


const ProductScreen = () => {
  const styles = useProductScreenStyles();
  const activeProduct  = useAppSelector(selectProductState);



  if (!activeProduct) {
      return (
          <View>
              <Text>Loading...</Text>
          </View>
      )
  }

  const advantage = ['delivery', 'safeTransaction'];




    const photos = JSON.parse(activeProduct.photo);
    const communication = JSON.parse(activeProduct.communication);


  return (
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
          <HeaderTab title={''} children={<ButtonsHeaderProduct />}/>
          <ImageSwiperProduct photos={photos.photos} />
          <InfoProduct data={activeProduct}/>
          <CommunicationButtons phone={activeProduct.user_phone} communication={communication} />
          <TransactionAdvantages advantages={advantage}/>
          <ButtonBuy />
          <DescriptionProduct data={activeProduct}/>
      </ScrollView>
  );

};

export default React.memo(ProductScreen);
