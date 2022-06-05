import {IAdCardModel} from "../../../models/IAdCardModel";
import { createSlice } from "@reduxjs/toolkit";
import {AppStore} from "../../store";
import { fetchProductAd } from "./asyncAction";

type InitialState = {
    activeProduct: undefined | null;
}

const initialState: InitialState = {
    activeProduct: null,
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(fetchProductAd.fulfilled, (state, {payload}) => {
            state.activeProduct = payload
        })

    }
 })

const productState = (state: AppStore) => state.productReducer

export const selectProductState = (state: AppStore) => productState(state).activeProduct

export default productSlice.reducer;
