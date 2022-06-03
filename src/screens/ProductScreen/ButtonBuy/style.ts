import {StyleSheet} from "react-native";

const ButtonBuyStyle = () => {
    return StyleSheet.create({
        btn: {
            alignItems: "center",
            marginVertical: 14,
        },
        text: {
            fontSize: 20,
            lineHeight: 22,
            color: '#00A0AB',
        }
    })
}

export const useButtonBuyStyle = () => ButtonBuyStyle();
