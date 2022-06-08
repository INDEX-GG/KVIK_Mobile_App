import { createAsyncThunk } from '@reduxjs/toolkit';
import { kvikAxios } from '../../../../http/customAxios';
import { IAdditionalFieldsFetchJSON } from '../../../../models/IAdditionalFieldsModel';

interface IMore {
  children: IAdditionalFieldsFetchJSON[];
}
interface IMoreData {
  jsonName: string;
}

export const fetchMoreAdditionalFields = createAsyncThunk(
  'placeOfferSlice/more',
  async (data: IMoreData, thunkAPI) => {
    try {
      const response = await kvikAxios.get<IMore>(
        `/auto_brand/${data.jsonName}.json`
      );
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue('Ошибка запроса');
    }
  }
);

export const sendNewAds = createAsyncThunk(
  'placeOfferSlice/more',
  async (data: any, thunkAPI) => {
    try {
      const {
        tokenReducer: { authToken },
      } = thunkAPI.getState() as { tokenReducer: { authToken: string } };
      console.log(authToken);
      const response = await kvikAxios
        .post('/api/setPosts', data, {
          headers: { 'x-access-token': authToken },
        })
        .then((r) => r);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
      console.log(e.response);
      thunkAPI.rejectWithValue('setPost error');
    }
  }
);
