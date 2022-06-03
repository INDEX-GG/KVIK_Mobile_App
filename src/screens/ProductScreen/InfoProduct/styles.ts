import {StyleSheet} from "react-native";
import {useCurrentTheme} from "../../../hooks/useTheme";

const InfoProductStyle = () => {
    const { isDark } = useCurrentTheme();

    return StyleSheet.create({
        container: {
            padding: 15,
        },
        otherText: {
            fontSize: 12,
            lineHeight: 14,
            color: '#B1B1B1',
            marginBottom: 4,
        }
    })
}

export const useInfoProductStyle = () => InfoProductStyle();
