import PressableElement from "../../../UI/PressableElement";
import UbuntuTextUI from "../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useButtonBuyStyle} from "./style";
import React from "react";

const ButtonBuy = () => {
    const styles = useButtonBuyStyle()

    return (
        <PressableElement style={styles.btn} onPress={()=> console.log('click btn by buy')} activeStyles={styles.btn}>
            <UbuntuTextUI fontWeight={700} textProps={{style: styles.text}}>
                Купить
            </UbuntuTextUI>
        </PressableElement>
    )
}

export default React.memo(ButtonBuy);
