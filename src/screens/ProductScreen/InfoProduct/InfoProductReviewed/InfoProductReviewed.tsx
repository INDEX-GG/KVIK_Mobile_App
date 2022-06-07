import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import EyeIcon from '../../../../assets/glaz.svg'
import {View} from "react-native";
import React from "react";
import {useInfoProductReviewedStyle} from "./style";

type InfoProductReviewedProps = {
    reviewed: number | null,
    viewed?: boolean,
}

const InfoProductReviewed = ({reviewed, viewed = false}: InfoProductReviewedProps) => {
    const styles = useInfoProductReviewedStyle();

    return (
        <View style={styles.container}>
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.text}}>{reviewed ? reviewed : '0'}</UbuntuTextUI>
            {!viewed  && <EyeIcon style={styles.icon} />}
        </View>
    )
}

export default React.memo(InfoProductReviewed);
