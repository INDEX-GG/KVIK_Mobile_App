import { createSlice } from "@reduxjs/toolkit";
import { RootState} from "../../store";
import {fetchProductAd, fetchProductCategory} from "./asyncAction";
import {ProductType} from "../../../types/producDataTypes";

type InitialState = {
    activeProduct: ProductType | null;
    activeCategory: any
}

const initialState: InitialState = {
    activeProduct: null,
    activeCategory: null,
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
            .addCase(fetchProductAd.fulfilled, (state, {payload}) => {
                state.activeProduct = payload
            })
            .addCase(fetchProductCategory.fulfilled, (state, {payload}) => {
                state.activeCategory = payload;
            })

    }
 })

const productState = (state: RootState) => state.productReducer

export const selectProductState = (state: RootState) => productState(state).activeProduct;
export const selectProductCategoryState = (state: RootState) => productState(state).activeCategory;

export default productSlice.reducer;
