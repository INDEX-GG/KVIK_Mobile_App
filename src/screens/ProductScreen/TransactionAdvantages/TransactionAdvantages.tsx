import {FlatList, View} from "react-native";
import Advantage from "./Advantage/Advantage";
import DeliveryIcon from '../../../assets/Delivery.svg';
import SafeTransactionIcon from '../../../assets/SafeTransaction.svg';
import React from "react";
import {useTransactionAdvantagesStyle} from "./style";

type TransactionAdvantagesProps = {
    advantages: string[]
}

const dictionaryAdvantages = {
    'delivery' : {
        id: 'delivery',
        text: 'Возможна доставка',
        icon: () => {
            return <DeliveryIcon/>
        },
    },
    'safeTransaction' : {
        id: 'safeTransaction',
        text: 'Безопасная сделка',
        icon: () => {
            return <SafeTransactionIcon/>
        }
    },
}

/*const renderAdvantage = ({advantage}: AdvantageProps ) => {
    return <Advantage advantage={advantage} />
}*/


const TransactionAdvantages = ({advantages}: TransactionAdvantagesProps) => {
        if (!advantages) {
            return null;
        }

        const styles = useTransactionAdvantagesStyle();

        return (
        <View style={styles.container}>
            {
                advantages.map((advantage) => (
                    <Advantage text={dictionaryAdvantages[advantage as keyof typeof dictionaryAdvantages].text}>
                        {dictionaryAdvantages[advantage as keyof typeof dictionaryAdvantages].icon()}
                    </Advantage>
                ))
            }
            {/*<FlatList data={advantages} renderItem={renderAdvantage}>

            </FlatList>*/}
        </View>
    )
}

export default React.memo(TransactionAdvantages)
