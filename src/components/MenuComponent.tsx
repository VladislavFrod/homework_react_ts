import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Users'>Users</Link></li>
                <li><Link to='/Posts'>Posts</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;