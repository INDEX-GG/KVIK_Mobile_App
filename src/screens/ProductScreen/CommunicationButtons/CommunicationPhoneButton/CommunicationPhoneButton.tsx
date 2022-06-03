import React, {useCallback} from "react";
import PressableElement from "../../../../UI/PressableElement";
import {useCommunicationPhoneButtonStyle} from "./style";
import {Alert, Linking } from "react-native";
import PhoneIcon from '../../../../assets/Phone.svg';
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";

type CommunicationPhoneButtonProps = {
    phone: string,
}

const CommunicationPhoneButton = ({ phone } : CommunicationPhoneButtonProps) => {
    const styles = useCommunicationPhoneButtonStyle();

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(phone);

        if (supported) {
            await Linking.openURL(`tel:${phone}`);
        } else {
            Alert.alert(`Don't know how to open this URL: ${phone}`);
        }
    }, [phone]);

        return (
        <PressableElement onPress={handlePress} style={styles.button} activeStyles={styles.button}>
            <PhoneIcon />
            <UbuntuTextUI fontWeight={500} textProps={{style: styles.text}}>Позвонить</UbuntuTextUI>
        </PressableElement>
    )
}

export default React.memo(CommunicationPhoneButton);
