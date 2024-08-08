import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {baseUrl, urls} from "../constants/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const userService = {
    getAll: async () => {
        const res = await axiosInstance.get<IUser[]>(urls.users.base);
        return res.data;
    }
}


export const postService = {
    getAll: async () => {
        let res = await axiosInstance.get<IPost[]>(urls.posts.base);
        return res.data;
    }
}
