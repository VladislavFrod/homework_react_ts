import React, {FC} from 'react';
import {IUser} from "../models/IUser";


interface IProps{
    user: IUser;
    getPosts: (id:number) => void
}

const User: FC<IProps> = ({user, getPosts}) =>{
    return(
        <div>
            {user.id}  {user.firstName} - {user.lastName} --- {user.age} age --- {user.gender} - <button onClick={()=>{
            getPosts(user.id);
        }}>Get all posts</button>
        </div>
    )
}

export default User;