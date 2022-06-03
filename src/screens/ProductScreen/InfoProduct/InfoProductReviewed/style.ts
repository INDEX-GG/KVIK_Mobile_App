import {StyleSheet} from "react-native";

const InfoProductReviewedStyle = () => {
    return StyleSheet.create({
        container: {
            position: "absolute",
            bottom: 15,
            right: 15,
            flexDirection: "row",
            alignItems: "center",
        },
        text: {
            color: '#B1B1B1',
            fontSize: 14,
            lineHeight: 16,
        },
        icon: {
            color: '#B1B1B1',
            marginLeft: 5,
        }
    });
}

export const useInfoProductReviewedStyle = () => InfoProductReviewedStyle();
