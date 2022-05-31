import {StyleSheet} from "react-native";
import {useCurrentTheme} from "../../../../hooks/useTheme";

const InfoProductTitleStyle = () => {
    const { isDark } = useCurrentTheme();

    return StyleSheet.create({
        title: {
            fontSize: 18,
            lineHeight: 20,
            color: isDark ? '#fff' : '#000',
            marginBottom: 18,
        }
    })
}

export const useInfoProductTitleStyle = () => InfoProductTitleStyle();
