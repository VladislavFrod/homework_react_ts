import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Homework</Link></li>
                <li><Link to="users">User</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;