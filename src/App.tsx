import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";

const App= () => {
  let {userSlice: {users,isLoaded}} = useAppSelector(state => state);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUsers());
  }, []);

  return (
    <div>
      {!isLoaded && <div>Loading in process....</div>}

      {users.map(user => <div>{user.name}</div>)}
    </div>
  );
}

export default App;
