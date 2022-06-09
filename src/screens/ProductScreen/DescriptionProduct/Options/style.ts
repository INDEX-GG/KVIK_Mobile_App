import {StyleSheet} from "react-native";

const OptionsStyle = () => {
    return StyleSheet.create({
        container: {
            paddingTop: 25,
            paddingBottom: 20,
            marginHorizontal: 26,
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderBottomColor: '#5A5A5A',
        },
        containerActive: {
            paddingTop: 25,
            paddingBottom: 20,
            marginHorizontal: 26,
            justifyContent: "space-between",
            flexDirection: "column",
            borderBottomWidth: 2,
            borderBottomColor: '#5A5A5A',
        },
        btn: {
        },
        btnActive: {
            alignSelf: 'flex-end'
        },
        btnText: {
            fontSize: 14,
            lineHeight: 16,
            color: '#00A0AB',
        },
        flatList: {
            width: '66%',
        }
    })
}

export const useOptionsStyle = () => OptionsStyle();
