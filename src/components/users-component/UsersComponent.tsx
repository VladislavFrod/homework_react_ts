import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api.service";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAllUsers().then((value: IUser[]) => {
            setUsers([...value]);
        });
    }, []);
    return (
        <div>
            {
                users.map((user)=>(
                    <UsersComponent

                />))
            }
        </div>
    )
}
export default UsersComponent;