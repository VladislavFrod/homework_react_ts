import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './post-component.css'

interface IProps{
    posts: IPost;
}

const PostComponent : FC<IProps> = ({posts}) =>{
    return(
        <div className={'post-container'}>
        <ul className={'post-details'}>
            <li>Id: {posts.id}</li>
            <li>UserId: {posts.userId}</li>
            <li>Title: {posts.title}</li>
            <li>Body: {posts.body}</li>
        </ul>
        </div>
    )
}

export default PostComponent;