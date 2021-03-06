import {StyleSheet} from "react-native";
import {useCurrentTheme} from "../../../../hooks/useTheme";

const DescriptionAddressStyle = () => {
    const { isDark } = useCurrentTheme();

    return StyleSheet.create({
        container: {
            marginHorizontal: 26,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 22,
            borderBottomWidth: 2,
            borderBottomColor: '#5A5A5A',
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: isDark ? '#FFF' : '#000',
            width: '80%',
        },
        btn: {
            width: '20%'
        },
        btnText: {
            fontSize: 14,
            lineHeight: 16,
            color: '#00A0AB',
        },
    })
}

export const useDescriptionAddressStyle = () => DescriptionAddressStyle();
