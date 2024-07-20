import React from 'react';
import {Link} from "react-router-dom";
import './menuComponent.css'

const MenuComponent = () => {
    return (
        <div className="MenuComponent">
            <ul className={'menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/comments'>Comments</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;