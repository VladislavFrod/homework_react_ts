import axios from "axios";
import { IForm } from "../models/IForm";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosInstance.interceptors.request.use(request => {
    request.headers['Content-Type'] = 'application/json;charset=UTF-8';
    return request;
});

const postAll = async (): Promise<IForm[]> => {
    const res = await axiosInstance.get('/posts');
    return res.data;
}

export default postAll;
