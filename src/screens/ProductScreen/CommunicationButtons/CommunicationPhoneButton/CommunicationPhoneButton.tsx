import React, {useCallback} from "react";
import PressableElement from "../../../../UI/PressableElement";
import {useCommunicationPhoneButtonStyle} from "./style";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import {Alert, Linking } from "react-native";

type CommunicationPhoneButtonProps = {
    phone?: number,
}

const CommunicationPhoneButton = ({ phone } : CommunicationPhoneButtonProps) => {
    const styles = useCommunicationPhoneButtonStyle();

    const OpenURLButton = ({ url }) => {
        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);


        return (
        <PressableElement onPress={()=> console.log('press')} style={styles.button} activeStyles={styles.button}>
            <UbuntuTextUI fontWeight={500} textProps={{style: styles.text}}>Позвонить</UbuntuTextUI>
        </PressableElement>
    )
}

export default React.memo(CommunicationPhoneButton);
