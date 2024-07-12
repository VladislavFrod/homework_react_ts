import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './userComponent.css'

interface IProps{
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return(
        <div className="user-component">
        <ul className={'user-details'}>
            <li>Id: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>UserName: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>

        </ul>
</div>
    )
}

export default UserComponent;