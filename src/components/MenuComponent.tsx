import React from 'react';
import {Link} from "react-router-dom";
import './menuStyleComponent.css'

const MenuComponent = () => {
    return (
        <div className="menu-container">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;