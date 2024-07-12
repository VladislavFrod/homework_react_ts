import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import MenuComponent from "./component/menu/MenuComponent";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    { path: '/', element: <MainLayout/>,
        errorElement:<CustomErrorLayout/>,
        children: [
            {path: 'Home', element: <MenuComponent/>},
            {path: 'users', element: <UsersPage/>}
        ] },
]);

root.render(
    <RouterProvider router={router}/>
);

