import React, { FC } from 'react';
import { IUser } from "../../models/IUser";
import './userComponent.css';
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser;
}

const UserComponents: FC<IProps> = ({ user }) => {
    let navigate = useNavigate();
    return (
        <div className="user-component">
            <ul className={'user-details'}>
                <li>Id: {user.id}</li>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Address:
                    <br/>street: {user.address.street},
                    <br/>suite: {user.address.suite},
                    <br/> city: {user.address.city},
                    <br/> zipcode: {user.address.zipcode}
                </li>
                <li>Geo:
                    <br/>lat: {user.address.geo.lat},
                    <br/>lng: {user.address.geo.lng}
                </li>
                <li>Phone: {user.phone}</li>
                <li>Website: {user.website}</li>
                <li>Company:
                    <br/>name: {user.company.name},
                    <br/>catchPhrase: {user.company.catchPhrase},
                    <br/>bs: {user.company.bs}
                </li>
            </ul>
            <button onClick={()=>{
                navigate(user.id.toString() + '/posts');
            }}>Show Posts Info</button>
        </div>
    );
};

export default UserComponents;
