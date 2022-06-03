import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import PressableElement from "../../../../UI/PressableElement";
import MessageIcon from '../../../../assets/Message.svg';
import React from "react";
import {useCommunicationMessageButtonStyle} from "./style";

const CommunicationMessageButton = () => {
    const styles = useCommunicationMessageButtonStyle();

    return (
        <PressableElement onPress={()=> console.log('click')} style={styles.button} activeStyles={styles.button}>
            <MessageIcon style={styles.icon}/>
            <UbuntuTextUI fontWeight={500} textProps={{style: styles.text}}>Написать</UbuntuTextUI>
        </PressableElement>
    )
}

export default React.memo(CommunicationMessageButton)
