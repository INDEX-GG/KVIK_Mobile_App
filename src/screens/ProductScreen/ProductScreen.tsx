import React from 'react';
import { View, Text } from 'react-native';
import {useAppSelector} from "../../hooks/useAppSelector";
import HeaderTab from "../../UI/HeaderTab/HeaderTab";
import ButtonsHeaderProduct from "../../components/AnyScreen/CustomHeaders/ButtonsHeaderProduct/ButtonsHeaderProduct";
import { useProductScreenStyles } from './style';
import ImageSwiperProduct from "./ImageSwiperProduct/ImageSwiperProduct";
import InfoProduct from "./InfoProduct/InfoProduct";
import CommunicationPhoneButton from "./CommunicationButtons/CommunicationPhoneButton/CommunicationPhoneButton";

const ProductScreen = () => {
  const styles = useProductScreenStyles();
  const { activeProduct } = useAppSelector((state => state.productReducer));

  if (!activeProduct) {
      return (
          <View>
              <Text>Loading...</Text>
          </View>
      )
  }



  return (
      <View style={styles.container}>
          <HeaderTab title={''} children={<ButtonsHeaderProduct />}/>
          <ImageSwiperProduct photos={activeProduct.post_photo_v2} />
          <InfoProduct data={activeProduct}/>
          <CommunicationPhoneButton />
      </View>
  );

};

export default React.memo(ProductScreen);
