import {StyleSheet} from "react-native";

const AdvantageStyle = () => {
    return StyleSheet.create({
        container: {
          flexDirection: "row",
        },
        text: {
            color: '#c4c4c4',
            fontSize: 12,
            lineHeight: 14,
            marginLeft: 4,
        }
    })
}

export const useAdvantageStyle = () => AdvantageStyle();
