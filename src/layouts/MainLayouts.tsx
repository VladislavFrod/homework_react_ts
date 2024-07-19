import React from 'react';
import MenuComponent from "../component/menu/MenuComponent";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;