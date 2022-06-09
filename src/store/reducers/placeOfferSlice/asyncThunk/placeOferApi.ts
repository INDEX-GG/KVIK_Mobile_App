import { createAsyncThunk } from '@reduxjs/toolkit';
import { kvikAxios } from '../../../../http/customAxios';
import { IAdditionalFieldsFetchJSON } from '../../../../models/IAdditionalFieldsModel';
import { HOST } from '../../../../constants/constants';
import { IDevicePhoto } from '../../../../types/types';

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

export const sendNewAds = createAsyncThunk<{ id: number }, any>(
  'placeOfferSlice/newOrder',
  async (data: any, thunkAPI) => {
    const {
      tokenReducer: { refreshToken },
    } = thunkAPI.getState() as { tokenReducer: { refreshToken: string } };
    try {
      console.log(refreshToken);
      const response = await kvikAxios
        .post('/api/setPosts', data, {
          headers: { 'x-access-token': refreshToken },
        })
        .then((r) => r);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue('setPost error');
    }
  }
);

export const sendNewAdsPhoto = createAsyncThunk(
  'placeOfferSlice/newOrderPhoto',
  async (data: { userId: number; postId: number }, thunkAPI) => {
    try {
      const {
        tokenReducer: { refreshToken },
        cameraReducer: { fileArray },
        placeOfferReducer: { importantPhoto },
      } = thunkAPI.getState() as {
        tokenReducer: { refreshToken: string };
        cameraReducer: { fileArray: IDevicePhoto[] };
        placeOfferReducer: { importantPhoto: string };
      };
      const photoData = new FormData();

      photoData.append('files[]', {
        name: 'importantPhoto.jpeg',
        type: 'image/webp',
        uri: importantPhoto,
      });

      const filterFile = fileArray.filter(
        (item) => item.uri !== importantPhoto
      );

      for (let i = 0; i < filterFile.length; i++) {
        photoData.append('files[]', {
          name: fileArray[i].fileName,
          type: 'image/webp',
          uri: fileArray[i].uri,
        });
      }

      console.log(photoData);

      const response = await fetch(
        `${HOST}/zz/post/${data.userId}/${data.postId}`,
        {
          body: photoData,
          method: 'post',
          headers: {
            'x-access-token': refreshToken,
            'content-type': 'multipart/form-data',
          },
        }
      ).then((r) => r);
      return response;
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue('setPost error');
    }
  }
);
