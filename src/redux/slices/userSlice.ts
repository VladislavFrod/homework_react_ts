import {IUser} from "../../models/IUser";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {loadUsers} from "../reducers/users/user.extra.reducers";

type userSliceType = {
    users: IUser[],
    isLoaded: boolean,
}

const userInitState: userSliceType = {
    users: [],
    isLoaded: false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(loadUsers.fulfilled,(state, action)=>{
            state.users = action.payload;
            state.isLoaded = true;
        })
            .addCase(loadUsers.rejected, (state, action)=>{

            })
            .addMatcher(isFulfilled(loadUsers), (state, action)=>{

            })
    }
})

export const userActions = {
    ...userSlice.actions,
    loadUsers
}