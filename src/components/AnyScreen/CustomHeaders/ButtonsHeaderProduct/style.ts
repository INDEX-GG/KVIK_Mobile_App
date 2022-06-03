import {StyleSheet} from "react-native";

const ButtonsHeaderProduct = () => {
    return StyleSheet.create({
        container: {
            marginLeft: 'auto',
            flexDirection: "row",
        },
        button: {
            marginRight: 16,
        },
         svg: {
             color: '#FFF'
         }
    })
}

export const useButtonsHeaderProduct = () => ButtonsHeaderProduct();
