import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test.omniswift.com.ng/api/' }),
  tagTypes: ['Students', 'Levels', 'States', 'Ages', 'Genders'],
  endpoints: (builder) => ({
    getLevelsOptions: builder.query({
      query: () => 'viewAllLevels',
      transformResponse: (response: any) => {
        const levels = response.data.map((item: any) => {
          return {
            label: item.level,
            value: item.level,

            name: 'level',
          };
        });
        return levels;
      },
      providesTags: ['Levels'],
    }),

    getStatesOptions: builder.query({
      query: () => 'viewAllStates',
      transformResponse: (response: any) => {
        const states = response.data.map((item: any) => {
          return {
            label: item.name,
            value: item.name.toLowerCase(),
            name: 'state',
          };
        });
        return states;
      },
      providesTags: ['States'],
    }),

    getGenderOptions: builder.query({
      query: () => 'viewAllGender',
      transformResponse: (response: any) => {
        const genders = response.data.map((item: any) => {
          return {
            label: item.gender,
            value: item.gender,
            name: 'gender',
          };
        });
        return genders;
      },
      providesTags: ['Genders'],
    }),

    getAgesOptions: builder.query({
      query: () => 'viewAllAges',
      transformResponse: (response: any) => {
        const ages = response.data.map((item: any) => {
          return { label: item.age, value: item.age, name: 'age' };
        });
        return ages;
      },
      providesTags: ['Ages'],
    }),

    getStudents: builder.query({
      query: () => 'viewAllData',
      transformResponse: (response: any) => {
        return response.data?.students;
      },
      providesTags: ['Students'],
    }),

    filterStudents: builder.mutation({
      query: (filter: any) => ({
        url: 'filterData',
        method: 'POST',
        body: filter,
      }),
      invalidatesTags: ['Students'],
    }),

    getStudentResult: builder.mutation({
      query: (id: any) => ({
        url: `viewResult/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetLevelsOptionsQuery,
  useGetStatesOptionsQuery,
  useGetGenderOptionsQuery,
  useGetAgesOptionsQuery,
  useGetStudentsQuery,
  useFilterStudentsMutation,
  useGetStudentResultMutation,
} = apiSlice;
