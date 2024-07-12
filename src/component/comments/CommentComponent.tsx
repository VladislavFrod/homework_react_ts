import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import './comment-component.css'
interface IProps{
    comments: IComment;
}

const CommentComponent : FC<IProps> = ({comments}) => {
    return(
        <div className={'comment-component'}>
        <ul className={'comment-details'}>
           <li>PostId: {comments.postId}</li>
           <li>Id: {comments.id}</li>
           <li>Name: {comments.name}</li>
           <li>Email: {comments.email}</li>
           <li>Body: {comments.body}</li>
        </ul>
        </div>
    )
}

export default CommentComponent;