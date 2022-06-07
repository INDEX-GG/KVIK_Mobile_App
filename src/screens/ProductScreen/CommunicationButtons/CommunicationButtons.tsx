import {View} from "react-native";
import CommunicationPhoneButton from "./CommunicationPhoneButton/CommunicationPhoneButton";
import {useCommunicationButtonsStyle} from "./style";
import React from "react";
import CommunicationMessageButton from "./CommunicationMessageButton/CommunicationMessageButton";

type CommunicationButtonsProps = {
    phone: string,
    communication: {
        phone: boolean,
        message: boolean,
    }
}

const CommunicationButtons = ({phone, communication}: CommunicationButtonsProps) => {
    const styles = useCommunicationButtonsStyle();

    return (
        <View style={styles.container}>
            {communication.phone && <CommunicationPhoneButton phone={phone} />}
            {communication.message && <CommunicationMessageButton /> }
        </View>
    )
}

export default React.memo(CommunicationButtons);
