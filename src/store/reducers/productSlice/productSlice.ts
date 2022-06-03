import {IAdCardModel} from "../../../models/IAdCardModel";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    activeProduct: IAdCardModel | null;
}

const initialState: InitialState = {
    activeProduct: null,
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        changeProduct: (state, {payload})  => {
            state.activeProduct = payload
        },
    }
})

export default productSlice.reducer;
export const { changeProduct } = productSlice.actions;
