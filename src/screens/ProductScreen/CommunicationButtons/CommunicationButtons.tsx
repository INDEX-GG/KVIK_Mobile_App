import {View} from "react-native";
import CommunicationPhoneButton from "./CommunicationPhoneButton/CommunicationPhoneButton";
import {useCommunicationButtonsStyle} from "./style";
import React from "react";
import CommunicationMessageButton from "./CommunicationMessageButton/CommunicationMessageButton";

type CommunicationButtonsProps = {
    phone?: string,
}

const CommunicationButtons = ({phone}: CommunicationButtonsProps) => {
    const styles = useCommunicationButtonsStyle();

    return (
        <View style={styles.container}>
            {phone && <CommunicationPhoneButton phone={phone} />}
            <CommunicationMessageButton />
        </View>
    )
}

export default React.memo(CommunicationButtons);
