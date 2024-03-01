import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const myApi = createApi({
    reducerPath : 'myApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://fakestoreapi.com/'}),
    endpoints : (builder) => ({
        myItem : builder.query({
            query : () => '/products',
        })
    })
})

export const {useMyItemQuery} = myApi;
