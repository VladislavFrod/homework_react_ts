import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import MenuComponent from "./component/menu/MenuComponent";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    { path: '/', element: <MainLayout/>,
        errorElement:<CustomErrorLayout/>,
        children: [
            {path: 'Home', element: <MenuComponent/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ] },
]);

root.render(
    <RouterProvider router={router}/>
);

