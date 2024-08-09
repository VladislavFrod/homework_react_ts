import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService} from "../../../services/api-service";
import {AxiosError} from "axios";

export const loadPosts= createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) =>{
        try {
            let response = await postService.getAll()
            return thunkAPI.fulfillWithValue(response)
        }catch (e){
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)
        }
    }
)