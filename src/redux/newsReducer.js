// import {
//     createReducer,
//     createAction,
//     createAsyncThunk
// } from "@reduxjs/toolkit";

// const initialState = {
//     news: []
// };
// export const inc = createAction('INC')
// export default createReducer(
//     initialState, {
//         [inc]: function (state) {
//             state.count = state.count + 1
//         }
//     }
// );

import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    news: [],
    status: 'idle',
    error: null
}

export const fetchNewsByPage = createAsyncThunk(
    'news/fetchNews',
    async (page) => {
        const response = await axios.get(`https://api.hnpwa.com/v0/news/${page}.json`)
        return response.data
        
    }
)

const counterSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNewsByPage.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchNewsByPage.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [fetchNewsByPage.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.news.push(...action.payload)
        },
    },
})
export default counterSlice.reducer