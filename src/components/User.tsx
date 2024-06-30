import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {getPosts} from "../services/api.service";

interface IProps{
    user: IUser;
}

const User: FC<IProps> = ({user}) =>{
    return(
        <div>
            {user.id} : {user.firstName} - {user.lastName} --- {user.age} age --- {user.gender} - <button onClick={()=>{
                getPosts(user.id);
        }}>Get all posts by user</button>
        </div>
    )
}

export default User;