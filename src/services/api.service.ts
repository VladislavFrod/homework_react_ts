import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

axiosInstance.interceptors.request.use(request => {
    request.headers['Content-Type'] = 'application/json';
    return request;
})

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}

export {getAllUsers};
