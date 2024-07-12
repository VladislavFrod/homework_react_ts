import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps{
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return(
        <ul>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>

        </ul>
    )
}

export default UserComponent;