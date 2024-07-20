import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './postComponent.css'

interface IProps {
    post : IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    return(
        <div className={'post-container'}>
            <ul className={'post-details'}>
                <li>UserId: {post.userId}</li>
                <li>Id: {post.id}</li>
                <li>Title: {post.title}</li>
                <li>Body: {post.body}</li>
            </ul>
        </div>
    )
}

export default PostComponent;