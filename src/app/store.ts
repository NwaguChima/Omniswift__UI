import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/student/studentSlice';
import filterSlice from '../feature/filter/filterSlice';

export const store = configureStore({
  reducer: {
    student: studentReducer,
    filter: filterSlice,
  },
});
