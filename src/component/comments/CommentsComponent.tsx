import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getAllComments} from "../../services/api-services";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const [comment, setComment] = useState<IComment[]>([]);

    useEffect(() => {
        getAllComments().then((res: IComment[])=>{
            setComment([...res]);
        })
    }, []);
    return (
        <div>
            {
                comment.map((comment: IComment) => (
                    <CommentComponent key={comment.id} comment={comment}/>
                ))
            }
        </div>
    );
};

export default CommentsComponent;