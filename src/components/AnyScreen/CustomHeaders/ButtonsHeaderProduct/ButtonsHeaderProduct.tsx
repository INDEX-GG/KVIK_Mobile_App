import React from "react";
import {TouchableOpacity, View} from "react-native";
import LikeIcon from "../../../../assets/LikeIcon.svg";
import Notes from "../../../../assets/notes.svg";
import { useButtonsHeaderProduct } from './style';


const ButtonsHeaderProduct = () => {
    const styles = useButtonsHeaderProduct();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Notes style={styles.svg as {}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <LikeIcon style={styles.svg as {}}/>
            </TouchableOpacity>
        </View>
    );
}

export default React.memo(ButtonsHeaderProduct);
