import {View} from "react-native";
import {useSellerRatingStyle} from "./style";
import RatingStarIcon from "../../../../assets/RatingStar.svg";
import React from "react";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";

type SellerRatingProps = {
    rating: string | null,
}

const SellerRating = ({ rating }: SellerRatingProps) => {
    const styles = useSellerRatingStyle();

    return (
        <View>
           {/* <UbuntuTextUI fontWeight={500} >
                {rating}
            </UbuntuTextUI>*/}
            <RatingStarIcon />
        </View>
    )
}

export default React.memo(SellerRating);
