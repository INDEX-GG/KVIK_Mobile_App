import React from "react";
import {View} from "react-native";
import {useDescriptionProduct} from "./style";
import DescriptionAddress from "./DescriptionAddress/DescriptionAddress";

type DescriptionProductProps = {
    address: string,

}

const DescriptionProduct = ({address}: DescriptionProductProps) => {
    const styles = useDescriptionProduct();

    return (
        <View style={styles.container}>
            <DescriptionAddress address={address} />
        </View>
    )
}

export default React.memo(DescriptionProduct);
