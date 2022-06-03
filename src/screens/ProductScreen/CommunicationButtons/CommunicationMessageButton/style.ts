import {StyleSheet} from "react-native";

const CommunicationMessageButtonStyle = () => {
    return StyleSheet.create({
        button: {
            backgroundColor: '#00A0AB',
            paddingHorizontal: 32,
            paddingVertical: 14,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-around",
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: '#FFF',
            marginLeft: 8,
        },
        icon: {
            color: '#FFF'
        }
    })
}

export const useCommunicationMessageButtonStyle = () => CommunicationMessageButtonStyle();
