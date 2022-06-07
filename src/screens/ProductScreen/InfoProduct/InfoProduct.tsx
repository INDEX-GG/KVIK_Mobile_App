import React from "react";
import {Text, View} from "react-native";
import {ToRusDate} from "../../../services/services";
import UbuntuTextUI from "../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useInfoProductStyle} from "./styles";
import InfoProductPrice from "./InfoProductPrice/InfoProductPrice";
import InfoProductTitle from "./InfoProductTitle/InfoProductTitle";
import InfoProductReviewed from "./InfoProductReviewed/InfoProductReviewed";
import {ProductType} from "../../../types/producDataTypes";

type InfoProductProps = {
    data: ProductType
}

const InfoProduct = ({data}: InfoProductProps) => {
    const { price, title, created_at, all_time_viewing_count} = data;
    const styles = useInfoProductStyle();

    return (
        <View style={styles.container}>
            <InfoProductPrice price={price} />
            <InfoProductTitle title={title} />
            <View>
                <UbuntuTextUI fontWeight={400} textProps={{style: styles.otherText}}>Торг уместен / Возможен обмен</UbuntuTextUI>
                <UbuntuTextUI fontWeight={400} textProps={{style: styles.otherText}}>Размещено {ToRusDate(created_at)}</UbuntuTextUI>
            </View>
            <InfoProductReviewed reviewed={all_time_viewing_count}/>
        </View>
    );
}

export default React.memo(InfoProduct);
