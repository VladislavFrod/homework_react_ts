import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions, userSlice} from "../../redux/slices/userSlice";
import {Link} from "react-router-dom";

const UsersPage = () => {
    let {userStore: {users,isLoaded}} = useAppSelector(state => state);
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user =><div> <Link to={'/users/' + user.id}>{user.name}</Link></div>)}
        </div>
    );
};

export default UsersPage;