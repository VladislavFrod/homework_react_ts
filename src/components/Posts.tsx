import React, {FC} from 'react';
import {IForm} from "../models/IForm";

interface IProps {
    posts: IForm[];
}

const Posts: FC<IProps> = ({posts}) =>{
    return(
        <ul>
            {posts.map((post: IForm) =><li key={post.id}>userId: {post.userId}<br/> Title: {post.title} <br/> Body: {post.body} </li> )}
        </ul>
    )
}

export default Posts;