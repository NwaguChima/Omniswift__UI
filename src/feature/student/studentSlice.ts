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
      state.list = action.payload.students;
      state.status = action.payload.status;
      state.error = action.payload.error;
    },
  },
});

export const { fetchStudentList } = studentSlice.actions;
export const selectStudentList = (state: any) => state.student.list;
export const selectStudentStatus = (state: any) => state.student.status;
export const selectStudentError = (state: any) => state.student.error;

export default studentSlice.reducer;
