import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import MenuComponent from "./component/menu/MenuComponent";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";
import CommentPage from "./pages/CommentPage";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let router = createBrowserRouter([
    {
        path: '/', element: <MainLayouts/>,
        errorElement:<CustomErrorLayout/>,
        children: [
            {path: 'Home', element: <MenuComponent/>,},
            {path: 'Users', element: <UsersPage/>,},
            {path: 'users/:id/posts', element: <PostPage/>,},
            {path: 'Posts', element: <PostsPage/>,},
            {path: 'posts/:id/comments', element: <CommentPage/>,},
            {path: 'users/:id/posts/:id/comments', element: <CommentPage/>,},
            {path: 'Comments', element: <CommentsPage/>,},
        ]
    }
])
root.render(
    <RouterProvider router={router}/>
);

