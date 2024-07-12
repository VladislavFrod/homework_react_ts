import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getAllComments} from "../../services/api-services";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getAllComments().then((res: IComment[])=>{
            setComments([...res])
        });
    }, []);

    return (
        <div>
            {
                comments.map((comment) => (
                    <CommentComponent key={comment.id}
                    comments={comment}/>
                ))
            }
        </div>
    );
};

export default CommentsComponent;