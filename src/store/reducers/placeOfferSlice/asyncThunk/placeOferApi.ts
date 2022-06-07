import { createAsyncThunk } from '@reduxjs/toolkit';
import {kvikAxios} from '../../../../http/customAxios';
import { IAdditionalFieldsFetchJSON } from '../../../../models/IAdditionalFieldsModel';

interface IMore {
  children: IAdditionalFieldsFetchJSON[]
}
interface IMoreData {
  jsonName: string
}

export const fetchMoreAdditionalFields = createAsyncThunk(
  'placeOfferSlice/more',
  async (data: IMoreData, thunkAPI) => {
    try {
      const response = await kvikAxios
        .get<IMore>(`/auto_brand/${data.jsonName}.json`);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue('Ошибка запроса');
    }
  }
)
