import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getAllPosts} from "../../services/api-services";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllPosts().then((res: IPost[])=>{
            setPosts([...res]);
        })
    }, []);
    console.log(posts)
    return (
        <div>
            {
                posts.map((post: IPost) => (
                <PostComponent key={post.id}
                post={post}/>
                    ))
            }
        </div>
    );
};

export default PostsComponent;