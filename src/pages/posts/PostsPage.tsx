import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postActions} from "../../redux/slices/postSlice";
import {Link} from "react-router-dom";
import './postsStylePage.css'

const PostsPage = () => {
    let {postStore: {posts, isLoaded}} = useAppSelector(state => state);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [dispatch]);

    return (
        <div className="posts-page-container">
            {!isLoaded && <div className="loading-message">Loading in process...</div>}

            <div className="post-list">
                {posts.map(post =>
                    <ul className="post-details" key={post.id}>
                        <Link to={'/posts/' + post.id}>Post Title: {post.title}</Link>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PostsPage;
