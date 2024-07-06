import React, { Component } from 'react'
import { IPost } from '../../models/IPost'

interface IProps {
    posts: IPost[]
}

class Posts extends Component<IProps, {}> {
    render() {
        const { posts } = this.props
        return (
            <ul>
                {posts.map(post => <li key={post.id}>UserId : {post.userId} <br/>
                    Title: {post.title} <br/>
                    Body: {post.body} </li>)}
            </ul>
        )
    }
}

export default Posts