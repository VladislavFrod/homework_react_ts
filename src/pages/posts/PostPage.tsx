import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postActions} from "../../redux/slices/postSlice";
import './postStylePage.css'

const PostPage = () => {
    let {id} = useParams();
    let dispatch = useAppDispatch();
    let post = useAppSelector(state => state.postStore.post);

    useEffect(() => {
        if(id) dispatch(postActions.loadPost(+id));
    }, [id, dispatch]);

    return (
        <div className="post-page-container">
            {post ? (
                <div className="post-details">
                    <ul key={post.id}>
                        <li>Id: {post.id}</li>
                        <li>UserId: {post.userId}</li>
                        <li>Title: {post.title}</li>
                        <li>Body: {post.body}</li>
                    </ul>
                </div>
            ) : (
                <p className="loading-message">Loading...</p>
            )}
        </div>
    );
};

export default PostPage;
