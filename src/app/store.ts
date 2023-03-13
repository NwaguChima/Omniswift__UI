import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/student/studentSlice';
import filterSlice from '../feature/filter/filterSlice';
import { apiSlice } from '../feature/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    student: studentReducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
