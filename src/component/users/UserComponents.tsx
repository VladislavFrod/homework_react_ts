import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser;
}

const UserComponents: FC<IProps>= ({user}) =>{

    return (
        <div>
                <ul>
                    <li>Id: </li>
                </ul>
        </div>
    );
};

export default UserComponents;