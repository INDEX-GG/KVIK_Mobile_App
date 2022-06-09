import {View} from "react-native";
import React from "react";
import VkIcon from "../../../../../assets/VK.svg";
import OkIcon from "../../../../../assets/Ok.svg";
import ShareAdButton from "../ShareAdButton/ShareAdButton";
import {useShareAdButtonsStyle} from "./style";



const dictionaryShareButtons = {
    'vk' : {
        id: 'vk',
        icon: () => {
            return <VkIcon />
        },
    },
    'ok' : {
        id: 'ok',
        icon: () => {
            return <OkIcon />
        }
    },
}

const buttons = [
    'vk',
    'ok',
]

const ShareADButtons = () => {
    const styles = useShareAdButtonsStyle();

    return (
        <View style={styles.container}>
            {
                buttons.map((button) => (
                    <ShareAdButton key={dictionaryShareButtons[button as keyof typeof dictionaryShareButtons].id}>
                        {dictionaryShareButtons[button as keyof typeof dictionaryShareButtons].icon()}
                    </ShareAdButton>
                ))
            }
        </View>
    )
}

export default React.memo(ShareADButtons);
