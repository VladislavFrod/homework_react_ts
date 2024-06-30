import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

axiosInstance.interceptors.request.use(request => {
    request.headers['Content-Type'] = 'application/json';
    return request;
})

const getAllUsers = async () => {
    const response = await axiosInstance.get('/users',{
        params:{
            limit: 0
    }
    });
    return response.data.users;
}

const getPostsOfById = async (id: number) => {
    const response = await axiosInstance.get('/posts/user/'+id);
    return response.data.posts;
}


export {getAllUsers, getPostsOfById};
