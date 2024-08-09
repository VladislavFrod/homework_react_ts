import {IPost} from "../../models/IPost";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {loadPosts} from "../reducers/posts/posts.extra.reducers";


type postSliceType={
    posts: IPost[],
    isLoaded: boolean,
}

const postInitState: postSliceType = {
    posts: [],
    isLoaded: false
}

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loadPosts.fulfilled,(state, action)=>{
            state.posts = action.payload;
            state.isLoaded = true;
        })
            .addCase(loadPosts.rejected, (state, action)=>{})
            .addMatcher(isFulfilled(loadPosts), (state, action)=>{})
    }
})

export const postActions={
    ...postSlice.actions,
    loadPosts
}