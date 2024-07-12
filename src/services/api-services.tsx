import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

axiosInstance.interceptors.request.use(request=>{
    request.headers['Content-Type'] = 'application/json'
    return request;
})

const getAllUsers = async ():Promise<IUser[]> => {
    const res = await axiosInstance.get('/users');
    return res.data.users;
}

const getAllPosts = async ():Promise<IPost[]> => {
    const res = await axiosInstance.get('/posts');
    return res.data;
}

const getAllComments = async ():Promise<IComment[]> => {
    const res = await axiosInstance.get('/comments');
    return res.data;
}

export {getAllUsers, getAllPosts, getAllComments}