import {StyleSheet} from "react-native";

const OptionStyle = () => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            marginBottom: 10,
        },
        titleText: {
            color: '#8f8f8f',
            fontSize: 14,
            lineHeight: 16,
            width: '45%',
            marginRight: '5%',
        },
        valueColor: {
            color: '#fff',
            fontSize: 14,
            lineHeight: 16,
            width: '45%',
        }
    })
}

export const useOptionStyle = () => OptionStyle();
