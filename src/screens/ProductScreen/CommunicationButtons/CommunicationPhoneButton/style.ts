import {StyleSheet} from "react-native";

const CommunicationPhoneButtonStyle = () => {
    return StyleSheet.create({
        button: {
            backgroundColor: '#00A0AB',
            paddingHorizontal: 32,
            paddingVertical: 14,
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: '#FFF',
        },
    })
}

export const useCommunicationPhoneButtonStyle = () => CommunicationPhoneButtonStyle();
