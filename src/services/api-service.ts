import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
})

axiosInstance.interceptors.request.use(request=>{
    request.headers['Content-Type'] = 'application/json;charset=UTF-8';
    return request;
})

const getAllUsers = async (): Promise<IUser[]> => {
    const res = await axiosInstance.get('/users');
    return res.data.users;
}

const getPostsOfById = async (id: number):Promise<IPost[]> => {
    const res = await axiosInstance.get('/posts/user/'+id);
    return res.data.posts;
}

export {getAllUsers, getPostsOfById};