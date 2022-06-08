import {Image, View} from "react-native";
import ImageUI from "../../../../../UI/ImageUI/ImageUI";
import AvatarUI from "../../../../../UI/AvatarUI/AvatarUI";
import UbuntuTextUI from "../../../../../UI/UbuntuTextUI/UbuntuTextUI";

type SellerInfoProps = {
    sellerPhoto?: string,
    sellerName: string,
    sellerRating: string,
}

const SellerInfo = ({sellerPhoto, sellerName, sellerRating}: SellerInfoProps) => {
    return (
        <View>
            {sellerPhoto
                ? <ImageUI photo={sellerPhoto} />
                : <AvatarUI title={sellerName} userPhoto={null}/>}
            <View>
                <UbuntuTextUI>
                    {sellerRating}
                </UbuntuTextUI>
                <View>

                </View>
            </View>
        </View>
    )
}
