import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id} : {user.lastName}
        </div>
    )
}

export default UserComponent;