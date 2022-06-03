import {useCurrentTheme} from "../../../../hooks/useTheme";
import {StyleSheet} from "react-native";

const InfoProductPriceStyle = () => {
    const { isDark } = useCurrentTheme();

    return StyleSheet.create({
            price: {
                fontSize: 20,
                lineHeight: 23,
                color: isDark ? '#fff' : '#000',
                marginBottom: 4,
            }
        }
    )
}

export const useInfoProductPriceStyle = () => InfoProductPriceStyle();
