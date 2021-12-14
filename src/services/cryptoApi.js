import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '7cb424dc0emshe4eca59cc525143p1f5f86jsn4c1ba54a3141'
}

const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl }),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery,
}=cryptoApi