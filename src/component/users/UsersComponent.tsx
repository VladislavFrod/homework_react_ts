import React, {useState, useEffect} from 'react';
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api-services";
import UserComponents from "./UserComponents";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAllUsers().then((res: IUser[]) => {
            setUsers([...res]);
        })
    }, []);
    console.log(users);
    return (
        <div>
            {users.map((user: IUser) => (
                <UserComponents key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersComponent;