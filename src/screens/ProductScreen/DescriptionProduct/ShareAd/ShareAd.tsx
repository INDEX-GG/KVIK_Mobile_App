import {View} from "react-native";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useShareAdStyle} from "./style";
import ShareADButtons from "./ShareAdButtons/ShareADButtons";
import React from "react";

const ShareAd = () => {
    const styles = useShareAdStyle();

    return (
        <View style={styles.container}>
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.text}}>
                Поделиться
            </UbuntuTextUI>
            <ShareADButtons />
        </View>
    )
}

export default React.memo(ShareAd);
