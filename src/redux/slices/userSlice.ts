import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {userService} from "../../services/api-service";
import {AxiosError} from "axios";

type userSliceType = {
    users: IUser[],
    isLoaded: boolean,
    error: string,
    user: IUser | null;
}

const userInitState: userSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null
};

let loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI)=>{
    try{
        let users = await userService.getAll()
        return thunkAPI.fulfillWithValue(users)
    }catch (e){
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
});

let loadUser = createAsyncThunk('userSlice/loadUser',
    async (id: number, thunkAPI)=>{
    try {
        let user = await userService.getById(id);
        return thunkAPI.fulfillWithValue(user)
    }catch (e){
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
    })

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers:{
        fillUser: (state, action)=>{
            state.user = action.payload;
        },
        refillUser: (state, action)=>{
            state.user = action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(loadUsers.fulfilled,(state, action)=>{
            state.users = action.payload;
            state.isLoaded = true;
        })
            .addCase(loadUser.fulfilled, (state, action)=>{
                state.user = action.payload;
            })
            .addMatcher(isRejected(loadUsers, loadUser),(state, action)=>{
                state.error=action.payload as string;
            })
    }
})

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}