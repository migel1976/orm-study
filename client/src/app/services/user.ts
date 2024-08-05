
import { User } from "@prisma/client";
import { api } from "./api";

// export type TUserData=Omit<User,id>
export const userApi = api.injectEndpoints(
  {
    endpoints: (builder) => ({
      getAllUser: builder.query<User[], void>({
        query: () => ({
          url: "/users",
          method: "GET",
        }),
      }),
      user: builder.query<User, string>({
        query: (id) => ({
          url: `/user/${id}`,
          method: 'GET',
        })
      })
    })
  }
)

export const { useGetAllUserQuery, useUserQuery } = userApi
export const { endpoints: { getAllUser, user } } = userApi

