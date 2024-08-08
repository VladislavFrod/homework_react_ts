import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";
import './usersPage.css'

const UsersPage = () => {
    let {userSlice: {users,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div className='user-component'>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <ul className='user-details'><li>{user.name}</li></ul>)}
        </div>
    );
};

export default UsersPage;