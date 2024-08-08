import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import HomePage from "../pages/home/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>404 Error</h1>,
        children:[
            {
                index: true, element: <HomePage/>,
            },
            {path: 'users', element: <UsersPage/>,},
            {path: 'posts', element: <PostsPage/>,}
        ]
    }
])

export default router;