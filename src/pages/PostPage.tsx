import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { IPost } from "../models/IPost";
import { getPostsOfUser } from "../services/api-services";
import PostComponent from "../component/posts/PostComponent";

const PostPage = () => {
    let { id } = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (id) {
            getPostsOfUser(id).then(value => setPosts(value));
        }
    }, [id]);

    return (
        <div>
            {posts.map(post => (
                <PostComponent key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostPage;