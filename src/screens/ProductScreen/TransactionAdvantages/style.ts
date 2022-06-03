import {StyleSheet} from "react-native";

const TransactionAdvantagesStyle = () => {
    return StyleSheet.create({
        container: {
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
        }
    })
}

export const useTransactionAdvantagesStyle = () => TransactionAdvantagesStyle();
