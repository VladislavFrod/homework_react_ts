import React, {Component} from 'react';
import {IUser} from "../../models/IUser";


interface IProps{
    user:IUser
    getPosts: (id:number) => void
}



class User extends Component <IProps, {}>{
    render() {
        const {user, getPosts} = this.props;
        return (
            <div>
                <p>Id: {user.id}</p>
                <p>LastName: {user.lastName}</p>
                <p>FirstName: {user.firstName}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => {
                        getPosts(user.id)
                    }}>Get all posts </button>
            </div>
        );
    }
}

export default User;
