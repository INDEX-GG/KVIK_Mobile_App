import {View} from "react-native";
import CommunicationPhoneButton from "./CommunicationPhoneButton/CommunicationPhoneButton";
import UbuntuTextUI from "../../../UI/UbuntuTextUI/UbuntuTextUI";
import {useCommunicationButtonsStyle} from "./style";

type CommunicationButtonsProps = {
    phone: number,
}

const CommunicationButtons = ({phone}: CommunicationButtonsProps) => {
    const styles = useCommunicationButtonsStyle();

    return (
        <View>
            <CommunicationPhoneButton phone={phone} />
        </View>
    )
}
