import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface IProps{
    user: IUser;
}

const User: FC<IProps> = ({user}) =>{
    return(
        <div>
            {user.id} : {user.firstName} - {user.lastName} - {user.maidenName} --- {user.age} --- {user.email}
        </div>
    )
}

export default User;