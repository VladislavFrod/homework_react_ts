import React, {useEffect, useState} from 'react';
import User from "./User";
import {IUser} from "../models/IUser";
import {getAllUsers} from "../services/api.service";

const Users = () =>{
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        getAllUsers().then((value: IUser[])=>{
            setUsers(value)
        })
    },[]);
    // console.log(users)
    // users.map(user=> console.log(user))

    return(
        <div>
            <div>
            {
                users.map((user) =>(
                    <User
                        key={user.id}
                        user={user}
                    />
                ))
            }
            </div>
        </div>

    )
}

export default Users;