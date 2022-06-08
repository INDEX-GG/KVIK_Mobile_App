import React, {useState} from "react"
import { View } from "react-native"
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useDescriptionStyle} from "./style";
import PressableElement from "../../../../UI/PressableElement";

type DescriptionProps = {
    description: string,
}

const MAX_TEXT_LENGTH = 140;

const Description = ({description}: DescriptionProps) => {
    const styles = useDescriptionStyle();
    const [active, setActive] = useState(false);
    console.log(description);

    return (
        <View style={styles.container}>
            <UbuntuTextUI fontWeight={400} textProps={{style:styles.text}}>
                {description.length > MAX_TEXT_LENGTH && !active
                    ? `${description.slice(0, MAX_TEXT_LENGTH)}...` :
                    description
                 }
            </UbuntuTextUI>
            <PressableElement style={styles.btn} activeStyles={styles.btn} onPress={() => setActive(!active)} >
                <UbuntuTextUI fontWeight={500} textProps={{style: styles.btnText}}>{active ? 'Свернуть параметры': 'Все параметры'}</UbuntuTextUI>
            </PressableElement>
        </View>
    )
}

export default React.memo(Description);
