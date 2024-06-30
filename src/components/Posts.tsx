import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    posts: IPost[];
}

const Posts: FC<IProps> = ({posts}) => {
    return(
        <ul>
            {posts.map(post => <li key={post.id}>UserId : {post.userId} <br/>
                Title: {post.title} <br/>
                Body: {post.body} </li>)}
        </ul>
    )
}

export default Posts;