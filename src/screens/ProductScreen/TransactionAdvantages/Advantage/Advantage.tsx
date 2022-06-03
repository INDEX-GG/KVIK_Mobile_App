import {View} from "react-native";
import React, {ReactChildren, ReactElement} from "react";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useAdvantageStyle} from "./style";
import DeliveryIcon from "../../../../assets/Delivery.svg";
import SafeTransactionIcon from "../../../../assets/SafeTransaction.svg";

type AdvantageProps = {
    children: ReactElement,
    text: string,

}

const dictionaryAdvantages = {
    'delivery' : {
        text: 'Возможна доставка',
        icon: () => {
            return <DeliveryIcon/>
        },
    },
    'safeTransaction' : {
        text: 'Безопасная сделка',
        icon: () => {
            return <SafeTransactionIcon/>
        }
    },
};

const Advantage = ({children, text}: AdvantageProps) => {
    const styles = useAdvantageStyle();
    return (
        <View style={styles.container}>
            {children}
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.text}}>{text}</UbuntuTextUI>
        </View>
    )
}

export default React.memo(Advantage)
