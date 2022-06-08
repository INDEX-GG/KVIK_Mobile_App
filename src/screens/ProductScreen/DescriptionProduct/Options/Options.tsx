import React, { useState } from "react";
import {FlatList, View} from "react-native";
import Option from "./Option/Option";
import {useOptionsStyle} from "./style";
import UbuntuTextUI from "../../../../UI/UbuntuTextUI/UbuntuTextUI";
import PressableElement from "../../../../UI/PressableElement";

type OptionsProps = {
    options: any
}


const renderItem = ({item}: any) => {
    return <Option title={item.title} value={item.value} />
}

const Options = ({options}: OptionsProps) => {
    const styles = useOptionsStyle();

    const [active, setActive] = useState(false);

    const data = Object.values(options);

    return (
        <View style={active ? styles.containerActive : styles.container}>
            <FlatList data={active ? data : data.slice(0, 3)} renderItem={renderItem} keyExtractor={(item: any) => `${item.title}${item.value}`} style={styles.flatList} />
            <PressableElement style={active ? styles.btnActive : styles.btn} activeStyles={styles.btn} onPress={() => setActive(!active)} >
                <UbuntuTextUI fontWeight={500} textProps={{style: styles.btnText}}>{active ? 'Свернуть параметры': 'Все параметры'}</UbuntuTextUI>
            </PressableElement>
        </View>
    );
}

export default React.memo(Options);
