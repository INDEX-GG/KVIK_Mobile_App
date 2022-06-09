import {StyleSheet} from "react-native";

const ShareAdStyle = () => {
    return StyleSheet.create({
        container: {
            paddingVertical: 14,
            marginHorizontal: 26,
            borderBottomWidth: 2,
            borderBottomColor: '#5A5A5A',
            flexDirection: "row",
            justifyContent: "space-between",
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: '#8f8f8f',
        }
    })
}

export const useShareAdStyle = () => ShareAdStyle();
