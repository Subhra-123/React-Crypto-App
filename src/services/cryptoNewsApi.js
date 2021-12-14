import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders= {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '7cb424dc0emshe4eca59cc525143p1f5f86jsn4c1ba54a3141'
  }

  const baseUrl='https://bing-news-search1.p.rapidapi.com'
  const createRequest=(url)=>({url,headers:cryptoNewsHeaders});

  export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl }),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi;