import {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api-services";
import UserComponent from "./UserComponent";

const UsersComponent =()=>{
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAllUsers().then((value: IUser[])=>{
            setUsers([...value]);
        })
    }, []);
    console.log(users);
    return(
        <div>
            {
                users.map((user)=>(
                    <UserComponent key={user.id}
                                   user={user}/>
                ))
            }
        </div>
    )
}

export default UsersComponent;