import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser;
}

const UserComponents: FC<IProps>= ({user}) =>{

    return (
        <div>
                <ul>
                    <li>Id: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>UserName: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Address:[
                    street: {user.address.street},
                        suite: {user.address.suite},
                        city: {user.address.city},
                        zipcode: {user.address.zipcode}.
                        ]</li>
                <li>Geo: [
                    lat: {user.geo.lat},
                    lng: {user.geo.lng},
                    ]</li>
                    <li>Phone: {user.phone}</li>
                    <li>Website: {user.website}</li>
                    <li>Company:[
                        name: {user.company.name}
                        catchPhrase: {user.company.catchPhrase}
                        bs: {user.company.bs}
                        ]</li>
                </ul>
        </div>
    );
};

export default UserComponents;