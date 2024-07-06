import React, {Component} from 'react';
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPost";
import {getAllUsers, getPostsOfById} from "../../services/api-service";
import User from "../user-component/User";
import Posts from "../posts-component/Posts";

interface UsersComponentState {
    users: IUser[];
    posts: IPost[];
}

class Users extends Component<{}, UsersComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [],
            posts: []
        }
    }

    componentDidMount() {
        getAllUsers().then((value: IUser[]) => {
            this.setState({users: value});
        });
    }

    getPosts = (id: number) => {
        getPostsOfById(id).then((posts) => this.setState({ posts: [...posts] }))
    }

    render() {
        const {users, posts} = this.state;
        return (
            <div>
                <hr/>
                <div>
                    {users.map((user) => (
                        <User key={user.id} user={user} getPosts={this.getPosts}/>
                    ))}
                </div>
                <hr/>
                <div>
                    <Posts posts={posts}/>
                </div>
            </div>
        );
    }
}

export default Users;
