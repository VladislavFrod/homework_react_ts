import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";
import {Link} from "react-router-dom";
import './usersStyle.css'

const UsersPage = () => {
    let {userStore: {users, isLoaded}} = useAppSelector(state => state);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [dispatch]);

    return (
        <div className="users-page-container">
            {!isLoaded && <div className="loading-message">Loading in process...</div>}

            <div className="user-list">
                {users.map(user => (
                    <div key={user.id}>
                        <Link to={'/users/' + user.id}>{user.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
