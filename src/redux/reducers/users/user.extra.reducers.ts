import {createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../../services/api-service";
import {AxiosError} from "axios";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            let response = await userService.getAll();
            // thunkAPI.dispatch(userActions.xxx());
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)