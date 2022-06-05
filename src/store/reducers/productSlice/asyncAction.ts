import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppStore} from "../../store";
import {AxiosInstance} from "axios";

export const fetchProductAd = createAsyncThunk<
    undefined,
    number,
    {
        dispatch: AppDispatch,
        state: AppStore,
        extra: AxiosInstance
    }
    >(
    'productAds/data',
    async (productId, {extra: api}) => {
        try {
            const {data} = await api.post('/getPost', productId);
            return data
        } catch (err) {
            throw err
        }
    }
)

