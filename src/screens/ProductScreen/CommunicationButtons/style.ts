import {StyleSheet} from "react-native";

const CommunicationButtonsStyle = () => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 5
        }
    })
}

export const useCommunicationButtonsStyle = () => CommunicationButtonsStyle();
