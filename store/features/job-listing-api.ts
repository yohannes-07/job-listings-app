import { createApi, fetchBaseQuery, FetchArgs } from '@reduxjs/toolkit/query/react';
import {JobPosting, JobPostingsData } from '@/types/jobPost';

const baseUrl = 'http://localhost:3004';

export const jobApi = createApi({
    reducerPath: 'jopPost',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['jobPosts'],
    endpoints: (builder) => ({
        getJobsList: builder.query<JobPosting[], void>({
            query: () => '/jobPosts',
            providesTags: ['jobPosts']
        }),

    })
});

export const {useGetJobsListQuery} = jobApi


