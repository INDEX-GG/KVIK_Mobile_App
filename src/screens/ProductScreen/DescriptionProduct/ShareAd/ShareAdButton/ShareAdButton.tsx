import React from "react";
import { ReactElement} from "react";
import PressableElement from "../../../../../UI/PressableElement";
import {useShareAdButtonStyle} from "./style";

type ShareAdButtonProps = {
    children: ReactElement
}


const ShareAdButton = ({children}: ShareAdButtonProps) => {
    const styles = useShareAdButtonStyle();

    return (
        <PressableElement onPress={()=> console.log('click')} style={styles.btn} activeStyles={styles.btn}>
            {children}
        </PressableElement>
    )
}

export default React.memo(ShareAdButton);
