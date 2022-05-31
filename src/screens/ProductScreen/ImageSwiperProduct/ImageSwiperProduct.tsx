import React from "react";
import {View} from "react-native";
import CustomSwiper from "../../../components/AnyScreen/CustomSwiper/CustomSwiper";
import {useImageSwiperProductStyle} from "./styles";

type ImageSwiperProductProps = {
    photos: string[],
}

const ImageSwiperProduct = ({photos}: ImageSwiperProductProps) => {
    const styles = useImageSwiperProductStyle();

    return (
        <View style={styles.container}>
            <CustomSwiper photos={photos} isCardPagination={true} />
        </View>
    );
}

export default React.memo(ImageSwiperProduct);
