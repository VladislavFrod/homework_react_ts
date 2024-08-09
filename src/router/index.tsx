import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import MainLayout from "../layouts/MainLayout";
import UserPage from "../pages/users/UserPage";
import PostPage from "../pages/posts/PostPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>404 ERROR</h1>,
        children:[
            {index: true, element: <HomePage/>},
            {path: '/users', element: <UsersPage/>},
            {path: '/users/:id', element: <UserPage/>},
            {path: '/posts', element: <PostsPage/>},
            {path: '/posts/:id', element: <PostPage/>}
        ]
    }
])