import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slices/postSlice";
import {userSlice} from "./slices/userSlice";

export const store= configureStore({
    reducer: {
        userStore: userSlice.reducer,
        postStore: postSlice.reducer
    }
});

export const useAppSelector= useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch=useDispatch.withTypes<typeof store.dispatch>()