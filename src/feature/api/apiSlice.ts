import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test.omniswift.com.ng/api/' }),
  endpoints: (builder) => ({
    getLevelsOptions: builder.query({
      query: () => 'viewAllLevels',
    }),

    getStatesOptions: builder.query({
      query: () => 'viewAllStates',
    }),

    getGenderOptions: builder.query({
      query: () => 'viewAllGenders',
    }),

    getAgesOptions: builder.query({
      query: () => 'viewAllAges',
    }),

    getStudents: builder.query({
      query: () => 'viewAllData',
    }),

    filterStudents: builder.mutation({
      query: (filter: any) => ({
        url: 'filterData',
        method: 'POST',
        body: filter,
      }),
    }),

    getStudentResult: builder.mutation({
      query: (id: any) => ({
        url: `viewResult/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetStudentsQuery } = apiSlice;
