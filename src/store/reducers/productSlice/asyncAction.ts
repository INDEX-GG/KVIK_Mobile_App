import {createAsyncThunk} from "@reduxjs/toolkit";
import {kvikAxios} from "../../../http/customAxios";

export const fetchProductAd = createAsyncThunk(
    'productAds/data',
    async (productId: number, thunkAPI) => {
        try {
            const {data} = await kvikAxios.post('/getPost', productId);
            return data
        } catch (err) {
            throw err
        }
    }
)
