import {View} from "react-native";
import ImageUI from "../../../../UI/ImageUI/ImageUI";
import AvatarUI from "../../../../UI/AvatarUI/AvatarUI";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import SellerRating from "../SellerRating/SellerRating";
import React from "react";

type SellerProfileProps = {
    sellerPhoto: string | null,
    sellerName: string,
    sellerRating: string | null,
}

const SellerProfile = ({sellerPhoto, sellerName, sellerRating}: SellerProfileProps) => {
    return (
        <View>
            {sellerPhoto
                ? <ImageUI photo={sellerPhoto} />
                : <AvatarUI title={sellerName} userPhoto={null}/>}
            <View>
                <UbuntuTextUI>
                    {sellerRating}
                </UbuntuTextUI>
                <SellerRating rating={sellerRating} />
            </View>
        </View>
    )
}

export default React.memo(SellerProfile);
