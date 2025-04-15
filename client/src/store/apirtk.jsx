import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const api=createApi ({
    reducerPath:"",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/"}),
    endpoints:(builder)=>({
        // getpost 
        Getnjspost:builder.query(
           {
              query:(h)=>`api/single/${h}`
            
            
            }
        
        ),
        //create post
        // Createnjpost:builder.mutation({
        //     query:(dataonj)=>({
        //         url:"api/get",
        //         method:"POST",
        //         body:dataonj
        //     })
        // }),

    })
})

export const {useGetnjspostQuery}=api