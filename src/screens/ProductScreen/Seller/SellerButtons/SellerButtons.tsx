import {View} from "react-native";
import PressableElement from "../../../../UI/PressableElement";
import ComplainIcon from "../../../../assets/Complain.svg";
import SubscriptionIcon from "../../../../assets/Subscribe.svg";
import React from "react";
import {useSellerButtonsStyle} from "./style";

const SellerButtons = () => {
    const styles = useSellerButtonsStyle();

    return (
        <View style={styles.container}>
            <PressableElement style={styles.btn} activeStyles={styles.btn} onPress={()=> console.log('clickComplain')}>
                <ComplainIcon />
            </PressableElement>
            <PressableElement style={styles.btn} activeStyles={styles.btn} onPress={() => console.log('clickSubscribe')}>
                <SubscriptionIcon />
            </PressableElement>
        </View>
    )
}

export default React.memo(SellerButtons);
