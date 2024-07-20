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
            {path: 'Posts', element: <PostsPage/>,},
            {path: 'Comments', element: <CommentsPage/>,},
        ]
    }
])
root.render(
    <RouterProvider router={router}/>
);

