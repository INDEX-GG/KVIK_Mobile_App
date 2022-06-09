import {Text, View} from "react-native";
import React from "react";
import {useOptionStyle} from "./style";
import UbuntuTextUI from "../../../../../UI/UbuntuTextUI/UbuntuTextUI";

type renderItemProps = {
    title: string,
    value: string,
}


const Option = ({title, value}: renderItemProps) => {
    const styles = useOptionStyle();

    return (
        <View style={styles.container}>
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.titleText}}>{title}</UbuntuTextUI>
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.valueColor}}>{value}</UbuntuTextUI>
        </View>
    );
}

export default React.memo(Option);
