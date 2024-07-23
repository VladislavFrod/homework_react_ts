import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './postComponent.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    post : IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    let navigate = useNavigate();
    return(
        <div className={'post-container'}>
            <ul className={'post-details'}>
                <li>UserId: {post.userId}</li>
                <li>Id: {post.id}</li>
                <li>Title: {post.title}</li>
                <li>Body: {post.body}</li>
            </ul>
            <button onClick={()=>{
                navigate(post.id.toString() + '/comments')
                }}>Show Comment Info</button>
        </div>
    )
}

export default PostComponent;