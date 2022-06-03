import {IAdCardModel} from "../../../models/IAdCardModel";
import { createSlice } from "@reduxjs/toolkit";
import {fetchProductAd} from "./asyncAction";

type InitialState = {
    activeProduct: IAdCardModel | null;
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

export default productSlice.reducer;
