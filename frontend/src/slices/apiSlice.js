import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({ //sets up the core api logic
    baseQuery, //tells RTK Query how to make requests. so RTK knows all requests should go to base URL
    tagTypes:['Product', 'Order', 'User'], // when product is created RTK knows it should automatically refetch products
    endpoints: (builder) => ({})
})