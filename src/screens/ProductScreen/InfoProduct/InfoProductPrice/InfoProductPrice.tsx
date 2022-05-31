import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import React from "react";
import {StyleSheet} from "react-native";
import {useCurrentTheme} from "../../../../hooks/useTheme";
import {useInfoProductPriceStyle} from "./style";

type InfoProductPriceProps = {
    price: string,
}

const InfoProductPrice = ({price}: InfoProductPriceProps) => {
    const styles = useInfoProductPriceStyle();
    return (
        <UbuntuTextUI fontWeight={700} textProps={{style: styles.price}}>
            {price} ₽
        </UbuntuTextUI>
    )
}

export default React.memo(InfoProductPrice);

