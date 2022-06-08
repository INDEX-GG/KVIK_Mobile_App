import React from "react";
import {View} from "react-native";
import {useDescriptionProduct} from "./style";
import DescriptionAddress from "./DescriptionAddress/DescriptionAddress";
import Options from "./Options/Options";
import {ProductType} from "../../../types/producDataTypes";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectProductCategoryState} from "../../../store/reducers/productSlice/productSlice";
import Description from "./Description/Description";
import ShareAd from "./ShareAd/ShareAd";

type DescriptionProductProps = {
    data: ProductType
}

const DescriptionProduct = ({data}: DescriptionProductProps) => {
    const categoryArray = useAppSelector(selectProductCategoryState).category;
    const styles = useDescriptionProduct();

    const alias = data.category_id.split(',');
    const getMoreCategory = (category: any, category2: any, category3: any) => {
        if (category && categoryArray) {

            // Категории первой вложенности
            const categoryArrOne = categoryArray.find((item: any) => item.alias === category)

            // Категории второй вложенности
            if (category2) {

                const categoryArrTwo = categoryArrOne?.children.find((item: any) => item.alias === category2);

                // Категории третьей вложенности
                if (category3) {
                    return categoryArrTwo?.children.find((item: any) => item.alias === category3);

                }

                return categoryArrTwo
            }

            return categoryArrOne
        }

    };
    const category = getMoreCategory(alias[0], alias[1], alias[2]).additional_fields
    const getOptions = (productCategory: any) => {
        let options = {};
        let finalOptions = {};
        for (let key in productCategory) {
            if(productCategory[key] && key !== 'id' && key !== 'post_id')  {
                options = {...options, ...{[key]: productCategory[key]}}
            }
        }

        const keys = Object.keys(options);


        for (let key of keys) {
            const translateAlias = category.find((elem: any)=> elem.alias === key )
            finalOptions = {
                ...finalOptions,
                ...{[key]: {
                        title: translateAlias?.title,
                        value: options[key as keyof typeof options],
                    }
                }
            }
        }

        return finalOptions;
    };
    const options = getOptions(data.additional_fields);

    return (
        <View style={styles.container}>
            {data.address && <DescriptionAddress address={data.address} />}
            <Options options={options} />
            <Description description={data.description} />
            <ShareAd />
        </View>
    )
}

export default React.memo(DescriptionProduct);
