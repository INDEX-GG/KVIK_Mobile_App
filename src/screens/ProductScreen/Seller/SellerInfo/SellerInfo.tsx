import {View} from "react-native";
import SellerProfile from "../SellerProfile/SellerProfile";
import SellerButtons from "../SellerButtons/SellerButtons";
import React from "react";

type SellerInfoProps = {
    sellerPhoto: string | null,
    sellerName: string,
    sellerRating: string | null,
}

const SellerInfo = ({sellerPhoto, sellerName, sellerRating}: SellerInfoProps) => {
    return (
        <View>
            <SellerProfile sellerName={sellerName} sellerRating={sellerRating} sellerPhoto={sellerPhoto}/>
            <SellerButtons />
        </View>
    )
}

export default React.memo(SellerInfo);
