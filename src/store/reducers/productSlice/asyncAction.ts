import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, RootState,} from "../../store";
import {AxiosInstance} from "axios";
import {ProductType} from "../../../types/producDataTypes";
import {IPlaceOfferCategoryModel} from "../../../models/IPlaceOfferCategoryModel";

export const fetchProductAd = createAsyncThunk<
    ProductType,
    number,
    {
        dispatch: AppDispatch,
        state: RootState,
        extra: AxiosInstance
    }
    >(
    'productAds/data',
    async (productId, {extra: api}) => {
        try {
            const {data} = await api.post('api/getPost', {id: productId});
            return data
        } catch (err) {
            console.error(err);
        }
    }
)

export const fetchProductCategory = createAsyncThunk<
    IPlaceOfferCategoryModel,
    undefined,
    {
        dispatch: AppDispatch,
        state: RootState,
        extra: AxiosInstance
    }
    >(
    'productAds/category',
        async (_, {extra: api}) => {
        try {
            const {data} = await api.get('placeOfferJson/new_catalog.json');
            return data;
        } catch (err) {
            console.error(err)
        }
        }
    )
