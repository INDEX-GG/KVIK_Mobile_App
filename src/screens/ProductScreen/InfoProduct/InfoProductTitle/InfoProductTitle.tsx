import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import React from "react";
import {useInfoProductTitleStyle} from "./style";

type InfoProductTitleProps = {
    title: string
}

const InfoProductTitle = ({title}: InfoProductTitleProps) => {
    const styles = useInfoProductTitleStyle();

    return (
        <UbuntuTextUI fontWeight={500} textProps={{style: styles.title}}>{title}</UbuntuTextUI>
    )
}

export default React.memo(InfoProductTitle);
