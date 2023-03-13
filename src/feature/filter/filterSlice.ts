import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataType, defaultData, ISetFilterPayload } from '../../utils/utils';

const initialState: DataType = defaultData;

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<ISetFilterPayload>) {
      const { name, value } = action.payload;
      (state as any)[name] = value;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const selectFilter = (state: any) => state.filter;
export default filterSlice.reducer;
