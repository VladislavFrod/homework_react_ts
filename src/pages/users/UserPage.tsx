import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";
import './userStyle.css'

const UserPage = () => {
    let {id} = useParams();

    let dispatch = useAppDispatch();
    let user = useAppSelector(state => state.userStore.user);

    useEffect(() => {
        if (id) dispatch(userActions.loadUser(+id));
    }, [id]);


    return (
        <div className="user-container" >
            {user ? (
                <ul key={user.id}>
                    <li>Id: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>UserName: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Address:</li>
                    <ul>
                        <li>Street: {user.address.street}</li>
                        <li>Suite: {user.address.suite}</li>
                        <li>City: {user.address.city}</li>
                        <li>Zipcode: {user.address.zipcode}</li>
                        <li>Geo:</li>
                        <ul>
                            <li>lat: {user.address.geo.lat}</li>
                            <li>lng: {user.address.geo.lng}</li>
                        </ul>
                    </ul>
                    <li>Phone: {user.phone}</li>
                    <li>Website: {user.website}</li>
                    <li>Company:</li>
                    <ul>
                        <li>Name: {user.company.name}</li>
                        <li>catchPhrase: {user.company.catchPhrase}</li>
                        <li>bs: {user.company.bs}</li>
                    </ul>

                </ul>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    );
};

export default UserPage;