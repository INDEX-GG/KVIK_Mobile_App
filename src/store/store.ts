import { allReducers } from './allReducers';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { kvikAxios } from '../http/customAxios';

const rootReducer = combineReducers(allReducers);

const api = kvikAxios;

export const setupStore = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
