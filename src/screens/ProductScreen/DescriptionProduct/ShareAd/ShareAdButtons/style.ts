import {StyleSheet} from "react-native";

const ShareAdButtonsStyle = () => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
        }
    })
}

export const useShareAdButtonsStyle = () => ShareAdButtonsStyle();
