import React from 'react';
import {Link} from "react-router-dom";
import './menuComponent.css'

const MenuComponent = () => {
    return (
        <div className='MenuComponent'>
            <ul className="menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users Page</Link></li>
                <li><Link to={'/posts'}>Posts Page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;