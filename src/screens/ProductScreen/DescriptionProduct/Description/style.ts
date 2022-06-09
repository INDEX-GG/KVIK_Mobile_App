import {StyleSheet} from "react-native";

const DescriptionStyle = () => {
    return StyleSheet.create({
        container: {
            paddingTop: 18,
            paddingBottom: 10,
            marginHorizontal: 26,
            borderBottomWidth: 2,
            borderBottomColor: '#5A5A5A',
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: '#fff',
        },
        btn: {
            alignSelf: 'flex-end'
        },
        btnText: {
            fontSize: 14,
            lineHeight: 16,
            color: '#00A0AB',
        },
    })
}


export const useDescriptionStyle = () => DescriptionStyle();
