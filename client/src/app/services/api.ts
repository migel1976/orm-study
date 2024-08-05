
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery(
  {
    baseUrl: 'http://localhost:3000/api'
  }
)

export const api = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
