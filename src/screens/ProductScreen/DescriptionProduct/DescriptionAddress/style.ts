import {StyleSheet} from "react-native";
import {useCurrentTheme} from "../../../../hooks/useTheme";

const DescriptionAddressStyle = () => {
    const { isDark } = useCurrentTheme();

    return StyleSheet.create({
        container: {
            marginRight: 15,
            marginLeft: 27,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 24,
            borderTopWidth: 2,
            borderTopColor: '#5A5A5A',
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: isDark ? '#FFF' : '#000',
        },
        btn: {
            marginLeft: 'auto',
        },
        btnText: {
            fontSize: 14,
            lineHeight: 16,
            color: '#00A0AB',
        },
    })
}

export const useDescriptionAddressStyle = () => DescriptionAddressStyle();
