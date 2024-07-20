import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import './commentComponent.css'

interface IProps {
    comment: IComment;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={'comment-component'}>
            <ul className={'comment-details'}>
                <li>PostId: {comment.postId}</li>
                <li>Id: {comment.id}</li>
                <li>Name: {comment.name}</li>
                <li>Email: {comment.email}</li>
                <li>Body: {comment.body}</li>
            </ul>
        </div>
    )
}

export default CommentComponent;