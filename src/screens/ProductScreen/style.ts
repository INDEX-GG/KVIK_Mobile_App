import {StyleSheet} from "react-native";
import {useCurrentTheme} from "../../hooks/useTheme";

const ProductScreenStyles = () => {
    const { isDark } = useCurrentTheme()

    return StyleSheet.create({
        container: {
            marginHorizontal: 12,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: isDark ? '#151515' : '#fff',
        }
    })
}

export const useProductScreenStyles = () => ProductScreenStyles();
