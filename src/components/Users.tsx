import React, {useEffect, useState} from 'react';
import User from "./User";
import {IUser} from "../models/IUser";
import {getAllUsers} from "../services/api.service";
import {IPost} from "../models/IPost";
import Posts from "./Posts";
import {getPostsOfById} from "../services/api.service";
import './users-component.css';

const Users = () =>{
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(()=>{
        getAllUsers().then((value: IUser[])=>{
            setUsers([...value])
        })
    },[]);
    // console.log(users)
    // users.map(user=> console.log(user))

    const getPosts = (id:number) => {
        getPostsOfById(id).then((posts => setPosts([...posts])))
    }
    console.log(posts);
    posts.map(posts=> console.log(posts))

    return(
        <div className={'mainComponent'}>
            <div className={'user-list'}>
            {
                users.map((user) =>(
                    <User
                        key={user.id}
                        user={user}
                        getPosts={getPosts}
                    />
                ))
            }
            </div>
            <div className={'user-post'}>
                <Posts posts={posts}/>
            </div>
        </div>

    )
}

export default Users;