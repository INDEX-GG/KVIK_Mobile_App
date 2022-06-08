import {View} from "react-native";
import React, { ReactElement} from "react";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useAdvantageStyle} from "./style";

type AdvantageProps = {
    children: ReactElement,
    text: string,

}

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
