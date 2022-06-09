import {StyleSheet} from "react-native";

const SellerRatingStyle = () => {
    return StyleSheet.create({
        container: {
        },
        text: {
            fontSize: 14,
            lineHeight: 16,
            color: '#8f8f8f',
        }
    })
}

export const useSellerRatingStyle = () => SellerRatingStyle();
