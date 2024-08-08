import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postActions} from "../../redux/slices/postSlice";
import './postPage.css'

const PostsPage = () => {
    let {postSlice: {posts, isLoaded}} = useAppSelector(state => state)
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, [dispatch]);
    console.log(posts)
    return (
        <div className='post-container'>
            {!isLoaded && <div>Loading in process....</div>}
            {posts.map(post=>
                <ul className='post-details'>
                <li>Id: {post.id}</li>
                <li>Title: {post.title}</li>
                <li>Body: {post.body}</li>
            </ul>)}
        </div>
    );
};

export default PostsPage;