import axios from "axios";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/urls";

let axiosInstance = axios.create({
    baseURL: baseUrl,
})

export const userService = {
    getAll: async ()=>{
        const res = await axiosInstance.get<IUser[]>(urls.users.base)
        return res.data
    }

}

export const postService ={
    getAll: async () =>{
        const res = await axiosInstance.get<IPost[]>(urls.posts.base)
        return res.data
    }
}

