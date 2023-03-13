import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: 'idle', // idle, loading, success, failed
  error: null,
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    fetchStudentList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { fetchStudentList } = studentSlice.actions;
export const selectStudentList = (state: any) => state.student.list;

export default studentSlice.reducer;
