import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getAllPosts} from "../../services/api-services";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAllPosts().then((res: IPost[]) => {
            setPosts([...res]);
        })
    }, []);

    return (
        <div>
            {
                posts.map((post) => (
                    <PostComponent key={post.id}
                                   posts={post}/>
                ))
            }
        </div>
    );
};

export default PostsComponent;