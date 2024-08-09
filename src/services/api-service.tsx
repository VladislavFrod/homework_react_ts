import axios from "axios";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/urls";

let axiosInstance = axios.create({
    baseURL: baseUrl,
})

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        let response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: number): Promise<IUser> => {
        let response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    }
}
export const postService = {
    getAll: async (): Promise<IPost[]> => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: number): Promise<IPost> => {
        let response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;
    }
}

