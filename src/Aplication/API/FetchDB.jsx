import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const personalDatabase = createApi({
    reducerPath : 'personalDatabase',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/'}),
    endpoints : (builder) => ({
       dataUser: builder.query({
           query : () => '/',
       }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useDataUserQuery,
    useAddNewPostMutation,
    useEditPostMutation
  } = personalDatabase