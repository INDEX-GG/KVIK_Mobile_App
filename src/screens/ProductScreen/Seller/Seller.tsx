import React from "react";
import {View} from "react-native";
import SellerInfo from "./SellerInfo/SellerInfo";

type SellerProductType = {
    id: number,
    photo: string,
    price: number,
    title: string,
}

type SellerData = {
    name: string,
    photo: string | null,
    rating: string | null,
    product: SellerProductType[]
}

type SellerProps = {
    seller: SellerData,
}

const Seller = ({seller}: SellerProps) => {

    return (
        <View>
            <SellerInfo sellerPhoto={seller.photo} sellerRating={seller.rating} sellerName={seller.name} />
        </View>
    )
}

export default React.memo(Seller);
