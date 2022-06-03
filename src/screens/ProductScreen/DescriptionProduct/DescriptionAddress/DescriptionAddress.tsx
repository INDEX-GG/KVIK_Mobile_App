import {View} from "react-native";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import PressableElement from "../../../../UI/PressableElement";
import {useDescriptionAddressStyle} from "./style";
import React from "react";

type DescriptionAddressProps = {
    address?: string,
}

const DescriptionAddress = ({address}: DescriptionAddressProps) => {
    const styles = useDescriptionAddressStyle();

    return (
        <View style={styles.container}>
            {address && <UbuntuTextUI fontWeight={500} textProps={{style: styles.text}}>
                {address.slice(address.indexOf('г. '))}
            </UbuntuTextUI>}
            <PressableElement style={styles.btn} activeStyles={styles.btn} onPress={() => console.log('click a map')} >
                <UbuntuTextUI fontWeight={500} textProps={{style: styles.btnText}}>На карте</UbuntuTextUI>
            </PressableElement>
        </View>
    )
}


export default React.memo(DescriptionAddress);
