import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'/>Users</li>
                <li><Link to='/posts'/>Posts</li>
                <li><Link to='/comments'/>Comments</li>
            </ul>
        </div>
    );
};

export default MenuComponent;